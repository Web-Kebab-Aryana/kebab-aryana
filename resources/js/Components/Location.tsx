import React from "react";
import { SlLocationPin } from "react-icons/sl";
import {
    Box,
    Heading,
    Stack,
    Image,
    Text,
    Button,
    Tag,
    TagLabel,
    TagLeftIcon,
} from "@chakra-ui/react";

const Location = () => {
    return (
        <Stack
            bgGradient="linear(to-b, #FFFFFF, #FDD03975)"
            minH={"100vh"}
            minW={"100vw"}
        >
            <Stack
                mt={10}
                mb={10}
                direction={"column"}
                alignItems={"center"}
                gap={10}
            >
                {/* FIND OUR LOCATION START */}
                <Stack direction={"column"} gap={10}>
                    <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={4}
                        direction={"row"}
                    >
                        <Stack fontSize={"2rem"}>
                            <Text fontWeight={"semibold"}>Find Our</Text>
                        </Stack>
                        <Stack
                            bgColor={"#FDD039"}
                            borderRadius={"full"}
                            py={1}
                            px={6}
                            alignItems={"center"}
                            justifyContent={"center"}
                            direction={"row"}
                        >
                            <SlLocationPin size={"1.5rem"} />
                            <Text fontSize={"1.6rem"} fontWeight={"semibold"}>
                                Location
                            </Text>
                        </Stack>
                    </Stack>

                    <Stack
                        px={10}
                        justifyContent={"center"}
                        justifyItems={"center"}
                        flexDirection={"row"}
                    >
                        <Text
                            fontSize={"1.2rem"}
                            px={200}
                            textAlign={"center"}
                            fontWeight={"medium"}
                        >
                            Our kebab location that is constantly moving or{" "}
                            <Box as="span" color={"red"}>
                                Nomadic
                            </Box>
                            , so it needs special attention in finding it. This
                            changing location can be a challenge, but it also
                            adds to the excitement of finding the delicious
                            kebab.
                        </Text>
                    </Stack>
                </Stack>
                {/* FIND OUR LOCATION END */}

                {/* GOOGLE MAPS EMBED START */}
                <Stack>
                    <Box
                        borderRadius={"3xl"}
                        overflow="hidden"
                        width="1400px"
                        height="400px"
                        shadow={"lg"}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.9985603818!2d106.609139!3d-6.263918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTUnNTAuMSJTIDEwNsKwMzYnMzIuOSJF!5e0!3m2!1sen!2sid!4v1716876638808!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Box>
                </Stack>
                {/* GOOGLE MAPS EMBED END */}

                {/* LOCATION DETAIL START */}
                <Stack
                    bgColor={"white"}
                    h={"full"}
                    w={"1400px"}
                    direction={"row"}
                    // gap={2}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"2xl"}
                    pr={5}
                >
                    <Stack p={4}>
                        <img src="images/locDetail.svg" alt="" />
                    </Stack>
                    <Stack>
                        <Text fontWeight={"bold"} fontSize={"1.2rem"}>
                            Location Detail
                        </Text>
                        <Text>
                            This will explain the location details but this can
                            be edited. The text will be quite long because it
                            tells you the way and where to go.
                        </Text>
                    </Stack>
                </Stack>
                {/* LOCATION DETAIL END */}
            </Stack>
        </Stack>
    );
};

export default Location;
