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
    Show,
    Hide,
} from "@chakra-ui/react";

type Location = {
    location: string;
    coordinate: string;
};

const Location = ({ location, coordinate }: Location) => {
    return (
        <Stack
            bgGradient="linear(to-b, #FFFFFF, #FDD03975)"
            minH={"100vh"}
            minW={"100vw"}
            id="location"
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
                    <Show above="md">
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
                                <Text
                                    fontSize={"1.6rem"}
                                    fontWeight={"semibold"}
                                >
                                    Location
                                </Text>
                            </Stack>
                        </Stack>
                    </Show>

                    <Hide above="md">
                        <Stack
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={4}
                            direction={"column"}
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
                                <Text
                                    fontSize={"1.6rem"}
                                    fontWeight={"semibold"}
                                >
                                    Location
                                </Text>
                            </Stack>
                        </Stack>
                    </Hide>

                    <Stack
                        justifyContent={"center"}
                        justifyItems={"center"}
                        flexDirection={"row"}
                        wrap={"wrap"} // Memastikan elemen di Stack dapat membungkus
                    >
                        <Text
                            fontSize={"1.2rem"}
                            textAlign={"center"}
                            fontWeight={"medium"}
                            maxWidth={[
                                "200px",
                                "400px",
                                "600px",
                                "1000px",
                                "1200px",
                            ]}
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
                        width={["200px", "400px", "600px", "1000px", "1200px"]}
                        height={["200px", "200px", "200px", "300px", "300px"]}
                        shadow={"lg"}
                    >
                        <iframe
                            src={coordinate}
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
                <Show above="md">
                    <Stack
                        bgColor={"white"}
                        h={"full"}
                        width={["200px", "400px", "600px", "1000px", "1200px"]}
                        direction={"row"}
                        borderRadius={"3xl"}
                    >
                        <Stack
                            p={4}
                            // alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <img src="images/locDetail.svg" alt="" />
                        </Stack>
                        <Stack py={5} w={"50%"}>
                            <Text fontWeight={"bold"} fontSize={"1.2rem"}>
                                Location Detail
                            </Text>
                            <Text>{location}</Text>
                        </Stack>
                    </Stack>
                </Show>

                <Hide above="md">
                    <Stack
                        bgColor={"white"}
                        h={"full"}
                        width={["200px", "400px", "600px", "1000px", "1200px"]}
                        direction={"column"}
                        borderRadius={"3xl"}
                        pb={6}
                    >
                        <Stack
                            p={4}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <img src="images/locDetail.svg" alt="" />
                        </Stack>
                        <Stack pl={4} w={"95%"}>
                            <Text fontWeight={"bold"} fontSize={"1.2rem"}>
                                Location Detail
                            </Text>
                            <Text>
                                This will explain the location details but this
                                can be edited. The text will be quite long
                                because it tells you the way and where to go.
                            </Text>
                        </Stack>
                    </Stack>
                </Hide>
                {/* LOCATION DETAIL END */}
            </Stack>
        </Stack>
    );
};

export default Location;
