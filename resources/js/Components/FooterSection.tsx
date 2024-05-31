import { Image, Link, Show, Stack, Text } from "@chakra-ui/react";

export default function FooterSection() {
    return (
        <>
            <Stack
                backgroundColor={"white"}
                overflow={"hidden"}
                w={"100vw"}
                mt={"6rem"}
            >
                <Stack
                    bgGradient={
                        "linear-gradient(to bottom, rgba(255,244,224,1) 0%, rgba(255,233,192,1) 100%);"
                    }
                    borderTopRadius={"6%"}
                    alignItems={["center"]}
                    gap={["2rem", "4rem", "1.5rem", "3rem"]}
                >
                    <Stack
                        w={"100%"}
                        gap={["2.2rem", "4.2rem", "0rem"]}
                        direction={["column", "column", "row"]}
                        alignItems={["", "", "center"]}
                        mt={["", "", "0%"]}
                    >
                        {/* BAGIAN PERTAMA */}
                        <Stack
                            alignItems={["center", "", "flex-start"]}
                            gap={["0"]}
                            w={"100%"}
                            pl={["", "", "7%"]}
                        >
                            <Stack
                                w={["100%", "", "35%"]}
                                gap={"0"}
                                alignItems={"center"}
                            >
                                <Image
                                    src="/Hero-Images/logo-Aryana.svg"
                                    w={["55%", "", "100%"]}
                                />
                            </Stack>
                            <Stack
                                color={"#B22B39"}
                                direction={"row"}
                                fontSize={"1.25rem"}
                                gap={["0.5rem"]}
                                mt={["-1.4rem", "-2.4rem", "-9%"]}
                                ml={["", "", "2%"]}
                            >
                                <Text fontWeight={"bold"}>More Than</Text>
                                <Text fontWeight={"200"}>Just Kebab.</Text>
                            </Stack>
                            <Show above="md">
                                <Stack
                                    fontSize={"1rem"}
                                    ml={["", "", "2%"]}
                                    mt={["", "", "5%"]}
                                >
                                    <Text>
                                        © Kebab Aryana. All rights reserved.
                                    </Text>
                                </Stack>
                            </Show>
                        </Stack>
                        {/* BAGIAN PERTAMA */}
                        {/* BAGIAN KEDUA */}
                        <Stack
                            gap={["1rem", "", "0.5rem"]}
                            fontSize={"1.2rem"}
                            w={["100%", "", "60%"]}
                            mt={["", "", "6%", "", "4%"]}
                        >
                            <Stack
                                color={"black"}
                                fontWeight={"bold"}
                                alignItems={["center", "", "flex-end"]}
                            >
                                <Text>Section</Text>
                            </Stack>
                            <Stack
                                alignItems={["center", "center", "flex-end"]}
                                color={"#352919"}
                                opacity={"0.7"}
                                gap={"0"}
                            >
                                <Link href="/">Home</Link>
                                <Link href="/#about-us">About Us</Link>
                                <Link href="/#location">Location</Link>
                                <Link href="/#menu">Menu</Link>
                                <Link href="/login">Admin</Link>
                            </Stack>
                        </Stack>
                        {/* BAGIAN KEDUA */}
                        {/* BAGIAN KETIGA */}
                        <Stack
                            w={["100%", "", "16rem", "19.9rem", "25rem"]}
                            alignItems={"center"}
                            justifyContent={["", "", "center"]}
                            mr={["", "", "6%"]}
                            ml={["", "", "7%"]}
                            mt={["", "", "3%", "", "", "1.5%"]}
                        >
                            <Image
                                src="/Hero-Images/logoQRIS.svg"
                                w={["40%", "", "100%"]}
                            />
                        </Stack>
                        {/* BAGIAN KETIGA */}
                        {/* SHOW SAAT MOBILE */}
                        <Show below="md">
                            <Stack
                                alignItems={"center"}
                                w={"100%"}
                                fontSize={["1rem", "1.6rem"]}
                            >
                                <Text>
                                    © Kebab Aryana. All rights reserved.
                                </Text>
                            </Stack>
                        </Show>
                        {/* SHOW SAAT MOBILE */}
                    </Stack>

                    {/* GAMBAR BAWAH */}
                    <Stack w={"100%"}>
                        <Image src="/Hero-Images/footer-Kebab.svg" />
                    </Stack>
                    {/* GAMBAR BAWAH */}
                </Stack>
            </Stack>
        </>
    );
}
