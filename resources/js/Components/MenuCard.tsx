import { Button, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const MenuCard = () => {
    return (
        <Stack
            bgColor={"white"}
            borderRadius={"xl"}
            direction={"row"}
            minW={"450px"}
        >
            <Image
                // w={["5rem", "6rem", "8rem", "10rem"]}
                src="/images/kebabSpecial.png"
                alt="Kebab Aryana"
                m={["0.5rem", "0.75rem", "0.75rem", "0.75rem"]}
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
                    <Heading color={"#352919"} fontSize={"xl"}>
                        Special Sandwich Ayam
                    </Heading>
                    <Text color={"#35291950"}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et.
                    </Text>
                </Stack>
                {/* Buttons */}
                <Stack align={"end"} direction={"row"} gap={5}>
                    <Button
                        bgColor={"#D9D9D9"}
                        border={"1px solid #AB2937"}
                        borderRadius={"full"}
                        w={"7rem"}
                    >
                        <MdDeleteForever color="#AB2937" />
                        <Text color={"#AB2937"} ml={2}>
                            Delete
                        </Text>
                    </Button>
                    <Button
                        w={"7rem"}
                        bgColor={"#352919"}
                        borderRadius={"full"}
                    >
                        <BiSolidEdit color={"#FFF7E4"} />
                        <Text ml={2} color={"#FFF7E4"}>
                            Edit
                        </Text>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default MenuCard;
