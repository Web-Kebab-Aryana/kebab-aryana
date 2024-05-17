import { Button, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const OrderCard = () => {
    return (
        <>
            <Stack
                bgColor={"white"}
                borderRadius={"xl"}
                direction={"row"}
                minW={["380px", "390px", "390px", "425px", "425px"]}
                maxW={["380px", "390px", "390px", "425px", "425px"]}
            >
                <Image
                    // w={["5rem", "6rem", "8rem", "10rem"]}
                    src="/images/kebab.png"
                    alt="Kebab Aryana"
                    m={["0.5rem", "0.75rem", "0.75rem", "0.75rem"]}
                    borderRadius={"xl"}
                />

                {/* Right */}
                <Stack p={5} pl={0} justifyContent={"space-between"} w={"100%"}>
                    <Stack w={"100%"}>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            w={["100%", "100%", "90%", "100%", "100%"]}
                        >
                            <Tag
                                bgColor={"#D9D9D9"}
                                h={25}
                                color={"#35291950"}
                                rounded={"full"}
                                fontSize={"0.75rem"}
                            >
                                Kebab
                            </Tag>
                            <Heading
                                color={"#D59B70"}
                                fontSize={["sm", "sm", "sm", "md", "md"]}
                            >
                                35K
                            </Heading>
                        </Stack>
                        {/* Name */}
                        <Heading
                            color={"#352919"}
                            fontSize={["sm", "sm", "sm", "md", "md"]}
                        >
                            Special Sandwich Ayam
                        </Heading>
                        <Text
                            color={"#35291950"}
                            fontSize={["xs", "xs", "xs", "sm", "sm"]}
                        >
                            Kebab panjang seperti titit kuda dengan potonngan
                            ayam yang gyatt
                        </Text>
                    </Stack>
                    {/* Buttons */}
                    <Stack
                        align={"end"}
                        direction={"row"}
                        gap={3}
                        justify={"space-between"}
                    >
                        <Stack align={"center"} direction={"row"}>
                            <Button
                                bgColor={"white"}
                                border={"1px solid #35291950"}
                                size={["xs", "xs", "xs", "sm", "sm"]}
                                // borderRadius={"full"}
                                // w={"7rem"}
                            >
                                <Text fontWeight={"bold"} color={"#352919"}>
                                    -
                                </Text>
                            </Button>
                            <Text color={"#352919"}>0</Text>
                            <Button
                                bgColor={"white"}
                                border={"1px solid #35291950"}
                                size={["xs", "xs", "xs", "sm", "sm"]}
                                // borderRadius={"full"}
                                // w={"7rem"}
                            >
                                <Text fontWeight={"bold"} color={"#352919"}>
                                    +
                                </Text>
                            </Button>
                        </Stack>
                        <Button
                            w={"7rem"}
                            bgColor={"#352919"}
                            borderRadius={"full"}
                            size={["xs", "xs", "xs", "sm", "sm"]}
                        >
                            <Text color={"#FFF7E4"}>Add to Cart</Text>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default OrderCard;
