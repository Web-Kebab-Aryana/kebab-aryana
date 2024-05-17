import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import {
    Stack,
    Text,
    Button,
    IconButton,
    Link,
    Tooltip,
    Box,
    Heading,
} from "@chakra-ui/react";
import OrderCard from "@/Components/OrderCard";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { Link as InertiaLink } from "@inertiajs/react";
import { BiLeftArrowAlt } from "react-icons/bi";
import OrderCardWithNote from "@/Components/OrderCardWithNote";

type Menu = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

type Cart = {
    id: number;
    quantity: number;
    notes?: string;
};

const categories = ["All Menu", "Kebab", "Nasi", "Snack", "Minuman"];

export default function Order({
    auth,
    menus,
}: PageProps & {
    menus: Menu[];
}) {
    const [cart, setCart] = useState<Cart[]>([]);
    const [selectedCategory, setSelectedCategory] =
        useState<string>("All Menu");

    const [step, setStep] = useState<number>(1);

    const filteredMenus = menus.filter(
        (menu) =>
            selectedCategory === "All Menu" ||
            menu.category === selectedCategory
    );

    console.log(cart);

    return (
        <Stack
            bgColor={"#FFF7E4"}
            h={"100vh"}
            w={"100vw"}
            direction={"row"}
            overflow={"scroll"}
        >
            <Sidebar auth={auth}>
                {step === 1 && (
                    <>
                        {/* Menu */}
                        <Stack direction={"row"} w={"100%"} h={"100%"} gap={0}>
                            <Stack
                                flex={"2"}
                                rounded={"3xl"}
                                bgColor={"#F4F4F4"}
                                px={["1rem", "1rem", "1rem", "2rem", "2rem"]}
                            >
                                {/* menu bar */}
                                <Stack
                                    w={"100%"}
                                    py={"1rem"}
                                    direction={"row"}
                                    align={"center"}
                                    justify={"space-between"}
                                >
                                    <Stack w={"full"}>
                                        <Stack
                                            direction={"row"}
                                            w={"full"}
                                            justify={"space-between"}
                                        >
                                            <Text
                                                fontWeight={"bold"}
                                                fontSize={[
                                                    "3xl",
                                                    "3xl",
                                                    "2xl",
                                                    "3xl",
                                                    "3xl",
                                                ]}
                                                textColor={"#352919"}
                                            >
                                                Menu
                                            </Text>
                                            <Tooltip
                                                label={
                                                    cart.length === 0
                                                        ? "Cart is Empty"
                                                        : "View Cart"
                                                }
                                                rounded={"full"}
                                            >
                                                {cart.length === 0 ? (
                                                    <IconButton
                                                        size={"lg"}
                                                        aria-label="cart"
                                                        icon={
                                                            <FaCartPlus color="#ECB68E" />
                                                        }
                                                        rounded={"full"}
                                                        bgColor={"#352919"}
                                                    />
                                                ) : (
                                                    <Button
                                                        size={"lg"}
                                                        aria-label="cart"
                                                        rounded={"full"}
                                                        bgColor={"#352919"}
                                                        color={"#FFF7E4"}
                                                        p={0}
                                                        onClick={() =>
                                                            setStep(2)
                                                        }
                                                    >
                                                        {cart.reduce(
                                                            (acc, item) =>
                                                                acc +
                                                                item.quantity,
                                                            0
                                                        )}
                                                    </Button>
                                                )}
                                            </Tooltip>
                                        </Stack>
                                        <Stack
                                            direction={"row"}
                                            w={"100%"}
                                            flexWrap={"wrap"}
                                        >
                                            {categories.map((cat) => (
                                                <Button
                                                    onClick={() =>
                                                        setSelectedCategory(cat)
                                                    }
                                                    key={cat}
                                                    size={[
                                                        "sm",
                                                        "sm",
                                                        "xs",
                                                        "sm",
                                                        "sm",
                                                    ]}
                                                    rounded={"3xl"}
                                                    w={[
                                                        "6rem",
                                                        "6rem",
                                                        "4rem",
                                                        "6rem",
                                                        "6rem",
                                                    ]}
                                                    bgColor={
                                                        selectedCategory === cat
                                                            ? "#ECB68E"
                                                            : "#FFF7E4"
                                                    }
                                                    border={"1px solid #352919"}
                                                    _active={{
                                                        bgColor: "#ECB68E",
                                                    }}
                                                    _hover={{
                                                        bgColor: "#ECB68E",
                                                    }}
                                                >
                                                    {cat}
                                                </Button>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Stack>

                                {/* menu items */}
                                <Stack
                                    direction={"row"}
                                    flexWrap={"wrap"}
                                    justifyContent={"space-between"}
                                    overflow={"scroll"}
                                    mb={"3rem"}
                                >
                                    {filteredMenus.length > 0 ? (
                                        filteredMenus.map((menu) => (
                                            <OrderCard
                                                key={menu.id}
                                                menu={menu}
                                                onAdd={(qty) => {
                                                    const index =
                                                        cart.findIndex(
                                                            (item) =>
                                                                item.id ===
                                                                menu.id
                                                        );
                                                    if (index === -1) {
                                                        setCart([
                                                            ...cart,
                                                            {
                                                                id: menu.id,
                                                                quantity: qty,
                                                            },
                                                        ]);
                                                    } else {
                                                        const newCart = [
                                                            ...cart,
                                                        ];
                                                        newCart[
                                                            index
                                                        ].quantity += qty;
                                                        setCart(newCart);
                                                    }
                                                }}
                                            />
                                        ))
                                    ) : (
                                        <Text>
                                            No menus, add menu from{" "}
                                            <Link
                                                as={InertiaLink}
                                                href={"/cms/edit"}
                                                fontWeight={"bold"}
                                                textDecor={"underline"}
                                            >
                                                Edit Page
                                            </Link>
                                        </Text>
                                    )}
                                </Stack>
                            </Stack>
                        </Stack>
                    </>
                )}

                {step === 2 && (
                    <Stack
                        flex={1}
                        bgColor={"white"}
                        rounded={"3xl"}
                        mt={"1rem"}
                        p={["1rem", "1rem", "1rem", "2rem", "2rem"]}
                        gap={"1rem"}
                    >
                        <Stack gap={"1rem"}>
                            <Button
                                leftIcon={<BiLeftArrowAlt />}
                                rounded={"full"}
                                w={"fit-content"}
                                bgColor={"#352919"}
                                color={"white"}
                            >
                                Back to Menu
                            </Button>
                            <Heading size={"lg"}>Cart</Heading>
                        </Stack>

                        <Stack>
                            {cart.map((item) => (
                                <OrderCardWithNote
                                    key={item.id}
                                    menu={
                                        menus.find(
                                            (menu) => menu.id === item.id
                                        )!
                                    }
                                    qty={item.quantity}
                                    onNoteChange={(note) => {
                                        const index = cart.findIndex(
                                            (cartItem) =>
                                                cartItem.id === item.id
                                        );
                                        const newCart = [...cart];
                                        newCart[index].notes = note;
                                        setCart(newCart);
                                    }}
                                    onAdd={(qty) => {
                                        const index = cart.findIndex(
                                            (cartItem) =>
                                                cartItem.id === item.id
                                        );
                                        const newCart = [...cart];
                                        newCart[index].quantity = qty;
                                        setCart(newCart);
                                    }}
                                />
                            ))}
                        </Stack>
                    </Stack>
                )}
            </Sidebar>
        </Stack>
    );
}
