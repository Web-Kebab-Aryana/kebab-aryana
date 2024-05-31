import { Image, Stack, Text, Divider } from "@chakra-ui/react";

export default function DivideStats() {
    return (
        <>
            <Stack w={"100vw"}>
                <Stack>
                    <Image src="/Divide-Stats/divideStats.svg" />
                </Stack>
            </Stack>

            <Stack
                direction={"row"}
                w={"100vw"}
                h={"16rem"}
                bgColor={"#FFF6D9"}
                align={"center"}
            >
                <Stack>
                    <Text fontWeight={"bold"} fontSize={"6xl"}>
                        100+
                    </Text>
                    <Text fontSize={"3xl"}>Orders/month</Text>
                </Stack>
                <Divider
                    orientation="vertical"
                    border={"solid 3px"}
                    rounded={"3xl"}
                    h={"11rem"}
                />
                <Stack>
                    <Text fontWeight={"bold"} fontSize={"6xl"}>
                        4.9
                    </Text>
                    <Text fontSize={"3xl"}>Orders/month</Text>
                </Stack>
                <Divider
                    orientation="vertical"
                    border={"solid 3px"}
                    rounded={"3xl"}
                    h={"11rem"}
                />
                <Stack>
                    <Text fontWeight={"bold"} fontSize={"6xl"}>
                        90+
                    </Text>
                    <Text fontSize={"3xl"}>Receipts we have</Text>
                </Stack>
            </Stack>
        </>
    );
}
