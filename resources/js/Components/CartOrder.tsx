import {
    Button,
    Heading,
    Image,
    Stack,
    Tag,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const CartOrder = () => {
    return (
        <Stack py={"1rem"}>
            <Stack
                bgColor={"white"}
                borderRadius={"xl"}
                direction={"row"}
                minW={"425px"}
                maxW={"425px"}
                px={"1rem"}
            >
                <Image
                    // w={["5rem", "6rem", "8rem", "10rem"]}
                    src="/images/kebab.png"
                    alt="Kebab Aryana"
                    m={["0.5rem", "0.75rem", "0.75rem", "0.75rem"]}
                    borderRadius={"xl"}
                />

                {/* Right */}
                <Stack p={5} pl={0} justifyContent={"space-between"}>
                    <Stack>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
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
                        </Stack>
                        {/* Name */}
                        <Heading color={"#352919"} fontSize={"md"}>
                            Special Sandwich Ayam
                        </Heading>
                        <Text color={"#35291950"} fontSize={"sm"}>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et.
                        </Text>
                    </Stack>
                    {/* Buttons */}
                    <Stack
                        align={"end"}
                        direction={"row"}
                        gap={3}
                        justify={"space-between"}
                    >
                        <Heading color={"#D59B70"} fontSize={"3xl"}>
                            35K
                        </Heading>
                        <Stack align={"center"} direction={"row"}>
                            <Button
                                bgColor={"white"}
                                border={"1px solid #35291950"}
                                size={"sm"}
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
                                size={"sm"}
                                // borderRadius={"full"}
                                // w={"7rem"}
                            >
                                <Text fontWeight={"bold"} color={"#352919"}>
                                    +
                                </Text>
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack px={"2rem"}>
                <Input
                    rounded={"3xl"}
                    placeholder="*Opsional | Contoh: sangat pedas"
                ></Input>
            </Stack>
        </Stack>
    );
};

export default CartOrder;
