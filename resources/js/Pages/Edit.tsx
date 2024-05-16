import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
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
} from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import MenuCard from "@/Components/MenuCard";
import { z } from "zod";
import { useState } from "react";
import { register } from "module";
import { Controller, set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type About = {
    description: string;
    address: string;
    phone: string;
};

type AboutModalState = {
    about?: About;
    mode: "edit";
};

const aboutSchema = z.object({
    description: z.string().nonempty("Description is required"),
    address: z.string().nonempty("Address is required"),
    phone: z.string().nonempty("Phone is required"),
});

type AboutDataFillable = z.infer<typeof aboutSchema>;

const DesktopContent = () => {
    const {
        handleSubmit,
        register,
        setError,
        control,
        reset,
        watch,
        formState: { errors },
    } = useForm<AboutDataFillable>({
        resolver: zodResolver(aboutSchema),
    });

    const [aboutModalState, setAboutModalState] = useState<
        AboutModalState | undefined
    >();

    return (
        <Stack gap={15}>
            <Stack
                bgColor={"white"}
                shadow={"lg"}
                borderRadius={"2xl"}
                p={5}
                direction={"row"}
                my={5}
                // w={"100%"}
                // h={"35%"}
            >
                {/* LEFT */}
                <Stack flex={1} gap={3}>
                    <Stack
                        direction={["column", "column", "column", "row"]}
                        gap={["1.5rem", "1.5rem", "1rem", "1.5rem"]}
                    >
                        <Heading color={"#352919"} fontSize={"xl"}>
                            About Us
                        </Heading>
                        <Tag
                            bgColor={"#D59B70"}
                            w={["full", "full", "8.5rem", "auto"]}
                            h={25}
                            color={"white"}
                            rounded={"full"}
                            fontSize={[
                                "0.55rem",
                                "0.55rem",
                                "0.75rem",
                                "0.75rem",
                            ]}
                        >
                            +62 881 0100 29266
                        </Tag>
                    </Stack>
                    <Stack>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae
                            mattis tellus. Nullam quis imperdiet augue.
                            Vestibulum auctor ornare leo, non suscipit.
                        </Text>
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
                        <Text>
                            Jl. Lestari Raya 9, Medang, Kec. Pagedangan,
                            Kabupaten Tangerang, Banten 15334
                        </Text>
                    </Stack>
                    <Stack align={"end"}>
                        <Button
                            bgColor={"#FFF7E4"}
                            border={"1px solid #B5AB99"}
                            borderRadius={"full"}
                            w={"7rem"}
                            onClick={() => setAboutModalState({ mode: "edit" })}
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
                    >
                        <Text>+ Add</Text>
                    </Button>
                </Stack>
                <Stack direction={"row"} overflowX={"auto"} gap={5}>
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </Stack>
            </Stack>
            {/* MODAL START */}
            <Modal
                lockFocusAcrossFrames={true}
                isCentered
                isOpen={!!aboutModalState}
                onClose={() => setAboutModalState(undefined)}
            >
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
                <ModalContent>
                    <ModalHeader fontWeight={"bold"}>
                        {/* {modalState?.mode === "delete"
                            ? "Delete STATE"
                            : "Create STATE"} */}
                        Edit About Us
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        {/* {modalState?.mode === "delete" && (
                            <Text>
                                Are you sure to delete{" "}
                                <b>{modalState.state?.name}</b> ?{" "}
                            </Text>
                        )} */}

                        {aboutModalState?.mode === "edit" && (
                            <form
                                id="add-data"
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
                                    setAboutModalState(undefined);
                                }}
                            >
                                <Stack spacing={4}>
                                    {/* DESKRIPSI START */}
                                    <FormControl
                                        isInvalid={!!errors.description}
                                    >
                                        <FormLabel>Description</FormLabel>

                                        <Textarea
                                            placeholder="Description"
                                            {...register("description")}
                                            // type="text"
                                        />

                                        <FormErrorMessage>
                                            {errors.description &&
                                                errors.description.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    {/* DESKRIPSI END */}
                                    {/* LOCATION START */}
                                    <FormControl isInvalid={!!errors.location}>
                                        <FormLabel>Location</FormLabel>

                                        <Textarea
                                            placeholder="Location"
                                            {...register("location")}
                                            // type="text"
                                        />

                                        <FormErrorMessage>
                                            {errors.location &&
                                                errors.location.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    {/* LOCATION END */}
                                    {/* PHONE START */}
                                    <FormControl isInvalid={!!errors.phone}>
                                        <FormLabel>Phone</FormLabel>

                                        <Input
                                            placeholder="Phone"
                                            {...register("phone")}
                                            // type="text"
                                        />

                                        <FormErrorMessage>
                                            {errors.phone &&
                                                errors.phone.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </Stack>
                            </form>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        {/* {modalState?.mode === "delete" && (
                            <Button
                                colorScheme="red"
                                onClick={() => {
                                    api.delete<ResponseModel>(
                                        `/state/${modalState.state?.id}`
                                    )
                                        .then((res) => {
                                            toast({
                                                title: "Deleted",
                                                description: res.data.message,
                                                status: "error",
                                            });
                                        })
                                        .catch(errorHandler)
                                        .finally(() => {
                                            stateData.mutate();
                                            setModalState(undefined);
                                        });
                                }}
                            >
                                Delete
                            </Button>
                        )}

                        {modalState?.mode === "create" && (
                            <Button
                                colorScheme="blue"
                                type="submit"
                                form="add-data"
                            >
                                Add
                            </Button>
                        )} */}

                        {aboutModalState?.mode === "edit" && (
                            <Button
                                colorScheme="blue"
                                type="submit"
                                form="add-data"
                            >
                                Save
                            </Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    );
};

const MobileContent = () => {
    return (
        <Stack gap={10}>
            <Stack
                bgColor={"white"}
                shadow={"lg"}
                borderRadius={"2xl"}
                p={5}
                // w={"100%"}
                // h={"35%"}
            >
                {/* LEFT */}
                <Stack flex={1} gap={3}>
                    <Stack direction={"row"} gap={"1.5rem"}>
                        <Heading color={"#352919"} fontSize={"xl"}>
                            About Us
                        </Heading>
                        <Tag
                            bgColor={"#D59B70"}
                            h={25}
                            color={"white"}
                            rounded={"full"}
                            fontSize={"0.65rem"}
                        >
                            +62 881 0100 29266
                        </Tag>
                    </Stack>
                    <Stack>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae
                            mattis tellus. Nullam quis imperdiet augue.
                            Vestibulum auctor ornare leo, non suscipit.
                        </Text>
                    </Stack>
                </Stack>
                <Divider
                    orientation="horizontal"
                    bgColor={"#D9D9D9"}
                    h={"0.1rem"}
                    // mx={5}
                />
                {/* RIGHT */}
                <Stack flex={1} justifyContent={"space-between"}>
                    <Stack gap={3}>
                        <Heading color={"#352919"} fontSize={"xl"}>
                            Location
                        </Heading>
                        <Text>
                            Jl. Lestari Raya 9, Medang, Kec. Pagedangan,
                            Kabupaten Tangerang, Banten 15334
                        </Text>
                    </Stack>
                    <Stack align={"end"}>
                        <Button
                            bgColor={"#FFF7E4"}
                            border={"1px solid #B5AB99"}
                            borderRadius={"full"}
                            w={"6.5rem"}
                            mt={5}
                        >
                            <BiSolidEdit color="#352919" />
                            <Text color={"#352919"} ml={2}>
                                Edit
                            </Text>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            <Stack mb={20}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Heading color={"#352919"} fontSize={"xl"}>
                        Menu
                    </Heading>
                    <Button
                        bgColor={"#352919"}
                        color={"#FEF6E3"}
                        borderRadius={"full"}
                        px={8}
                        w={"6.5rem"}
                    >
                        <Text>+ Add</Text>
                    </Button>
                </Stack>
                <Stack overflowX={"auto"} gap={5}>
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default function Edit({ auth }: PageProps) {
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
        <Stack bgColor={"#FFF7E4"} h={"100vh"} w={"100vw"} direction={"row"}>
            <Sidebar
                desktopProps={{ contentComponent: <DesktopContent /> }}
                mobileProps={{ contentComponent: <MobileContent /> }}
            />
        </Stack>
    );
}
