import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import { Stack, Text, Tag, Heading, Divider, Button } from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import MenuCard from "@/Components/MenuCard";

const DesktopContent = () => {
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
