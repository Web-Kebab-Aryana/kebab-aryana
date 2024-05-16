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
} from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { set, z } from "zod";
import { useState } from "react";
import { register } from "module";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type MenuData = {
    title: string;
    description: string;
    harga: number;
    tag: string;
};

type ModalState = {
    menu?: MenuData;
    mode: "delete" | "edit";
};

const menuSchema = z.object({
    title: z.string({ required_error: "Title is required" }),
    description: z.string({ required_error: "Description is required" }),
    harga: z
        .number({
            required_error: "Price is required",
        })
        .min(1, "Price must be more than 1K")
        .max(100, "Price must be less than 100K"),
    tag: z.string({ required_error: "Tag is required" }),
});

type StateDataFillable = z.infer<typeof menuSchema>;

const MenuCard = () => {
    const {
        handleSubmit,
        register,
        reset,
        control,
        formState: { errors },
    } = useForm<StateDataFillable>({
        resolver: zodResolver(menuSchema),
    });

    const [modalState, setModalState] = useState<ModalState | undefined>();

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
                p={{ base: 5, sm: 0 }}
                pb={{ base: 2, sm: 0 }}
            >
                <Image
                    w={{ base: "full", sm: "10rem" }}
                    h={{ base: "10rem", sm: "auto" }}
                    objectFit={"cover"}
                    src="/images/kebabSpecial.png"
                    alt="Kebab Aryana"
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
                                Kebab
                            </Tag>
                            <Heading color={"#D59B70"} fontSize={"xl"}>
                                35K
                            </Heading>
                        </Stack>
                        {/* Name */}
                        <Heading
                            color={"#352919"}
                            fontSize={{ sm: "md", lg: "xl" }}
                        >
                            Special Sandwich Ayam
                        </Heading>
                        <Text
                            color={"#35291950"}
                            fontSize={{ base: "xs", md: "sm", lg: "md" }}
                            h={{ base: "3.5rem", sm: "auto" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et.
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
                                    menu: {
                                        title: "Special Sandwich Ayam",
                                        description:
                                            "Lorem ipsum dolor sit amet",
                                        harga: 35000,
                                        tag: "Kebab",
                                    },
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
                                    menu: {
                                        title: "Special Sandwich Ayam",
                                        description:
                                            "Lorem ipsum dolor sit amet",
                                        harga: 35000,
                                        tag: "Kebab",
                                    },
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
                                    <b>{modalState.menu?.title}</b> ?{" "}
                                </Text>
                            )}

                            {modalState?.mode === "edit" && (
                                <form
                                    id="edit-data"
                                    // onSubmit={handleSubmit((data) => {
                                    //     api.post<ResponseModel>("/state", data)
                                    //         .then((res) => {
                                    //             toast({
                                    //                 title: "Success",
                                    //                 description: res.data.message,
                                    //                 status: "success",
                                    //             });
                                    //         })
                                    //         .catch(errorHandler)
                                    //         .finally(() => {
                                    //             stateData.mutate();
                                    //             setModalState(undefined);
                                    //         });
                                    // })}
                                    onSubmit={() => {
                                        setModalState(undefined);
                                    }}
                                >
                                    <Stack spacing={4}>
                                        {/* NAMA MAKANAN START */}
                                        <FormControl isInvalid={!!errors.title}>
                                            <FormLabel>Food Name</FormLabel>

                                            <Input
                                                placeholder="Nama Makanan"
                                                {...register("title")}
                                                type="text"
                                            />

                                            <FormErrorMessage>
                                                {errors.title &&
                                                    errors.title.message}
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
                                        <FormControl isInvalid={!!errors.harga}>
                                            <FormLabel>Price</FormLabel>

                                            <Input
                                                placeholder="Harga"
                                                {...register("harga")}
                                                type="number"
                                            />

                                            <FormErrorMessage>
                                                {errors.harga &&
                                                    errors.harga.message}
                                            </FormErrorMessage>
                                        </FormControl>

                                        {/* TAG START */}
                                        <FormControl isInvalid={!!errors.tag}>
                                            <FormLabel>Tag</FormLabel>
                                            <Select placeholder="Select Tag">
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
                                                {errors.tag &&
                                                    errors.tag.message}
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
                                    // onClick={() => {
                                    //     api.delete<ResponseModel>(
                                    //         `/state/${modalState.state?.id}`
                                    //     )
                                    //         .then((res) => {
                                    //             toast({
                                    //                 title: "Deleted",
                                    //                 description: res.data.message,
                                    //                 status: "error",
                                    //             });
                                    //         })
                                    //         .catch(errorHandler)
                                    //         .finally(() => {
                                    //             stateData.mutate();
                                    //             setModalState(undefined);
                                    //         });
                                    // }}
                                    onClick={() => {
                                        setModalState(undefined);
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
