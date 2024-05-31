import { Image, Stack, Text, Divider } from "@chakra-ui/react";

export default function DivideStats() {
    return (
        <>
            <Stack
                direction={["column", "column", "row", "row", "row"]}
                w={"100vw"}
                h={["32rem", "36rem", "16rem", "16rem", "16rem"]}
                px={["8rem", "8rem", "8rem", "2rem", "8rem"]}
                py={["2rem", "2rem", "2rem", "2rem", "2rem"]}
                bgColor={"#FFF6D9"}
                align={"center"}
                justify={[
                    "space-evenly",
                    "space-evenly",
                    "space-evenly",
                    "center",
                    "center",
                ]}
                gap={0}
            >
                <Stack direction={["column", "column", "column", "row", "row"]}>
                    <Stack align={"center"} px={"2rem"}>
                        <Text
                            fontWeight={"bold"}
                            fontSize={["4xl", "4xl", "4xl", "5xl", "6xl"]}
                            textColor={"#5F4F3A"}
                        >
                            100+
                        </Text>
                        <Text
                            fontSize={["xl", "2xl", "2xl", "3xl", "3xl"]}
                            textColor={"#5F4F3A80"}
                            align={"center"}
                        >
                            Orders/month
                        </Text>
                    </Stack>
                    <Divider
                        display={["none", "none", "none", "block", "block"]}
                        orientation="vertical"
                        border={"solid 3px"}
                        rounded={"3xl"}
                        h={"11rem"}
                        color={"#5F4F3A33"}
                    />
                    <Stack align={"center"} px={"2rem"}>
                        <Text
                            fontWeight={"bold"}
                            fontSize={["4xl", "4xl", "4xl", "5xl", "6xl"]}
                            textColor={"#5F4F3A"}
                        >
                            4.9
                        </Text>
                        <Text
                            fontSize={["xl", "2xl", "2xl", "3xl", "3xl"]}
                            textColor={"#5F4F3A80"}
                            align={"center"}
                        >
                            Google Score
                        </Text>
                    </Stack>
                    <Divider
                        display={["none", "none", "none", "block", "block"]}
                        orientation="vertical"
                        border={"solid 3px"}
                        rounded={"3xl"}
                        h={"11rem"}
                        color={"#5F4F3A33"}
                    />
                </Stack>

                <Stack direction={["column", "column", "column", "row", "row"]}>
                    <Stack align={"center"} px={"2rem"}>
                        <Text
                            fontWeight={"bold"}
                            fontSize={["4xl", "4xl", "4xl", "5xl", "6xl"]}
                            textColor={"#5F4F3A"}
                        >
                            90+
                        </Text>
                        <Text
                            fontSize={["xl", "2xl", "2xl", "3xl", "3xl"]}
                            textColor={"#5F4F3A80"}
                            align={"center"}
                        >
                            Receipts we have
                        </Text>
                    </Stack>
                    <Divider
                        display={["none", "none", "none", "block", "block"]}
                        orientation="vertical"
                        border={"solid 3px"}
                        rounded={"3xl"}
                        h={"11rem"}
                        color={"#5F4F3A33"}
                    />
                    <Stack align={"center"} px={"2rem"}>
                        <Text
                            fontWeight={"bold"}
                            fontSize={["4xl", "4xl", "4xl", "5xl", "6xl"]}
                            textColor={"#5F4F3A"}
                        >
                            69+
                        </Text>
                        <Text
                            fontSize={["xl", "2xl", "2xl", "3xl", "3xl"]}
                            textColor={"#5F4F3A80"}
                            align={"center"}
                        >
                            Tekkom 22 order
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
