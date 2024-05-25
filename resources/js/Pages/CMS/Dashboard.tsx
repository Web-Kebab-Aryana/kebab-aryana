import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import { Show, Stack, Text, Image, Button, Box, Hide } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dashboard({ auth }: PageProps) {
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
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    };

    const options = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [
                "Total Revenue",
                "Total Revenue",
                "Total Revenue",
                "Total Revenue",
            ],
        },
        plotOptions: {
            bar: {
                distributed: true,
                dataLabels: {
                    // position: "bottom",
                },
            },
        },
        dataLabels: {
            enabled: true,

            style: {
                fontSize: "1rem",
                colors: ["#1b2625"],
            },
        },
        colors: ["#f8a400", "#f8f082", "#fcebc6", "#f0ac4d"],
    };

    const series = [
        {
            name: "Jumlah Peserta",
            data: [100, 20, 50, 30],
        },
    ];

    return (
        <>
            <Stack bgColor={"#FFF7E4"} h={"full"} w={"100vw"} direction={"row"}>
                <Sidebar auth={auth}>
                    <Show above={"md"}>
                        <Stack overflow={"hidden"} spacing={8} flex={1}>
                            {/* GREETING TEXT START */}
                            <Text fontSize={"1.5rem"} mt={10}>
                                Shalom, <b>Muhammad</b>
                                🥙
                            </Text>
                            {/* GREETING TEXT END */}

                            {/* CARD STATISTIC START */}
                            <Stack
                                direction={"row"}
                                spacing={8}
                                overflow={"auto"}
                                // justifyContent={"space-between"}
                            >
                                {cardData.map((card) => (
                                    <Stack
                                        key={card.title}
                                        bgColor="white"
                                        borderRadius="3xl"
                                        // boxShadow="0 4px 8px rgba(0, 0, 0, 0.05)"
                                        alignContent="center"
                                        justifyContent="center"
                                    >
                                        <Stack
                                            direction="row"
                                            gap={4}
                                            w="300px"
                                            h="150px"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Stack>
                                                <Image
                                                    w="4.5rem"
                                                    src={card.image}
                                                />
                                            </Stack>
                                            <Stack>
                                                <Text fontWeight="medium">
                                                    {card.title}
                                                </Text>
                                                <Text
                                                    fontSize="1.2rem"
                                                    fontWeight="bold"
                                                >
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
                                    // boxShadow="0 4px 8px rgba(0, 0, 0, 0.05)"
                                    p={8}
                                >
                                    <Stack
                                        direction={"column"}
                                        w={"full"}
                                        h={"full"}
                                    >
                                        <Text
                                            fontSize={"1.5rem"}
                                            fontWeight={"semibold"}
                                        >
                                            Chart
                                        </Text>

                                        <Stack
                                            w={"full"}
                                            h={"full"}
                                            borderRadius={15}
                                            borderWidth={2}
                                        >
                                            <Stack flex={1} overflow={"hidden"}>
                                                <Chart
                                                    options={options}
                                                    series={series}
                                                    type="bar"
                                                    width="100%"
                                                    height="80%"
                                                />
                                            </Stack>
                                        </Stack>
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
                                        <Text
                                            fontSize={"1.5rem"}
                                            fontWeight={"bold"}
                                        >
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
                                            css={{
                                                "::-webkit-scrollbar": {
                                                    display: "none",
                                                },
                                            }}
                                        >
                                            {transactionData.map((card) => (
                                                <>
                                                    <Stack>
                                                        <Stack
                                                            key={card.kode}
                                                            direction={"row"}
                                                            justifyContent={
                                                                "space-between"
                                                            }
                                                        >
                                                            <Box
                                                                bgColor={
                                                                    "#FAF2DF"
                                                                }
                                                                px={3}
                                                                py={2}
                                                                borderRadius={
                                                                    "xl"
                                                                }
                                                                fontWeight={
                                                                    "semibold"
                                                                }
                                                            >
                                                                #1212
                                                            </Box>
                                                            <Box
                                                                bgColor={
                                                                    "#E8FAF5"
                                                                }
                                                                px={3}
                                                                py={2}
                                                                borderRadius={
                                                                    "xl"
                                                                }
                                                                fontWeight={
                                                                    "semibold"
                                                                }
                                                                color={
                                                                    "#3DB776"
                                                                }
                                                            >
                                                                80K
                                                            </Box>
                                                        </Stack>

                                                        <Stack
                                                            direction={"row"}
                                                            justifyContent={
                                                                "space-between"
                                                            }
                                                        >
                                                            <Text
                                                                borderRadius={
                                                                    "xl"
                                                                }
                                                                fontWeight={
                                                                    "semibold"
                                                                }
                                                            >
                                                                Pak Vinsen
                                                            </Text>
                                                            <Text
                                                                borderRadius={
                                                                    "xl"
                                                                }
                                                                fontWeight={
                                                                    "semibold"
                                                                }
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
                                                <Text fontSize={"1.3rem"}>
                                                    View All
                                                </Text>
                                                <Text opacity={"50%"}>
                                                    Transaction
                                                </Text>
                                            </Stack>
                                        </Button>
                                    </Stack>
                                </Stack>
                                {/* TRANSACTION HISTORY END */}
                            </Stack>
                        </Stack>
                    </Show>

                    <Hide above={"md"}>
                        <Stack
                            h={"100vh"}
                            overflow={"auto"}
                            spacing={8}
                            overscrollY={"auto"}
                            // direction={"column"}
                        >
                            {/* GREETING TEXT START */}
                            <Text fontSize={"1.2rem"} mt={6}>
                                Shalom, <b>Muhammad</b>
                                🥙
                            </Text>
                            {/* GREETING TEXT END */}

                            {/* CHART START */}
                            <Stack
                                bgColor={"white"}
                                h={"full"}
                                borderRadius={"3xl"}
                                boxShadow="0 4px 8px rgba(0, 0, 0, 0.05)"
                                p={6}
                            >
                                <Stack
                                    direction={"column"}
                                    w={"full"}
                                    h={"full"}
                                >
                                    <Text
                                        fontSize={"1.5rem"}
                                        fontWeight={"semibold"}
                                    >
                                        Chart
                                    </Text>

                                    <Stack
                                        w={"full"}
                                        h={"full"}
                                        borderRadius={15}
                                        borderWidth={2}
                                    >
                                        <Stack flex={1} overflow={"hidden"}>
                                            <Chart
                                                options={options}
                                                series={series}
                                                type="bar"
                                                width="100%"
                                                height="80%"
                                            />
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                            {/* CHART END */}

                            {/* TRANSACTION HISTORY START */}
                            <Stack
                                bgColor={"white"}
                                w={"full"}
                                h={"full"}
                                borderRadius={"2xl"}
                                p={6}
                                // overflow={"auto"}
                                flex={1}
                                justifyContent={"space-between"}
                            >
                                <Stack direction={"column"} gap={0} h={"300px"}>
                                    <Text
                                        fontSize={"1.5rem"}
                                        fontWeight={"bold"}
                                    >
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
                                        css={{
                                            "::-webkit-scrollbar": {
                                                display: "none",
                                            },
                                        }}
                                    >
                                        {transactionData.map((card) => (
                                            <>
                                                <Stack>
                                                    <Stack
                                                        key={card.kode}
                                                        direction={"row"}
                                                        justifyContent={
                                                            "space-between"
                                                        }
                                                    >
                                                        <Box
                                                            bgColor={"#FAF2DF"}
                                                            px={3}
                                                            py={2}
                                                            borderRadius={"xl"}
                                                            fontWeight={
                                                                "semibold"
                                                            }
                                                        >
                                                            #1212
                                                        </Box>
                                                        <Box
                                                            bgColor={"#E8FAF5"}
                                                            px={3}
                                                            py={2}
                                                            borderRadius={"xl"}
                                                            fontWeight={
                                                                "semibold"
                                                            }
                                                            color={"#3DB776"}
                                                        >
                                                            80K
                                                        </Box>
                                                    </Stack>

                                                    <Stack
                                                        direction={"row"}
                                                        justifyContent={
                                                            "space-between"
                                                        }
                                                    >
                                                        <Text
                                                            borderRadius={"xl"}
                                                            fontWeight={
                                                                "semibold"
                                                            }
                                                        >
                                                            Pak Vinsen
                                                        </Text>
                                                        <Text
                                                            borderRadius={"xl"}
                                                            fontWeight={
                                                                "semibold"
                                                            }
                                                            opacity={"50%"}
                                                        >
                                                            20-2-2024
                                                        </Text>
                                                    </Stack>
                                                </Stack>
                                            </>
                                        ))}
                                    </Stack>
                                    {/* TRANSACTION HISTORY END */}

                                    <Stack>
                                        <Button
                                            p={8}
                                            borderRadius={"2xl"}
                                            mt={4}
                                        >
                                            <Stack direction={"column"} gap={0}>
                                                <Text fontSize={"1.3rem"}>
                                                    View All
                                                </Text>
                                                <Text opacity={"50%"}>
                                                    Transaction
                                                </Text>
                                            </Stack>
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Hide>
                </Sidebar>
            </Stack>
        </>
    );
}
