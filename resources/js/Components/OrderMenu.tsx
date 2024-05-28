import { Box, Heading, Stack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const OrderMenu = () => {
    return (
        <Stack direction={"row"} bgColor={"#E7464E"} w={"100vw"}>
            <Stack justify={"space-between"} px={"3rem"} py={"1rem"} w={"25%"}>
                <Text
                    fontSize={"5xl"}
                    fontWeight={"semibold"}
                    textColor={"white"}
                >
                    Have you tried our Best Seller?
                </Text>
                <Button
                    w={"10rem"}
                    rounded={"3xl"}
                    bgColor={"#FDD039"}
                    textColor={"black"}
                >
                    Explore Menu
                </Button>
            </Stack>
            <Stack
                w={"25%"}
                h={"100%"}
                bgImage={"url('/OrderMenu/kebab.png')"}
                bgRepeat={"no-repeat"}
                objectFit={"fill"}
            ></Stack>
            <Stack
                w={"25%"}
                h={"100%"}
                bgImage={"url('/OrderMenu/kebab.png')"}
                bgRepeat={"no-repeat"}
                objectFit={"fill"}
            ></Stack>
            <Stack
                w={"25%"}
                h={"100%"}
                bgImage={"url('/OrderMenu/kebab.png')"}
                bgRepeat={"no-repeat"}
                objectFit={"fill"}
            ></Stack>
        </Stack>
    );
};

export default OrderMenu;
