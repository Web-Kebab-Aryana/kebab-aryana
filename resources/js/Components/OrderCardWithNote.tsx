import {
    Button,
    Heading,
    Image,
    Input,
    Stack,
    Tag,
    Text,
} from "@chakra-ui/react";
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

const OrderCardWithNote = ({
    menu,
    onAdd,
    onNoteChange,
    qty,
}: {
    menu: Menu;
    qty: number;
    onAdd: (qty: number) => void;
    onNoteChange: (note: string) => void;
}) => {
    const [quantity, setQuantity] = useState<number>(qty);

    return (
        <>
            <Stack
                bgColor={"white"}
                borderRadius={"xl"}
                direction={["column", "column", "row", "row", "row"]}
                w={"full"}
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
                <Stack
                    direction={["column", "column", "row", "row", "row"]}
                    w={"full"}
                    justify={"space-between"}
                    align={"center"}
                >
                    <Stack>
                        <Tag
                            bgColor={"#D9D9D9"}
                            h={25}
                            color={"#35291950"}
                            rounded={"full"}
                            fontSize={["xs", "sm", "sm", "sm", "sm"]}
                            w={"fit-content"}
                        >
                            {menu.category}
                        </Tag>

                        <Heading
                            color={"#352919"}
                            fontSize={["sm", "sm", "sm", "md", "md"]}
                        >
                            {menu.name}
                        </Heading>
                    </Stack>
                    <Stack direction={"row"} gap={"4rem"}>
                        <Stack>
                            {/* quantity */}
                            <Stack
                                align={"center"}
                                direction={"row"}
                                justify={"space-between"}
                                w={"full"}
                            >
                                <Button
                                    bgColor={"white"}
                                    border={"1px solid #35291950"}
                                    size={["xs", "xs", "xs", "sm", "sm"]}
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
                                    onClick={() =>
                                        setQuantity((qty) => qty + 1)
                                    }
                                >
                                    <Text fontWeight={"bold"} color={"#352919"}>
                                        +
                                    </Text>
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Heading color={"#D59B70"} fontSize={"lg"}>
                                {kFormatter(menu.price)}
                            </Heading>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>

        //     {/* Right */}
        //     <Stack p={"1rem"} justifyContent={"space-between"} w={"full"}>
        //     <Stack flex={1}>
        //         <Stack
        //             direction={"row"}
        //             justifyContent={"space-between"}
        //             w={"full"}
        //         >
        //             <Tag
        //                 bgColor={"#D9D9D9"}
        //                 h={25}
        //                 color={"#35291950"}
        //                 rounded={"full"}
        //                 fontSize={["xs", "sm", "sm", "sm", "sm"]}
        //             >
        //                 {menu.category}
        //             </Tag>
        //             <Heading
        //                 color={"#D59B70"}
        //                 fontSize={["md", "md", "md", "md", "md"]}
        //             >
        //                 {kFormatter(menu.price)}
        //             </Heading>
        //         </Stack>
        //         {/* Name */}
        //         <Heading
        //             color={"#352919"}
        //             fontSize={["sm", "sm", "sm", "md", "md"]}
        //         >
        //             {menu.name}
        //         </Heading>
        //         <Text
        //             color={"#35291950"}
        //             fontSize={["xs", "xs", "xs", "sm", "sm"]}
        //         >
        //             {menu.description}
        //         </Text>
        //     </Stack>

        //     {/* Buttons */}
        //     <Stack
        //         align={"end"}
        //         direction={"row"}
        //         gap={3}
        //         justify={"space-between"}
        //     >
        //         <Stack align={"center"} direction={"row"}>
        //             <Button
        //                 bgColor={"white"}
        //                 border={"1px solid #35291950"}
        //                 size={["xs", "xs", "xs", "sm", "sm"]}
        //                 // borderRadius={"full"}
        //                 // w={"7rem"}
        //                 onClick={() =>
        //                     setQuantity((qty) =>
        //                         qty === 0 ? 0 : qty - 1
        //                     )
        //                 }
        //             >
        //                 <Text fontWeight={"bold"} color={"#352919"}>
        //                     -
        //                 </Text>
        //             </Button>
        //             <Text color={"#352919"}>{quantity}</Text>
        //             <Button
        //                 bgColor={"white"}
        //                 border={"1px solid #35291950"}
        //                 size={["xs", "xs", "xs", "sm", "sm"]}
        //                 // borderRadius={"full"}
        //                 // w={"7rem"}
        //                 onClick={() => setQuantity((qty) => qty + 1)}
        //             >
        //                 <Text fontWeight={"bold"} color={"#352919"}>
        //                     +
        //                 </Text>
        //             </Button>
        //         </Stack>
        //     </Stack>
        // </Stack>
    );
};

export default OrderCardWithNote;
