import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import { Box, Stack, Text, Image, Button } from "@chakra-ui/react";

const DesktopContent = () => {
    const cardData = [
        {
            image: "/images/chartIcon.svg",
            title: "Total Revenue",
            value: "Rp 1.000.000",
        },
        {
            image: "/images/chartIcon.svg",
            title: "Total Revenue",
            value: "Rp 1.000.000",
        },
        // {
        //     image: "/images/chartIcon.svg",
        //     title: "Total Revenue",
        //     value: "Rp 1.000.000",
        // },
        // {
        //     image: "/images/chartIcon.svg",
        //     title: "Total Revenue",
        //     value: "Rp 1.000.000",
        // },
    ];

    const transactionData = [
        {
            kode: "#1212",
            price: "80K",
            name: "Pak Vinsen",
            date: "20-2-2024",
        },
        {
            kode: "#1212",
            price: "80K",
            name: "Pak Vinsen",
            date: "20-2-2024",
        },
        {
            kode: "#1212",
            price: "80K",
            name: "Pak Vinsen",
            date: "20-2-2024",
        },
        {
            kode: "#1212",
            price: "80K",
            name: "Pak Vinsen",
            date: "20-2-2024",
        },
    ];

    return (
        <Stack direction={"column"} gap={10} flex={1}>
            {/* GREETING TEXT START */}
            <Text fontSize={"1.5rem"} mt={10}>
                Shalom, <b>Muhammad</b>
                🥙
            </Text>
            {/* GREETING TEXT END */}

            {/* CARD STATISTIC START */}
            <Stack direction={"row"} spacing={8} h={"150px"}>
                {cardData.map((card) => (
                    <Stack
                        key={card.title}
                        bgColor="white"
                        w="300px"
                        h="120px"
                        borderRadius="3xl"
                        shadow="md"
                        alignContent="center"
                        justifyContent={"center"}
                    >
                        <Stack
                            direction="row"
                            gap={4}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Stack>
                                <Image w="4.5rem" src={card.image} />
                            </Stack>
                            <Stack>
                                <Text fontWeight="medium">{card.title}</Text>
                                <Text fontSize="1.2rem" fontWeight="bold">
                                    {card.value}
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
            {/* CARD STATISTIC END */}

            <Stack direction={"row"} gap={8} h={"full"}>
                {/* CHART START */}
                <Stack
                    bgColor={"white"}
                    w={"full"}
                    h={"full"}
                    borderRadius={"3xl"}
                    p={8}
                >
                    <Stack direction={"column"}>
                        <Text fontSize={"1.5rem"} fontWeight={"semibold"}>
                            Chart
                        </Text>
                    </Stack>
                </Stack>
                {/* CHART END */}

                {/* TRANSACTION HISTORY START */}
                <Stack
                    bgColor={"white"}
                    w={"500px"}
                    h={"full"}
                    borderRadius={"3xl"}
                    p={8}
                    direction={"column"}
                    justifyContent={"space-between"}
                >
                    <Stack direction={"column"} gap={0}>
                        <Text fontSize={"1.5rem"} fontWeight={"bold"}>
                            Transaction
                        </Text>
                        <Text
                            fontSize={"1.2rem"}
                            fontWeight={"semibold"}
                            opacity={"50%"}
                        >
                            History
                        </Text>

                        <Stack
                            direction={"column"}
                            gap={6}
                            mt={5}
                            h={"250px"}
                            overflowY={"auto"}
                        >
                            {transactionData.map((card) => (
                                <>
                                    <Stack>
                                        <Stack
                                            key={card.kode}
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                        >
                                            <Box
                                                bgColor={"#FAF2DF"}
                                                px={3}
                                                py={2}
                                                borderRadius={"xl"}
                                                fontWeight={"semibold"}
                                            >
                                                #1212
                                            </Box>
                                            <Box
                                                bgColor={"#E8FAF5"}
                                                px={3}
                                                py={2}
                                                borderRadius={"xl"}
                                                fontWeight={"semibold"}
                                                color={"#3DB776"}
                                            >
                                                80K
                                            </Box>
                                        </Stack>

                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                        >
                                            <Text
                                                borderRadius={"xl"}
                                                fontWeight={"semibold"}
                                            >
                                                Pak Vinsen
                                            </Text>
                                            <Text
                                                borderRadius={"xl"}
                                                fontWeight={"semibold"}
                                                opacity={"50%"}
                                            >
                                                20-2-2024
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack>
                        <Button p={10} borderRadius={"2xl"}>
                            <Stack direction={"column"}>
                                <Text fontSize={"1.3rem"}>View All</Text>
                                <Text opacity={"50%"}>Transaction</Text>
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>
                {/* TRANSACTION HISTORY END */}
            </Stack>
        </Stack>
    );
};

const MobileContent = () => {
    return <Text>Mobile Specific Content</Text>;
};

export default function Dashboard({ auth }: PageProps) {
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
