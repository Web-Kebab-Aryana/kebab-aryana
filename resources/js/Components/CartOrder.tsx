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
import { MdDeleteForever, MdNotes } from "react-icons/md";

const CartOrder = () => {
    return (
        <Stack w={["12rem", "20rem", "20rem", "20rem", "26rem"]}>
            <Stack
                direction={["column", "column", "row", "row", "row"]}
                w={["12rem"]}
            >
                <Image src="/images/kebab.png" alt="Kebab Aryana" />
                <Stack justify={"space-between"} w={"100%"}>
                    <Stack w={"100%"}>
                        <Tag
                            bgColor={"#D9D9D9"}
                            h={25}
                            w={50}
                            color={"#35291950"}
                            rounded={"full"}
                            fontSize={"0.75rem"}
                        >
                            Kebab
                        </Tag>
                        <Heading
                            color={"#352919"}
                            fontSize={["xs", "sm", "sm", "md", "md"]}
                        >
                            Special Sandwich Ayam
                        </Heading>
                    </Stack>
                    <Stack
                        direction={"row"}
                        justify={"space-between"}
                        w={"100%"}
                    >
                        <Heading
                            w={"100%"}
                            color={"#D59B70"}
                            fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                        >
                            35K
                        </Heading>
                        <Stack align={"center"} direction={"row"} w={"full"}>
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
                    </Stack>
                </Stack>
            </Stack>
            <InputGroup>
                <InputLeftElement>
                    <MdNotes />
                </InputLeftElement>
                <Input
                    rounded={"3xl"}
                    placeholder="*Opsional | Contoh: sangat pedas"
                ></Input>
            </InputGroup>
        </Stack>
    );
};

export default CartOrder;
