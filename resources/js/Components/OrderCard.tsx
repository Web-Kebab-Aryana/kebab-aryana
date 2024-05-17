import { Button, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";

type Menu = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

function kFormatter(num: number) {
    return Math.abs(num) > 999
        ? // @ts-expect-error bacot
          Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
        : Math.sign(num) * Math.abs(num);
}

const OrderCard = ({
    menu,
    onAdd,
}: {
    menu: Menu;
    onAdd: (qty: number) => void;
}) => {
    const [quantity, setQuantity] = useState<number>(0);

    return (
        <>
            <Stack
                bgColor={"white"}
                borderRadius={"xl"}
                direction={["column", "column", "row", "row", "row"]}
                w={["full", "full", "28rem", "28rem", "28rem"]}
                gap={0}
                align={"center"}
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
                                onClick={() =>
                                    setQuantity((qty) =>
                                        qty === 0 ? 0 : qty - 1
                                    )
                                }
                            >
                                <Text fontWeight={"bold"} color={"#352919"}>
                                    -
                                </Text>
                            </Button>
                            <Text color={"#352919"}>{quantity}</Text>
                            <Button
                                bgColor={"white"}
                                border={"1px solid #35291950"}
                                size={["xs", "xs", "xs", "sm", "sm"]}
                                // borderRadius={"full"}
                                // w={"7rem"}
                                onClick={() => setQuantity((qty) => qty + 1)}
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
                            onClick={() => onAdd(quantity)}
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
