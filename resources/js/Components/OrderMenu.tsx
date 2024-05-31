import { Box, Heading, Stack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const OrderMenu = () => {
    return (
        <Stack
            direction={["column", "row", "row", "row", "row"]}
            bgColor={"#E7464E"}
            w={"100vw"}
            h={["26rem", "14rem", "16rem", "23rem", "23rem"]}
            py={"2rem"}
            px={["2rem", "1rem", "4rem", "4rem", "4rem"]}
            justify={"space-between"}
            align={["center", "center", "center", "center", "center"]}
        >
            <Stack
                justify={[
                    "start",
                    "space-evenly",
                    "space-evenly",
                    "space-evenly",
                    "space-evenly",
                ]}
                w={["100%", "25%", "25%", "25%", "25%"]}
                h={"100%"}
                gap={2}
            >
                <Text
                    fontSize={["4xl", "lg", "3xl", "4xl", "5xl"]}
                    fontWeight={"semibold"}
                    textColor={"white"}
                >
                    Have you tried our Best Seller?
                </Text>
                <Button
                    w={["8rem", "6rem", "8rem", "10rem", "12rem"]}
                    h={["2rem", "2rem", "2rem", "3rem", "3rem"]}
                    rounded={"full"}
                    bgColor={"#FDD039"}
                    textColor={"black"}
                    fontSize={["xs", "xs", "sm", "md", "lg"]}
                >
                    Explore Menu
                </Button>
            </Stack>
            <Stack
                w={["55%", "22%", "22%", "22%", "22%"]}
                h={"100%"}
                bgImage={"url('/OrderMenu/kebab.png')"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                objectFit={"cover"}
            >
                <Stack
                    bgGradient="linear(to-b, transparent 60%, white 80%)"
                    h={"100%"}
                    align={"center"}
                    justify={"end"}
                    pb={["5%", "5%", "5%", "7%", "1.5rem"]}
                >
                    <Text
                        fontSize={["xs", "xs", "sm", "lg", "xl"]}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        Special Sandwich Ayam
                    </Text>
                </Stack>
            </Stack>
            <Stack
                w={["22%", "22%", "22%", "22%", "22%"]}
                h={"100%"}
                display={["none", "flex", "flex", "flex", "flex"]}
                bgImage={"url('/OrderMenu/sandwich.png')"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                objectFit={"fill"}
            >
                <Stack
                    bgGradient="linear(to-b, transparent 60%, white 80%)"
                    h={"100%"}
                    align={"center"}
                    justify={"end"}
                    pb={["5%", "5%", "5%", "7%", "1.5rem"]}
                >
                    <Text
                        fontSize={["xs", "xs", "sm", "lg", "xl"]}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        Sandwich Ayam
                    </Text>
                </Stack>
            </Stack>
            <Stack
                w={["22%", "22%", "22%", "22%", "22%"]}
                h={"100%"}
                display={["none", "flex", "flex", "flex", "flex"]}
                bgImage={"url('/OrderMenu/biryani.png')"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                objectFit={"fill"}
            >
                <Stack
                    bgGradient="linear(to-b, transparent 60%, white 80%)"
                    h={"100%"}
                    align={"center"}
                    justify={"end"}
                    pb={["5%", "5%", "5%", "7%", "1.5rem"]}
                >
                    <Text
                        fontSize={["xs", "xs", "sm", "lg", "xl"]}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        Nasi Biryani
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default OrderMenu;
