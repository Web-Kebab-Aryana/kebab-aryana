import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import {
    Stack,
    Text,
    Tag,
    Heading,
    Divider,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import MenuCard from "@/Components/MenuCard";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FilePicker from "@/Components/file-picker";
import axios from "axios";
import { useToastErrorHandler, type ResponseModel } from "@/Hooks/useApi";
import { router } from "@inertiajs/react";

import imageCompression from "browser-image-compression";

type Content = {
    aboutus: string;
    whatsapp_number: string;
    location: string;
    coordinate: string;
};

type Menu = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
};

type AboutModalState = {
    about?: Content;
    menu?: Menu;
    mode: "create" | "edit";
};

const aboutSchema = z.object({
    aboutus: z.string({ required_error: "About us description is required" }),
    location: z.string({ required_error: "Location address is required" }),
    whatsapp_number: z
        .string({ required_error: "Phone is required" })
        .min(10)
        .max(13)
        .regex(/^\+?([ -]?\d+)+|\(\d+\)([ -]\d+)$/, "Invalid phone number"),
    coordinate: z.string({ required_error: "Coordinate is required" }),
});

const maxFileSize = 2 * 1024 * 1024;
const acceptedMimes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const menuSchema = z.object({
    name: z.string({ required_error: "Name is required" }),
    price: z.number({ required_error: "Price is required" }),
    description: z.string({ required_error: "Description is required" }),
    image: z
        .instanceof(Blob)
        .refine(
            (file) => {
                if (!file) return true;
                if (file.size > maxFileSize) {
                    return false;
                }
                if (!acceptedMimes.includes(file.type)) {
                    return false;
                }
                return true;
            },
            {
                message: `File size must be under ${
                    maxFileSize / 1024 / 1024
                }MB and type must be one of ${acceptedMimes.join(", ")}`,
            }
        )
        .optional(),
    category: z.string({ required_error: "Category is required" }),
});

type AboutDataFillable = z.infer<typeof aboutSchema>;

type MenuDataFillable = z.infer<typeof menuSchema>;

