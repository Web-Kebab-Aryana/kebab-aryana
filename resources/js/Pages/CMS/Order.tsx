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
    Input,
    FormLabel,
    FormControl,
    FormErrorMessage,
    useToast,
} from "@chakra-ui/react";
import OrderCard from "@/Components/OrderCard";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { Link as InertiaLink, router } from "@inertiajs/react";
import { BiLeftArrowAlt } from "react-icons/bi";
import OrderCardWithNote from "@/Components/OrderCardWithNote";
import { useForm } from "react-hook-form";
import kFormatter from "@/Utils/kFormatter";
import { ResponseModel, useToastErrorHandler } from "@/Hooks/useApi";
import axios from "axios";

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

type NameForm = {
    customer_name: string;
};

export default function Order({
    auth,
    menus,
}: PageProps & {
    menus: Menu[];
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NameForm>();

    const toast = useToast();
    const errorHandler = useToastErrorHandler();

    const [cart, setCart] = useState<Cart[]>([]);
    const [selectedCategory, setSelectedCategory] =
        useState<string>("All Menu");
    const [step, setStep] = useState<number>(1);

    const filteredMenus = menus.filter(
        (menu) =>
            selectedCategory === "All Menu" ||
            menu.category === selectedCategory
    );

    return (
        <Stack
            bgColor={"#FFF7E4"}
            h={"100vh"}
            w={"100vw"}
            direction={"row"}
            overflow={"scroll"}
            mb={{ base: "15", sm: "15" }}
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
                        direction={"row"}
                        w={"full"}
                        flex={1}
                        flexWrap={"wrap"}
                        bgColor={"white"}
                        rounded={"3xl"}
                        mt={"1rem"}
                        p={["1rem", "1rem", "1rem", "2rem", "2rem"]}
                        gap={"5rem"}
                        mb={{ base: "3rem", md: 0 }}
                        overflow={"scroll"}
                    >
                        <Stack
                            w={[
                                "full",
                                "full",
                                "full",
                                "fit-content",
                                "fit-content",
                            ]}
                        >
                            <Stack gap={"1rem"}>
                                <Button
                                    leftIcon={<BiLeftArrowAlt />}
                                    rounded={"full"}
                                    w={"fit-content"}
                                    bgColor={"#352919"}
                                    color={"white"}
                                    onClick={() => setStep(1)}
                                >
                                    Back to Menu
                                </Button>
                                <Heading size={"lg"}>Cart</Heading>
                            </Stack>

                            <Stack>
                                {cart.length > 0 ? (
                                    cart.map((item) => (
                                        <OrderCardWithNote
                                            key={item.id}
                                            menu={
                                                menus.find(
                                                    (menu) =>
                                                        menu.id === item.id
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
                                            onDecrement={() => {
                                                const index = cart.findIndex(
                                                    (cartItem) =>
                                                        cartItem.id === item.id
                                                );
                                                if (
                                                    cart[index].quantity === 1
                                                ) {
                                                    const newCart = [...cart];
                                                    newCart.splice(index, 1);
                                                    setCart(newCart);
                                                } else {
                                                    const newCart = [...cart];
                                                    newCart[
                                                        index
                                                    ].quantity -= 1;
                                                    setCart(newCart);
                                                }
                                            }}
                                            onIncrement={() => {
                                                const index = cart.findIndex(
                                                    (cartItem) =>
                                                        cartItem.id === item.id
                                                );
                                                const newCart = [...cart];
                                                newCart[index].quantity += 1;
                                                setCart(newCart);
                                            }}
                                            notes={item.notes}
                                        />
                                    ))
                                ) : (
                                    <Text>Cart is Empty</Text>
                                )}
                            </Stack>
                        </Stack>
                        <Stack
                            as={"form"}
                            onSubmit={handleSubmit((data) => {
                                axios
                                    .post<ResponseModel>("/api/orders/", {
                                        customer_name: data.customer_name,
                                        menus: cart.map((item) => ({
                                            menu_id: item.id,
                                            quantity: item.quantity,
                                            notes: item.notes,
                                        })),
                                    })
                                    .then((res) => {
                                        toast({
                                            title: "Order Berhasil",
                                            description: res.data.message,
                                            status: "success",
                                            duration: 5000,
                                            isClosable: true,
                                        });

                                        router.visit("/cms/history");
                                    })
                                    .catch(errorHandler);
                            })}
                            bgColor={"#f5f5f5"}
                            flex={1}
                            gap={15}
                            h={"15rem"}
                            p={8}
                            rounded={"xl"}
                            mt={{ base: 0, lg: 10 }}
                        >
                            <FormControl isInvalid={!!errors.customer_name}>
                                <FormLabel
                                    color={"#352919"}
                                    fontWeight={"Bold"}
                                >
                                    Nama Pembeli
                                </FormLabel>
                                <Input
                                    {...register("customer_name", {
                                        required: true,
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Nama harus lebih dari 3 karakter",
                                        },
                                    })}
                                    placeholder={"* Wajib"}
                                    rounded={"full"}
                                    size={"sm"}
                                />
                                <FormErrorMessage>
                                    {errors.customer_name &&
                                        errors.customer_name.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Stack
                                direction={"row"}
                                gap={1}
                                justifyContent={"space-between"}
                                mt={2}
                            >
                                <Heading color={"#352919"} fontSize={"xl"}>
                                    TOTAL
                                </Heading>
                                <Heading color={"#d59b70"} fontSize={"xl"}>
                                    {kFormatter(
                                        cart.reduce(
                                            (acc, item) =>
                                                acc +
                                                item.quantity *
                                                    menus.find(
                                                        (menu) =>
                                                            menu.id === item.id
                                                    )!.price,
                                            0
                                        )
                                    )}
                                </Heading>
                            </Stack>
                            <Button
                                type="submit"
                                bgColor={"#352919"}
                                color={"#FFF7E4"}
                                rounded={"full"}
                            >
                                Order
                            </Button>
                        </Stack>
                    </Stack>
                )}
            </Sidebar>
        </Stack>
    );
}
