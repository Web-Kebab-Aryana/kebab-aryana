import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import { Show, Stack, Text, Image, Button, Box, Hide } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kFormatter from "@/Utils/kFormatter";
import { Link } from "@inertiajs/react";

type TransactionHistory = {
    id: number;
    customer_name: string;
    total: number;
    transaction_date: string;
};

type Statistic = {
    transactions: TransactionHistory[];
    cards: {
        revenueBulanan: number;
        revenueHarian: number;
        totalMenu: number;
    };
    barPlot: {
        totalOrderBulanan: number;
        totalOrderHarian: number;
        totalMenuTerjual: number;
    };
};

export default function Dashboard({
    auth,
    transactions,
    cards,
    barPlot,
}: PageProps & Statistic) {
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });

    const cardData = [
        {
            image: "/images/chartIcon.svg",
            title: "Daily Revenue",
            value: formatter.format(cards.revenueHarian),
        },
        {
            image: "/images/chartIcon.svg",
            title: "Monthly Revenue",
            value: formatter.format(cards.revenueBulanan),
        },
        {
            image: "/images/chartIcon.svg",
            title: "Daily Menu Sold",
            value: cards.totalMenu,
        },
    ];

    // untuk react slick
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
            categories: ["Monthly", "Daily", "Menus Sold"],
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
            data: [100, 20, 50],
        },
    ];

    return (
        <>
            <Stack
                bgColor={"#FFF7E4"}
                minW={"100vw"}
                minH={"100vh"}
                direction={"row"}
                overflow={"scroll"}
            >
                <Sidebar auth={auth}>
                    <Show above={"md"}>
                        <Stack
                            overflow={"hidden"}
                            overflowY={"scroll"}
                            css={{
                                "::-webkit-scrollbar": {
                                    display: "none",
                                },
                            }}
                        >
                            {/* GREETING TEXT START */}
                            <Text fontSize={"1.5rem"} mt={8} mb={2}>
                                Shalom, <b>{auth.user.name}</b>
                                🥙
                            </Text>
                            {/* GREETING TEXT END */}

                            {/* CARD STATISTIC START */}
                            <Stack
                                direction={"row"}
                                spacing={6}
                                overflowX={"auto"}
                                // h={"150px"}
                                minH={"120px"}
                                // bgColor={"red"}
                                // mb={8}
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
                                            w="280px"
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

                            <Stack direction={"row"} gap={8} h={"full"} mt={2}>
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
                                            {transactions.map((card) => (
                                                <>
                                                    <Stack>
                                                        <Stack
                                                            key={card.id}
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
                                                                #{card.id}
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
                                                                {kFormatter(
                                                                    card.total
                                                                )}
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
                                                                {
                                                                    card.customer_name
                                                                }
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
                                                                {new Date(
                                                                    card.transaction_date
                                                                ).toLocaleDateString(
                                                                    "id-ID"
                                                                )}
                                                            </Text>
                                                        </Stack>
                                                    </Stack>
                                                </>
                                            ))}
                                        </Stack>
                                    </Stack>

                                    <Stack>
                                        <Button
                                            as={Link}
                                            href="/cms/history"
                                            p={10}
                                            borderRadius={"2xl"}
                                        >
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

                    <Stack alignItems={"center"}>
                        <Hide above={"md"}>
                            <Stack
                                overflow={"hidden"}
                                w={"80vw"}
                                // alignItems={"center"}
                                // justifyItems={"center"}
                                // justifyContent={"center"}
                            >
                                <Stack
                                    h={"100vh"}
                                    spacing={8}
                                    overscrollY={"auto"}
                                    // justifyContent={"center"}
                                    // justifyItems={"center"}
                                    // alignItems={"center"}
                                >
                                    {/* GREETING TEXT START */}
                                    <Text fontSize={"1.2rem"} mt={6}>
                                        Shalom, <b>Muhammad</b>
                                        🥙
                                    </Text>
                                    {/* GREETING TEXT END */}

                                    {/* CARD REACT SLICK START */}
                                    <Stack mt={2}>
                                        <Slider {...settings}>
                                            {cardData.map((card, index) => (
                                                <Stack key={index} px={2}>
                                                    <Stack
                                                        key={card.title}
                                                        bgColor="white"
                                                        borderRadius="3xl"
                                                        // boxShadow="0 4px 8px rgba(0, 0, 0, 0.05)"
                                                        // alignContent="center"
                                                        justifyContent="center"
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            gap={4}
                                                            // w="300px"
                                                            h={"100px"}
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Stack>
                                                                <Image
                                                                    w="4.5rem"
                                                                    src={
                                                                        card.image
                                                                    }
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
                                                </Stack>
                                            ))}
                                        </Slider>
                                    </Stack>
                                    {/* CARD REACT SLICK END */}

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
                                                <Stack
                                                    flex={1}
                                                    overflow={"hidden"}
                                                    h={"full"}
                                                >
                                                    <Chart
                                                        options={options}
                                                        series={series}
                                                        type="bar"
                                                        width="100%"
                                                        height="100%"
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
                                        <Stack
                                            direction={"column"}
                                            gap={0}
                                            h={"300px"}
                                        >
                                            <Text
                                                fontSize={"1.5rem"}
                                                fontWeight={"semibold"}
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
                                                {transactions.map((card) => (
                                                    <>
                                                        <Stack>
                                                            <Stack
                                                                key={card.id}
                                                                direction={
                                                                    "row"
                                                                }
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
                                                                    #{card.id}
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
                                                                    {kFormatter(
                                                                        card.total
                                                                    )}
                                                                </Box>
                                                            </Stack>

                                                            <Stack
                                                                direction={
                                                                    "row"
                                                                }
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
                                                                    {
                                                                        card.customer_name
                                                                    }
                                                                </Text>
                                                                <Text
                                                                    borderRadius={
                                                                        "xl"
                                                                    }
                                                                    fontWeight={
                                                                        "semibold"
                                                                    }
                                                                    opacity={
                                                                        "50%"
                                                                    }
                                                                >
                                                                    {new Date(
                                                                        card.transaction_date
                                                                    ).toLocaleDateString(
                                                                        "id-ID"
                                                                    )}
                                                                </Text>
                                                            </Stack>
                                                        </Stack>
                                                    </>
                                                ))}
                                            </Stack>
                                            {/* TRANSACTION HISTORY END */}

                                            <Stack>
                                                <Button
                                                    as={Link}
                                                    href="/cms/history"
                                                    p={8}
                                                    borderRadius={"2xl"}
                                                    mt={4}
                                                >
                                                    <Stack
                                                        direction={"column"}
                                                        gap={0}
                                                    >
                                                        <Text
                                                            fontSize={"1.3rem"}
                                                        >
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
                            </Stack>
                        </Hide>
                    </Stack>
                </Sidebar>
            </Stack>
        </>
    );
}
