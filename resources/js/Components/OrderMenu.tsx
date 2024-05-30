import { Box, Heading, Stack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const OrderMenu = () => {
    return (
        <Stack
            direction={"row"}
            bgColor={"#E7464E"}
            w={"100vw"}
            h={"23rem"}
            py={"2rem"}
            px={"4rem"}
            justify={"space-between"}
        >
            <Stack justify={"start"} py={"2rem"} w={"25%"} h={"100%"} gap={8}>
                <Text
                    fontSize={["5xl", "5xl", "5xl", "4xl", "5xl"]}
                    fontWeight={"semibold"}
                    textColor={"white"}
                >
                    Have you tried our Best Seller?
                </Text>
                <Button
                    w={"12rem"}
                    h={"3rem"}
                    rounded={"full"}
                    bgColor={"#FDD039"}
                    textColor={"black"}
                >
                    Explore Menu
                </Button>
            </Stack>
            <Stack
                w={"22%"}
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
                    pb={"1.5rem"}
                >
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Special Sandwich Ayam
                    </Text>
                </Stack>
            </Stack>
            <Stack
                w={"22%"}
                h={"100%"}
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
                    pb={"1.5rem"}
                >
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Sandwich Ayam
                    </Text>
                </Stack>
            </Stack>
            <Stack
                w={"22%"}
                h={"100%"}
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
                    pb={"1.5rem"}
                >
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Nasi Biryani
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default OrderMenu;