export default function Edit({
    auth,
    content,
    menus,
}: PageProps & {
    content: Content;
    menus: Menu[];
}) {
    const aboutForm = useForm<AboutDataFillable>({
        resolver: zodResolver(aboutSchema),
    });

    const menuForm = useForm<MenuDataFillable>({
        resolver: zodResolver(menuSchema),
    });

    const toast = useToast();
    const errorHandler = useToastErrorHandler();

    const [aboutModalState, setAboutModalState] = useState<
        AboutModalState | undefined
    >();

    useEffect(() => {
        if (aboutModalState?.mode === "edit") {
            aboutForm.reset(content);
        }

        if (aboutModalState?.mode === "create") {
            menuForm.reset();
        }
    }, [aboutModalState]);

    return (
        <Stack
            bgColor={"#FFF7E4"}
            minH={"100vh"}
            minW={"100vw"}
            direction={"row"}
        >
            <Sidebar auth={auth}>
                <Stack
                    bgColor={"white"}
                    shadow={"lg"}
                    borderRadius={"2xl"}
                    p={5}
                    my={5}
                    // w={"100%"}
                    // h={"35%"}
                    direction={["column", "column", "row", "row", "row"]}
                >
                    {/* LEFT */}
                    <Stack flex={1} gap={3}>
                        <Stack
                            direction={["column", "column", "column", "row"]}
                            gap={["1.5rem", "1.5rem", "1rem", "1.5rem"]}
                        >
                            <Stack
                                direction={[
                                    "column",
                                    "column",
                                    "row",
                                    "row",
                                    "row",
                                ]}
                            >
                                <Heading color={"#352919"} fontSize={"xl"}>
                                    About Us
                                </Heading>
                                <Tag
                                    bgColor={"#D59B70"}
                                    w={"fit-content"}
                                    color={"white"}
                                    rounded={"full"}
                                    fontSize={"0.75rem"}
                                >
                                    {content.whatsapp_number}
                                </Tag>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Text>{content.aboutus}</Text>
                        </Stack>
                    </Stack>
                    <Divider
                        orientation="vertical"
                        bgColor={"#D9D9D9"}
                        w={"0.1rem"}
                        mx={5}
                    />
                    {/* RIGHT */}
                    <Stack flex={1} justifyContent={"space-between"}>
                        <Stack gap={3}>
                            <Heading color={"#352919"} fontSize={"xl"}>
                                Location
                            </Heading>
                            <Text>{content.location}</Text>
                        </Stack>
                        <Stack align={"end"}>
                            <Button
                                bgColor={"#FFF7E4"}
                                border={"1px solid #B5AB99"}
                                borderRadius={"full"}
                                w={"7rem"}
                                onClick={() =>
                                    setAboutModalState({ mode: "edit" })
                                }
                            >
                                <BiSolidEdit color="#352919" />
                                <Text color={"#352919"} ml={2}>
                                    Edit
                                </Text>
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        align={"center"}
                        mb={3}
                    >
                        <Heading color={"#352919"} fontSize={"xl"}>
                            Menu
                        </Heading>
                        <Button
                            bgColor={"#352919"}
                            color={"#FEF6E3"}
                            borderRadius={"full"}
                            px={8}
                            onClick={() =>
                                setAboutModalState({ mode: "create" })
                            }
                        >
                            <Text>+ Add</Text>
                        </Button>
                    </Stack>
                    <Stack
                        direction={["column", "column", "row", "row", "row"]}
                        overflow={"scroll"}
                        gap={5}
                    >
                        {menus.length > 0 ? (
                            menus.map((menu) => (
                                <MenuCard key={menu.name} menu={menu} />
                            ))
                        ) : (
                            <Text>No menu available</Text>
                        )}
                    </Stack>
                </Stack>

                {/* MODAL START */}
                <Modal
                    lockFocusAcrossFrames={true}
                    isCentered
                    isOpen={!!aboutModalState}
                    onClose={() => setAboutModalState(undefined)}
                >
                    <ModalOverlay
                        bg="blackAlpha.300"
                        backdropFilter="blur(10px)"
                    />
                    <ModalContent>
                        <ModalHeader fontWeight={"bold"}>
                            {aboutModalState?.mode === "create"
                                ? "Add Menu"
                                : "Edit About Us"}
                        </ModalHeader>
                        <ModalCloseButton />

                        <ModalBody>
                            {aboutModalState?.mode === "create" && (
                                <form
                                    id="add-data"
                                    onSubmit={menuForm.handleSubmit((data) => {
                                        const formData = new FormData();
                                        formData.append("name", data.name);
                                        formData.append(
                                            "price",
                                            data.price.toString()
                                        );
                                        formData.append(
                                            "description",
                                            data.description
                                        );
                                        formData.append(
                                            "category",
                                            data.category
                                        );
                                        formData.append("image", data.image!);

                                        axios
                                            .post<ResponseModel>(
                                                `/api/menus`,
                                                formData,
                                                {
                                                    headers: {
                                                        "Content-Type":
                                                            "multipart/form-data",
                                                    },
                                                }
                                            )
                                            .then((res) => {
                                                toast({
                                                    title: "Success",
                                                    description:
                                                        res.data.message,
                                                    status: "success",
                                                    duration: 5000,
                                                    isClosable: true,
                                                });
                                            })
                                            .catch(errorHandler)
                                            .finally(() => {
                                                setAboutModalState(undefined);
                                                router.reload();
                                            });
                                    })}
                                >
                                    <Stack spacing={4}>
                                        {/* NAME START */}
                                        <FormControl
                                            isInvalid={
                                                !!menuForm.formState.errors.name
                                            }
                                        >
                                            <FormLabel>Menu Name</FormLabel>

                                            <Input
                                                placeholder="Menu Name"
                                                {...menuForm.register("name")}
                                                type="text"
                                            />

                                            <FormErrorMessage>
                                                {menuForm.formState.errors
                                                    .name &&
                                                    menuForm.formState.errors
                                                        .name.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* NAME END */}
                                        {/* PRICE START */}
                                        <FormControl
                                            isInvalid={
                                                !!menuForm.formState.errors
                                                    .price
                                            }
                                        >
                                            <FormLabel>Price</FormLabel>

                                            <Input
                                                placeholder="Price"
                                                {...menuForm.register("price", {
                                                    valueAsNumber: true,
                                                })}
                                                type="number"
                                            />

                                            <FormErrorMessage>
                                                {menuForm.formState.errors
                                                    .price &&
                                                    menuForm.formState.errors
                                                        .price.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* DESCRIPTION START */}
                                        <FormControl
                                            isInvalid={
                                                !!menuForm.formState.errors
                                                    .description
                                            }
                                        >
                                            <FormLabel>
                                                Menu Description
                                            </FormLabel>

                                            <Textarea
                                                placeholder="Description"
                                                {...menuForm.register(
                                                    "description"
                                                )}
                                                // type="text"
                                            />

                                            <FormErrorMessage>
                                                {menuForm.formState.errors
                                                    .description &&
                                                    menuForm.formState.errors
                                                        .description.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* DESCRIPTION END */}
                                        {/* IMAGE START */}
                                        <FormControl
                                            isInvalid={
                                                !!menuForm.formState.errors
                                                    .image
                                            }
                                        >
                                            <FormLabel>Image</FormLabel>

                                            <Controller
                                                control={menuForm.control}
                                                name="image"
                                                render={({
                                                    field: { onChange },
                                                }) => (
                                                    <FilePicker
                                                        onFileChange={(
                                                            files
                                                        ) => {
                                                            console.log(files);
                                                            const file =
                                                                files[0];
                                                            if (!file) return;

                                                            const options = {
                                                                maxSizeMB: 0.7,
                                                                maxWidthOrHeight: 768,
                                                                useWebWorker:
                                                                    true,
                                                            };

                                                            imageCompression(
                                                                file,
                                                                options
                                                            )
                                                                .then(
                                                                    (
                                                                        compressedFile
                                                                    ) => {
                                                                        onChange(
                                                                            compressedFile
                                                                        );
                                                                    }
                                                                )
                                                                .catch(
                                                                    (err) => {
                                                                        menuForm.setError(
                                                                            "image",
                                                                            {
                                                                                type: "validate",
                                                                                message:
                                                                                    err.message,
                                                                            }
                                                                        );
                                                                    }
                                                                );
                                                        }}
                                                        placeholder="Klik disini untuk mengganti image"
                                                        accept="image/*"
                                                    />
                                                )}
                                            />

                                            <FormErrorMessage>
                                                {menuForm.formState.errors
                                                    .image &&
                                                    menuForm.formState.errors
                                                        .image.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* IMAGE END */}
                                        {/* TAG START */}
                                        <FormControl
                                            isInvalid={
                                                !!menuForm.formState.errors
                                                    .category
                                            }
                                        >
                                            <FormLabel>Category</FormLabel>

                                            <Select
                                                {...menuForm.register(
                                                    "category"
                                                )}
                                                placeholder="Select Category"
                                            >
                                                <option value="Kebab">
                                                    Kebab
                                                </option>
                                                <option value="Nasi">
                                                    Nasi
                                                </option>
                                                <option value="Snack">
                                                    Snack
                                                </option>
                                                <option value="Minuman">
                                                    Minuman
                                                </option>
                                            </Select>

                                            <FormErrorMessage>
                                                {menuForm.formState.errors
                                                    .category &&
                                                    menuForm.formState.errors
                                                        .category.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </Stack>
                                </form>
                            )}

                            {aboutModalState?.mode === "edit" && (
                                <form
                                    id="edit-about"
                                    onSubmit={aboutForm.handleSubmit((data) => {
                                        axios
                                            .post<ResponseModel>(
                                                "/api/content?_method=PUT",
                                                data
                                            )
                                            .then((res) => {
                                                toast({
                                                    title: "Success",
                                                    description:
                                                        res.data.message,
                                                    status: "success",
                                                });
                                            })
                                            .catch(errorHandler)
                                            .finally(() => {
                                                setAboutModalState(undefined);
                                                router.reload();
                                            });
                                    })}
                                >
                                    <Stack spacing={4}>
                                        {/* DESKRIPSI START */}
                                        <FormControl
                                            isInvalid={
                                                !!aboutForm.formState.errors
                                                    .aboutus
                                            }
                                        >
                                            <FormLabel>About us</FormLabel>

                                            <Textarea
                                                placeholder="Description"
                                                {...aboutForm.register(
                                                    "aboutus"
                                                )}
                                                // type="text"
                                            />

                                            <FormErrorMessage>
                                                {aboutForm.formState.errors
                                                    .aboutus &&
                                                    aboutForm.formState.errors
                                                        .aboutus.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* DESKRIPSI END */}
                                        {/* LOCATION START */}
                                        <FormControl
                                            isInvalid={
                                                !!aboutForm.formState.errors
                                                    .location
                                            }
                                        >
                                            <FormLabel>Location</FormLabel>

                                            <Textarea
                                                placeholder="Location"
                                                {...aboutForm.register(
                                                    "location"
                                                )}
                                                // type="text"
                                            />

                                            <FormErrorMessage>
                                                {aboutForm.formState.errors
                                                    .location &&
                                                    aboutForm.formState.errors
                                                        .location.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* LOCATION END */}

                                        {/* COORDINATE START */}
                                        <FormControl
                                            isInvalid={
                                                !!aboutForm.formState.errors
                                                    .coordinate
                                            }
                                        >
                                            <FormLabel>
                                                Map Coordinate
                                            </FormLabel>

                                            <Input
                                                placeholder="eg: 41.40338, 2.17403"
                                                {...aboutForm.register(
                                                    "coordinate"
                                                )}
                                                type="text"
                                            />

                                            <FormErrorMessage>
                                                {aboutForm.formState.errors
                                                    .coordinate &&
                                                    aboutForm.formState.errors
                                                        .coordinate.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* COORDINATE END */}
                                        {/* PHONE START */}
                                        <FormControl
                                            isInvalid={
                                                !!aboutForm.formState.errors
                                                    .whatsapp_number
                                            }
                                        >
                                            <FormLabel>Phone</FormLabel>

                                            <Input
                                                placeholder="Phone"
                                                {...aboutForm.register(
                                                    "whatsapp_number"
                                                )}
                                                type="number"
                                                // type="text"
                                            />

                                            <FormErrorMessage>
                                                {aboutForm.formState.errors
                                                    .whatsapp_number &&
                                                    aboutForm.formState.errors
                                                        .whatsapp_number
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </Stack>
                                </form>
                            )}
                        </ModalBody>

                        <ModalFooter>
                            {aboutModalState?.mode === "create" && (
                                <Button
                                    colorScheme="blue"
                                    type="submit"
                                    form="add-data"
                                >
                                    Add
                                </Button>
                            )}

                            {aboutModalState?.mode === "edit" && (
                                <Button
                                    colorScheme="blue"
                                    type="submit"
                                    form="edit-about"
                                >
                                    Save
                                </Button>
                            )}
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Sidebar>
        </Stack>
    );
}
