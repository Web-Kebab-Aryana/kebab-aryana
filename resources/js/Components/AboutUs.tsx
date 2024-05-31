import { Hide, Image, Show, Stack, Text } from "@chakra-ui/react";

type AboutUsProps = {
    aboutus: string;
};

export default function AboutUs({ aboutus }: AboutUsProps) {
    return (
        <>
            <Stack w={"100vw"} id="about-us">
                <Stack padding={["1.4rem", "", "", "4rem"]}>
                    {/* About Owner */}
                    <Stack
                        backgroundColor={"#FFF4E0"}
                        borderRadius={"2rem"}
                        pt={["2.9rem", "", "", "0rem"]}
                        position={"relative"}
                        gap={["2.9rem", "3.9rem", "0rem"]}
                        direction={["column", "column", "column", "row"]}
                        justifyContent={["", "", "", "space-between"]}
                    >
                        <Stack
                            px={["1.5rem", "", "2.7rem", "4.9rem"]}
                            gap={["2rem"]}
                            pt={["", "", "", "2.6rem"]}
                        >
                            <Stack
                                borderRadius={["2rem"]}
                                borderColor={"#FDD039"}
                                borderWidth={"0.2rem"}
                                w={[
                                    "9.5rem",
                                    "10rem",
                                    "12rem",
                                    "9.9rem",
                                    "10.7rem",
                                    "16rem",
                                ]}
                                h={[
                                    "2.9rem",
                                    "3rem",
                                    "3.6rem",
                                    "2.6rem",
                                    "4rem",
                                ]}
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={"0"}
                                fontSize={[
                                    "1.2rem",
                                    "",
                                    "1.5rem",
                                    "1.2rem",
                                    "1.4rem",
                                    "1.8rem",
                                ]}
                                fontWeight={"semibold"}
                            >
                                <Text color={"#5F4F3A"}>About us</Text>
                            </Stack>
                            <Stack gap={["1rem"]}>
                                <Text
                                    fontWeight={"semibold"}
                                    fontSize={[
                                        "1.3rem",
                                        "",
                                        "1.8rem",
                                        "1.3rem",
                                        "1.5rem",
                                        "2rem",
                                    ]}
                                >
                                    Greetings, My name is Muhammad, and I sell
                                    Kebab.
                                </Text>
                                <Text
                                    fontSize={[
                                        "1.2rem",
                                        "",
                                        "1.7rem",
                                        "1.2rem",
                                        "1.4rem",
                                        "1.9rem",
                                    ]}
                                >
                                    {aboutus}
                                </Text>
                            </Stack>
                        </Stack>

                        <Stack
                            alignItems={"center"}
                            bgImage={"/About-Us/bgOwnerIPad.svg"}
                            bgRepeat={"no-repeat"}
                            bgSize={"cover"}
                            bgPosition={"center"}
                            borderBottomLeftRadius={["2rem", "", "", "0rem"]}
                            borderBottomRightRadius={["2rem"]}
                            borderTopRightRadius={["0rem", "", "", "2rem"]}
                            pb={["1.2rem", "", "", "0rem"]}
                            position={"relative"}
                            fontWeight={"bold"}
                            pt={["", "", "3rem", "0rem"]}
                            justifyContent={"center"}
                            alignContent={"center"}
                            pr={["", "", "", "5rem", "7rem", "10rem"]}
                        >
                            <Stack
                                w={[
                                    "15rem",
                                    "24rem",
                                    "24rem",
                                    "17rem",
                                    "20rem",
                                    "27rem",
                                ]}
                            >
                                <Image src="/About-Us/ownerKebab.svg" />
                            </Stack>
                        </Stack>
                    </Stack>
                    {/* About Owner */}
                    {/* Information about Orders */}
                    <Stack></Stack>
                    {/* Information about Orders */}
                </Stack>
            </Stack>
        </>
    );
}
