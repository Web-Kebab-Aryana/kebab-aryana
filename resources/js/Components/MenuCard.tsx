import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    Tag,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResponseModel, useToastErrorHandler } from "@/Hooks/useApi";
import axios from "axios";
import { router } from "@inertiajs/react";
import kFormatter from "@/Utils/kFormatter";

type MenuData = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
};

type ModalState = {
    menu?: MenuData;
    mode: "delete" | "edit";
};

const menuSchema = z.object({
    name: z.string({ required_error: "Title is required" }),
    description: z.string({ required_error: "Description is required" }),
    price: z
        .number({
            required_error: "Price is required",
        })
        .min(1000, "Price must be more than 1K")
        .max(100000, "Price must be less than 100K"),
    category: z.string({ required_error: "Tag is required" }),
});

type StateDataFillable = z.infer<typeof menuSchema>;

const MenuCard = ({ menu }: { menu: MenuData }) => {
    const {
        handleSubmit,
        register,
        reset,
        control,
        formState: { errors },
    } = useForm<StateDataFillable>({
        resolver: zodResolver(menuSchema),
    });

    const toast = useToast();
    const errorHandler = useToastErrorHandler();

    const [modalState, setModalState] = useState<ModalState | undefined>();

    useEffect(() => {
        if (modalState) {
            reset(menu);
        }
    }, [modalState]);

    return (
        <>
            <style>
                {`
                .css-161pkch {
                    padding-bottom: 6px !important;
                }
            `}
            </style>
            <Stack
                bgColor={"white"}
                borderRadius={"xl"}
                direction={{ base: "column", sm: "row" }}
                minW={{ base: "100px", sm: "400px", lg: "450px" }}
                shadow={"lg"}
                m={"0.5rem"}
                p={{ base: 5, sm: 0 }}
                pb={{ base: 2, sm: 0 }}
            >
                <Image
                    w={{ base: "full", sm: "10rem" }}
                    h={{ base: "10rem", sm: "auto" }}
                    objectFit={"cover"}
                    src={`/storage/${menu.image}`}
                    alt={menu.name}
                    m={["0rem", "0.75rem", "0.75rem", "0.75rem"]}
                    borderRadius={"xl"}
                />
                {/* Right */}
                <Stack p={5} pl={0} justifyContent={"space-between"}>
                    <Stack>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Tag
                                bgColor={"#D9D9D9"}
                                h={25}
                                color={"#35291950"}
                                rounded={"full"}
                                fontSize={"0.75rem"}
                            >
                                {menu.category}
                            </Tag>
                            <Heading color={"#D59B70"} fontSize={"xl"}>
                                {kFormatter(menu.price)}
                            </Heading>
                        </Stack>
                        {/* Name */}
                        <Heading
                            color={"#352919"}
                            fontSize={{ sm: "md", lg: "xl" }}
                        >
                            {menu.name}
                        </Heading>
                        <Text
                            color={"#35291950"}
                            fontSize={{ base: "xs", md: "sm", lg: "md" }}
                            h={{ base: "3.5rem", sm: "auto" }}
                        >
                            {menu.description}
                        </Text>
                    </Stack>
                    {/* Buttons */}
                    <Stack
                        align={"end"}
                        direction={"row"}
                        gap={{ base: 3, lg: 5 }}
                    >
                        <Button
                            bgColor={"#D9D9D9"}
                            border={"1px solid #AB2937"}
                            borderRadius={"full"}
                            // w={"7rem"}
                            size={{ base: "sm", lg: "md" }}
                            onClick={() =>
                                setModalState({
                                    mode: "delete",
                                    menu: menu,
                                })
                            }
                        >
                            <MdDeleteForever color="#AB2937" />
                            <Text color={"#AB2937"} ml={2}>
                                Delete
                            </Text>
                        </Button>
                        <Button
                            bgColor={"#352919"}
                            borderRadius={"full"}
                            // w={"7rem"}
                            size={{ base: "sm", lg: "md" }}
                            onClick={() =>
                                setModalState({
                                    mode: "edit",
                                    menu: menu,
                                })
                            }
                        >
                            <Stack
                                direction={"row"}
                                align={"center"}
                                mx={2}
                                gap={0}
                            >
                                <BiSolidEdit color={"#FFF7E4"} />
                                <Text ml={2} color={"#FFF7E4"}>
                                    Edit
                                </Text>
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>
                {/* MODAL START */}
                <Modal
                    lockFocusAcrossFrames={true}
                    isCentered
                    isOpen={!!modalState}
                    onClose={() => setModalState(undefined)}
                >
                    <ModalOverlay
                        bg="blackAlpha.300"
                        backdropFilter="blur(10px)"
                    />
                    <ModalContent>
                        <ModalHeader fontWeight={"bold"}>
                            {modalState?.mode === "delete"
                                ? "Delete Makanan"
                                : "Edit Makanan"}
                        </ModalHeader>
                        <ModalCloseButton />

                        <ModalBody>
                            {modalState?.mode === "delete" && (
                                <Text>
                                    Are you sure to delete{" "}
                                    <b>{modalState.menu?.name}</b> ?{" "}
                                </Text>
                            )}

                            {modalState?.mode === "edit" && (
                                <form
                                    id="edit-data"
                                    onSubmit={handleSubmit((data) => {
                                        axios
                                            .post<ResponseModel>(
                                                `/api/menus/${menu.id}?_method=PUT`,
                                                data
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
                                                setModalState(undefined);
                                                router.reload();
                                            });
                                    })}
                                >
                                    <Stack spacing={4}>
                                        {/* NAMA MAKANAN START */}
                                        <FormControl isInvalid={!!errors.name}>
                                            <FormLabel>Food Name</FormLabel>

                                            <Input
                                                placeholder="Nama Makanan"
                                                {...register("name")}
                                                type="text"
                                            />

                                            <FormErrorMessage>
                                                {errors.name &&
                                                    errors.name.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* NAMA MAKANAN END */}

                                        {/* DESKRIPSI MAKANAN START */}
                                        <FormControl
                                            isInvalid={!!errors.description}
                                        >
                                            <FormLabel>
                                                Food Description
                                            </FormLabel>

                                            <Textarea
                                                placeholder="Deskripsi Makanan"
                                                {...register("description")}
                                            />

                                            <FormErrorMessage>
                                                {errors.description &&
                                                    errors.description.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* DESKRIPSI MAKANAN END */}

                                        {/* HARGA START */}
                                        <FormControl isInvalid={!!errors.price}>
                                            <FormLabel>Price</FormLabel>

                                            <Input
                                                placeholder="Price"
                                                {...register("price", {
                                                    valueAsNumber: true,
                                                })}
                                                type="number"
                                            />

                                            <FormErrorMessage>
                                                {errors.price &&
                                                    errors.price.message}
                                            </FormErrorMessage>
                                        </FormControl>

                                        {/* TAG START */}
                                        <FormControl
                                            isInvalid={!!errors.category}
                                        >
                                            <FormLabel>Category</FormLabel>
                                            <Select
                                                {...register("category")}
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
                                                {errors.category &&
                                                    errors.category.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {/* TAG END */}
                                    </Stack>
                                </form>
                            )}
                        </ModalBody>

                        <ModalFooter>
                            {modalState?.mode === "delete" && (
                                <Button
                                    colorScheme="red"
                                    onClick={() => {
                                        axios
                                            .delete<ResponseModel>(
                                                `/api/menus/${modalState.menu?.id}`
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
                                                setModalState(undefined);
                                                router.reload();
                                            });
                                    }}
                                >
                                    Delete
                                </Button>
                            )}

                            {modalState?.mode === "edit" && (
                                <Button
                                    colorScheme="blue"
                                    type="submit"
                                    form="edit-data"
                                >
                                    Save
                                </Button>
                            )}
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                {/* MODAL END */}
            </Stack>
        </>
    );
};

export default MenuCard;
