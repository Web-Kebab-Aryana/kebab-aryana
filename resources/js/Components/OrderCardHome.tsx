import { Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import kFormatter from "@/Utils/kFormatter";

type Menu = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const OrderCard = ({ menu }: { menu: Menu }) => {
    return (
        <>
            <Stack
                bgColor={"white"}
                borderRadius={"xl"}
                direction={["column", "column", "row", "row", "row"]}
                w={["full", "full", "28rem", "28rem", "28rem"]}
                gap={0}
                align={"center"}
                shadow={"md"}
            >
                <Image
                    src={`/storage/${menu.image}`}
                    alt={menu.name}
                    fit={"cover"}
                    w={["full", "16rem", "8rem", "10rem", "10rem"]}
                    h={["12rem", "12rem", "8rem", "10rem", "10rem"]}
                    m={["0", "0", "0.75rem", "0.75rem", "0.75rem"]}
                    p={["1rem", "0.75rem", "0", "0", "0"]}
                    rounded={"xl"}
                />

                {/* Right */}
                <Stack p={"1rem"} justifyContent={"space-between"} w={"full"}>
                    <Stack flex={1}>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            w={"full"}
                        >
                            <Tag
                                bgColor={"#D9D9D9"}
                                h={25}
                                color={"#35291950"}
                                rounded={"full"}
                                fontSize={["xs", "sm", "sm", "sm", "sm"]}
                            >
                                {menu.category}
                            </Tag>
                            <Heading
                                color={"#D59B70"}
                                fontSize={["sm", "sm", "sm", "md", "md"]}
                            >
                                {kFormatter(menu.price)}
                            </Heading>
                        </Stack>
                        {/* Name */}
                        <Heading
                            color={"#352919"}
                            fontSize={["sm", "sm", "sm", "md", "md"]}
                        >
                            {menu.name}
                        </Heading>
                        <Text
                            color={"#35291950"}
                            fontSize={["xs", "xs", "xs", "sm", "sm"]}
                        >
                            {menu.description}
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default OrderCard;
