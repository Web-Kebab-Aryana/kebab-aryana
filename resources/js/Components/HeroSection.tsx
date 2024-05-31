import { Image, Link, Show, Stack, Text } from "@chakra-ui/react";

export default function HeroSection() {
    return (
        <>
            <Stack
                overflow={"hidden"}
                gap={["2.4rem", "2.8rem"]}
                backgroundColor={"#FFF4E0"}
                direction={"column"}
                alignItems={"center"}
                position={"relative"}
                w={"100vw"}
            >
                {/* BAGIAN ATAS */}
                <Stack
                    w={"100%"}
                    position={"relative"}
                    zIndex={"2"}
                    color={"#AB2937"}
                    fontWeight={"bold"}
                    direction={["column", "column", "row"]}
                    justifyContent={["", "", "space-between"]}
                    alignItems={["center", "center", ""]}
                    px={["0", "0", "3rem"]}
                >
                    <Image
                        src="/Hero-Images/logo-Aryana.svg"
                        w={["20%", "20%", "10%"]}
                    />
                    <Show above="md">
                        <Stack
                            justifyContent={"center"}
                            alignItems={"center"}
                            direction={"row"}
                            gap={"3.5rem"}
                            fontSize={["", "", "", "", "1.2rem"]}
                        >
                            <Link>About Us</Link>
                            <Link>Location</Link>
                            <Link>Reviews</Link>
                        </Stack>
                    </Show>
                </Stack>
                {/* BAGIAN ATAS */}

                {/* BAGIAN TENGAH */}
                <Stack
                    w={"full"}
                    gap={["5rem", "10rem", "0"]}
                    position={"relative"}
                    zIndex={"2"}
                    direction={["column", "column", "row"]}
                    pt={["", "", "3%", "", "8%"]}
                >
                    {/* BAGIAN TENGAH PERTAMA */}
                    <Stack
                        gap={"0"}
                        color={"#AB2937"}
                        w={["100%", "", "", "50%"]}
                        fontWeight={"900"}
                        pl={["25%", "25%", "7%"]}
                    >
                        <Text
                            my={["-16px", "-24px", "-14px", "", "-40px"]}
                            fontSize={[
                                "4rem",
                                "6rem",
                                "3.6rem",
                                "4.4rem",
                                "7.7rem",
                            ]}
                        >
                            Feel
                        </Text>
                        <Text
                            my={["-5px", "-10px", "-6px", "", "-14px"]}
                            fontSize={[
                                "2rem",
                                "3rem",
                                "1.8rem",
                                "2.2rem",
                                "3.8rem",
                            ]}
                        >
                            The Original
                        </Text>
                        <Text
                            my={["-5px", "-10px", "-6px", "", "-14px"]}
                            fontSize={[
                                "2rem",
                                "3rem",
                                "1.8rem",
                                "2.2rem",
                                "3.8rem",
                            ]}
                        >
                            Middle East
                        </Text>
                        <Text
                            my={["-5px", "-10px", "-6px", "", "-14px"]}
                            fontSize={[
                                "2rem",
                                "3rem",
                                "1.8rem",
                                "2.2rem",
                                "3.8rem",
                            ]}
                        >
                            Kebab !
                        </Text>
                    </Stack>
                    {/* BAGIAN TENGAH PERTAMA */}
                    {/* BAGIAN TENGAH KEDUA */}
                    <Stack
                        gap={"0"}
                        color={"#AB2937"}
                        w={"fit-content"}
                        fontWeight={"900"}
                        pl={["25%", "25%", "0%", "30%", "28%"]}
                        pr={["", "", "8%", "0%"]}
                    >
                        <Stack gap={"0"}>
                            <Text
                                mb={["-6px", "-14px"]}
                                fontSize={[
                                    "1.6rem",
                                    "2.3rem",
                                    "1.4rem",
                                    "1.8rem",
                                    "2.8rem",
                                ]}
                            >
                                What’s inside
                            </Text>
                        </Stack>
                        <Stack gap={"0"}>
                            <Text
                                fontSize={[
                                    "1.6rem",
                                    "2.3rem",
                                    "1.4rem",
                                    "1.8rem",
                                    "2.8rem",
                                ]}
                            >
                                our kebab?
                            </Text>
                        </Stack>
                        {/* BAGIAN KOTAK PUTIH */}
                        <Stack
                            gap={["0.7rem", "", "", "", "1.4rem"]}
                            mt={["0.6rem"]}
                        >
                            <Stack
                                backgroundColor={"#FFFFFF"}
                                w={[
                                    "9.4rem",
                                    "13.5rem",
                                    "8.5rem",
                                    "10.4rem",
                                    "16rem",
                                ]}
                                h={[
                                    "2rem",
                                    "2.5rem",
                                    "1.6rem",
                                    "1.9rem",
                                    "2.6rem",
                                ]}
                                borderRadius={["2rem"]}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                direction={"row"}
                                fontSize={[
                                    "0.7rem",
                                    "1rem",
                                    "0.7rem",
                                    "0.8rem",
                                    "1.3rem",
                                ]}
                                pl={[
                                    "0.4rem",
                                    "0.6rem",
                                    "0.3rem",
                                    "",
                                    "0.6rem",
                                ]}
                                gap={[
                                    "0.9rem",
                                    "1.3rem",
                                    "0.3rem",
                                    "0.8rem",
                                    "1.2rem",
                                ]}
                                boxShadow={"lg"}
                            >
                                <Stack
                                    w={[
                                        "2.4rem",
                                        "3.2rem",
                                        "2.1rem",
                                        "2.8rem",
                                        "3.2rem",
                                    ]}
                                >
                                    <Image src="/Hero-Images/smokyChicken.svg" />
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    gap={[
                                        "0.4rem",
                                        "",
                                        "0.2rem",
                                        "0.4rem",
                                        "0.6rem",
                                    ]}
                                >
                                    <Text color={"#AB2937"}>Smoky</Text>
                                    <Text color={"black"} fontWeight={"bold"}>
                                        Chicken
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                backgroundColor={"#FFFFFF"}
                                w={[
                                    "9.4rem",
                                    "13.5rem",
                                    "8.5rem",
                                    "10.4rem",
                                    "16rem",
                                ]}
                                h={[
                                    "2rem",
                                    "2.5rem",
                                    "1.6rem",
                                    "1.9rem",
                                    "2.6rem",
                                ]}
                                borderRadius={["2rem"]}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                direction={"row"}
                                fontSize={[
                                    "0.7rem",
                                    "1rem",
                                    "0.7rem",
                                    "0.8rem",
                                    "1.3rem",
                                ]}
                                pl={[
                                    "0.4rem",
                                    "0.6rem",
                                    "0.3rem",
                                    "",
                                    "0.6rem",
                                ]}
                                gap={[
                                    "0.9rem",
                                    "1.3rem",
                                    "0.3rem",
                                    "0.8rem",
                                    "1.2rem",
                                ]}
                                boxShadow={"lg"}
                            >
                                <Stack
                                    w={[
                                        "2.4rem",
                                        "3.2rem",
                                        "2.1rem",
                                        "2.8rem",
                                        "3.2rem",
                                    ]}
                                >
                                    <Image src="/Hero-Images/crispyPotato.svg" />
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    gap={[
                                        "0.4rem",
                                        "",
                                        "0.2rem",
                                        "0.4rem",
                                        "0.6rem",
                                    ]}
                                >
                                    <Text color={"#AB2937"}>Crispy</Text>
                                    <Text color={"black"} fontWeight={"bold"}>
                                        Potato
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                backgroundColor={"#FFFFFF"}
                                w={[
                                    "9.4rem",
                                    "13.5rem",
                                    "8.5rem",
                                    "10.4rem",
                                    "16rem",
                                ]}
                                h={[
                                    "2rem",
                                    "2.5rem",
                                    "1.6rem",
                                    "1.9rem",
                                    "2.6rem",
                                ]}
                                borderRadius={["2rem"]}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                direction={"row"}
                                fontSize={[
                                    "0.7rem",
                                    "1rem",
                                    "0.7rem",
                                    "0.8rem",
                                    "1.3rem",
                                ]}
                                pl={[
                                    "0.4rem",
                                    "0.6rem",
                                    "0.3rem",
                                    "",
                                    "0.6rem",
                                ]}
                                gap={[
                                    "0.9rem",
                                    "1.3rem",
                                    "0.3rem",
                                    "0.8rem",
                                    "1.2rem",
                                ]}
                                boxShadow={"lg"}
                            >
                                <Stack
                                    w={[
                                        "2.4rem",
                                        "3.2rem",
                                        "2.1rem",
                                        "2.8rem",
                                        "3.2rem",
                                    ]}
                                >
                                    <Image src="/Hero-Images/freshVeggie.svg" />
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    gap={[
                                        "0.4rem",
                                        "",
                                        "0.2rem",
                                        "0.4rem",
                                        "0.6rem",
                                    ]}
                                >
                                    <Text color={"#AB2937"}>Fresh</Text>
                                    <Text color={"black"} fontWeight={"bold"}>
                                        Veggie
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                backgroundColor={"#FFFFFF"}
                                w={[
                                    "9.4rem",
                                    "13.5rem",
                                    "8.5rem",
                                    "10.4rem",
                                    "16rem",
                                ]}
                                h={[
                                    "2rem",
                                    "2.5rem",
                                    "1.6rem",
                                    "1.9rem",
                                    "2.6rem",
                                ]}
                                borderRadius={["2rem"]}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                direction={"row"}
                                fontSize={[
                                    "0.7rem",
                                    "1rem",
                                    "0.7rem",
                                    "0.8rem",
                                    "1.3rem",
                                ]}
                                pl={[
                                    "0.4rem",
                                    "0.6rem",
                                    "0.3rem",
                                    "",
                                    "0.6rem",
                                ]}
                                gap={[
                                    "0.9rem",
                                    "1.3rem",
                                    "0.3rem",
                                    "0.8rem",
                                    "1.2rem",
                                ]}
                                boxShadow={"lg"}
                            >
                                <Stack
                                    w={[
                                        "2.4rem",
                                        "3.2rem",
                                        "2.1rem",
                                        "2.8rem",
                                        "3.2rem",
                                    ]}
                                >
                                    <Image src="/Hero-Images/specialSauce.svg" />
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    gap={[
                                        "0.4rem",
                                        "",
                                        "0.2rem",
                                        "0.4rem",
                                        "0.6rem",
                                    ]}
                                >
                                    <Text color={"#AB2937"}>Special</Text>
                                    <Text color={"black"} fontWeight={"bold"}>
                                        Sauce
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>
                        {/* BAGIAN KOTAK PUTIH */}
                    </Stack>
                    {/* BAGIAN TENGAH KEDUA */}
                </Stack>
                {/* BAGIAN TENGAH */}

                {/* BAGIAN GAMBAR KEBABNYA */}
                <Stack
                    w={["262%", "262%", "100%"]}
                    mb={["-8.9%", "-8.9%", "0%"]}
                    mt={["", "", "-26rem", "-32rem", "-42rem"]}
                    position={"relative"}
                    zIndex={"1"}
                >
                    <Image src="/Hero-Images/hero-Kebab.svg" w={"100%"} />
                </Stack>
                {/* BAGIAN GAMBAR KEBABNYA */}
            </Stack>
        </>
    );
}
