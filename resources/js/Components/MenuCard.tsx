import { Button, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const MenuCard = () => {
    return (
        <Stack
            bgColor={"white"}
            borderRadius={"xl"}
            direction={{ base: "column", sm: "row" }}
            minW={{ base: "100px", sm: "400px", lg: "450px" }}
            shadow={"lg"}
            p={{ base: 5, sm: 0 }}
            pb={{ base: 2, sm: 0 }}
        >
            <Image
                w={{ base: "full", sm: "10rem" }}
                h={{ base: "10rem", sm: "auto" }}
                objectFit={"cover"}
                src="/images/kebabSpecial.png"
                alt="Kebab Aryana"
                m={["0rem", "0.75rem", "0.75rem", "0.75rem"]}
                borderRadius={"xl"}
            />
            {/* Right */}
            <Stack p={5} pl={0} justifyContent={"space-between"}>
                <Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Tag
                            bgColor={"#D9D9D9"}
                            h={25}
                            color={"#35291950"}
                            rounded={"full"}
                            fontSize={"0.75rem"}
                        >
                            Kebab
                        </Tag>
                        <Heading color={"#D59B70"} fontSize={"xl"}>
                            35K
                        </Heading>
                    </Stack>
                    {/* Name */}
                    <Heading
                        color={"#352919"}
                        fontSize={{ sm: "md", lg: "xl" }}
                    >
                        Special Sandwich Ayam
                    </Heading>
                    <Text
                        color={"#35291950"}
                        fontSize={{ base: "xs", md: "sm", lg: "md" }}
                        h={{ base: "3.5rem", sm: "auto" }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et.
                    </Text>
                </Stack>
                {/* Buttons */}
                <Stack align={"end"} direction={"row"} gap={{ base: 3, lg: 5 }}>
                    <Button
                        bgColor={"#D9D9D9"}
                        border={"1px solid #AB2937"}
                        borderRadius={"full"}
                        // w={"7rem"}
                        size={{ base: "sm", lg: "md" }}
                    >
                        <MdDeleteForever color="#AB2937" />
                        <Text color={"#AB2937"} ml={2}>
                            Delete
                        </Text>
                    </Button>
                    <Button
                        bgColor={"#352919"}
                        borderRadius={"full"}
                        // w={"7rem"}
                        size={{ base: "sm", lg: "md" }}
                    >
                        <Stack
                            direction={"row"}
                            align={"center"}
                            mx={2}
                            gap={0}
                        >
                            <BiSolidEdit color={"#FFF7E4"} />
                            <Text ml={2} color={"#FFF7E4"}>
                                Edit
                            </Text>
                        </Stack>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default MenuCard;
