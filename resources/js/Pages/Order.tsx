import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import {
    Stack,
    Text,
    Button,
    Input,
    Image,
    Badge,
    IconButton,
} from "@chakra-ui/react";
import OrderCard from "@/Components/OrderCard";
import CartOrder from "@/Components/CartOrder";
import { FaCartPlus } from "react-icons/fa";
import { BiLeftArrowAlt } from "react-icons/bi";

const DesktopContent = () => {
    return (
        <>
            {/* Menu */}
            <Stack direction={"row"} w={"100%"} h={"100%"} gap={0}>
                <Stack
                    flex={"2"}
                    rounded={"3xl"}
                    bgColor={"#F4F4F4"}
                    px={["1rem", "1rem", "1rem", "2.5rem", "2.5rem"]}
                    w={"100%"}
                    h={"100%"}
                >
                    {/* menu bar */}
                    <Stack
                        h={"7rem"}
                        w={"100%"}
                        py={"4rem"}
                        direction={"row"}
                        align={"center"}
                        justify={"space-between"}
                    >
                        <Stack>
                            <Text
                                fontWeight={"bold"}
                                fontSize={["3xl", "3xl", "2xl", "3xl", "3xl"]}
                                textColor={"#352919"}
                            >
                                Menu
                            </Text>
                            <Stack
                                direction={"row"}
                                w={"100%"}
                                flexWrap={"wrap"}
                            >
                                <Button
                                    size={["sm", "sm", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    All Menu
                                </Button>
                                <Button
                                    size={["sm", "sm", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Kebab
                                </Button>
                                <Button
                                    size={["sm", "sm", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Nasi
                                </Button>
                                <Button
                                    size={["sm", "sm", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Snack
                                </Button>
                                <Button
                                    size={["sm", "sm", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Minuman
                                </Button>
                                {/* <Input
                            w={"12rem"}
                            placeholder="Search items here"
                            border={"1px solid #352919"}
                            rounded={"3xl"}
                            size={"sm"}
                        ></Input> */}
                            </Stack>
                        </Stack>
                        <IconButton
                            size={"lg"}
                            aria-label="cart"
                            icon={<FaCartPlus color="#ECB68E" />}
                            rounded={"full"}
                            bgColor={"#352919"}
                        ></IconButton>
                    </Stack>

                    {/* menu items */}
                    <Stack
                        direction={"row"}
                        flexWrap={"wrap"}
                        justifyContent={"space-between"}
                    >
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                    </Stack>
                </Stack>
            </Stack>
            {/* Cart */}
            {/* <Stack
                flex={"2"}
                direction={["column"]}
                rounded={"3xl"}
                bgColor={"white"}
                px={["1rem", "1rem", "1rem", "1rem", "2.5rem"]}
                justify={["start", "space-between", null, null, null]}
                py={"2rem"}
                h={"100%"}
            >
                <Button
                    ml={"1rem"}
                    w={"12rem"}
                    py={"1rem"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    size={"sm"}
                    rounded={"3xl"}
                    bgColor={"#352919"}
                    textColor={"white"}
                    fontWeight={"light"}
                    leftIcon={<BiLeftArrowAlt size={"2rem"} />}
                >
                    Back to Menu
                </Button>
                <Stack
                    w={"100%"}
                    h={"100%"}
                    pt={"1rem"}
                    direction={["column", "column", "column", "row", "row"]}
                    align={"start"}
                >
                    <Stack w={"100%"} justify={"space-between"}>
                        <CartOrder />
                        <CartOrder />
                    </Stack>
                    <Stack
                        w={["100%", "100%", "100%", "30rem", "30rem"]}
                        h={"18rem"}
                        bgColor={"rgba(217, 217, 217, 0.2)"}
                        rounded={"3xl"}
                        px={"2rem"}
                        py={"3rem"}
                        justify={"space-between"}
                    >
                        <Stack>
                            <Text
                                textColor={"#352919"}
                                fontWeight={"extrabold"}
                                fontSize={"lg"}
                            >
                                Nama Pembeli
                            </Text>
                            <Input placeholder="*Wajib" rounded={"3xl"}></Input>
                        </Stack>
                        <Stack>
                            <Stack direction={"row"} justify={"space-between"}>
                                <Text
                                    textColor={"#352919"}
                                    fontSize={"2xl"}
                                    fontWeight={"extrabold"}
                                >
                                    Total
                                </Text>
                                <Text
                                    textColor={"#D59B70"}
                                    fontSize={"2xl"}
                                    fontWeight={"extrabold"}
                                >
                                    108K
                                </Text>
                            </Stack>
                            <Button
                                bgColor={"#352919"}
                                textColor={"#FEF6E3"}
                                rounded={"3xl"}
                            >
                                Order
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack> */}
        </>
    );
};

const MobileContent = () => {
    return (
        <>
            {/* Menu */}
            <Stack direction={"row"} w={"100%"} h={"100%"} gap={0}>
                <Stack
                    flex={"2"}
                    rounded={"3xl"}
                    bgColor={"#F4F4F4"}
                    px={["1rem", "1rem", "1rem", "2.5rem", "2.5rem"]}
                    w={"100%"}
                    h={"100%"}
                >
                    {/* menu bar */}
                    <Stack
                        h={"9rem"}
                        w={"100%"}
                        py={"4rem"}
                        direction={"row"}
                        align={"center"}
                        justify={"space-between"}
                    >
                        <Stack>
                            <Text
                                fontWeight={"bold"}
                                fontSize={["3xl", "3xl", "2xl", "3xl", "3xl"]}
                                textColor={"#352919"}
                            >
                                Menu
                            </Text>
                            <Stack
                                direction={"row"}
                                w={"100%"}
                                flexWrap={"wrap"}
                            >
                                <Button
                                    size={["xs", "xs", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    All Menu
                                </Button>
                                <Button
                                    size={["xs", "xs", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Kebab
                                </Button>
                                <Button
                                    size={["xs", "xs", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Nasi
                                </Button>
                                <Button
                                    size={["xs", "xs", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Snack
                                </Button>
                                <Button
                                    size={["xs", "xs", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
                                    bgColor={"#D9D9D9"}
                                    border={"1px solid #352919"}
                                    _active={{ bgColor: "#ECB68E" }}
                                    _hover={{ bgColor: "#ECB68E" }}
                                >
                                    Minuman
                                </Button>
                                {/* <Input
                            w={"12rem"}
                            placeholder="Search items here"
                            border={"1px solid #352919"}
                            rounded={"3xl"}
                            size={"sm"}
                        ></Input> */}
                            </Stack>
                        </Stack>
                        <IconButton
                            size={"lg"}
                            aria-label="cart"
                            icon={<FaCartPlus color="#ECB68E" />}
                            rounded={"full"}
                            bgColor={"#352919"}
                        ></IconButton>
                    </Stack>

                    {/* menu items */}
                    <Stack
                        direction={"row"}
                        flexWrap={"wrap"}
                        justifyContent={"space-between"}
                    >
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                    </Stack>
                </Stack>
            </Stack>
            {/* Cart */}
            {/* <Stack
                flex={"2"}
                direction={["column"]}
                rounded={"3xl"}
                bgColor={"white"}
                px={["1rem", "1rem", "1rem", "1rem", "2.5rem"]}
                justify={["start", "space-between", null, null, null]}
                py={"2rem"}
                h={"100%"}
            >
                <Button
                    ml={"1rem"}
                    w={"12rem"}
                    py={"1rem"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    size={"sm"}
                    rounded={"3xl"}
                    bgColor={"#352919"}
                    textColor={"white"}
                    fontWeight={"light"}
                    leftIcon={<BiLeftArrowAlt size={"2rem"} />}
                >
                    Back to Menu
                </Button>
                <Stack
                    w={"100%"}
                    h={"100%"}
                    pt={"1rem"}
                    direction={["column", "column", "column", "row", "row"]}
                    align={"start"}
                >
                    <Stack w={"100%"} justify={"space-between"}>
                        <CartOrder />
                        <CartOrder />
                    </Stack>
                    <Stack
                        w={["100%", "100%", "100%", "30rem", "30rem"]}
                        h={"18rem"}
                        bgColor={"rgba(217, 217, 217, 0.2)"}
                        rounded={"3xl"}
                        px={"2rem"}
                        py={"3rem"}
                        justify={"space-between"}
                    >
                        <Stack>
                            <Text
                                textColor={"#352919"}
                                fontWeight={"extrabold"}
                                fontSize={"lg"}
                            >
                                Nama Pembeli
                            </Text>
                            <Input placeholder="*Wajib" rounded={"3xl"}></Input>
                        </Stack>
                        <Stack>
                            <Stack direction={"row"} justify={"space-between"}>
                                <Text
                                    textColor={"#352919"}
                                    fontSize={"2xl"}
                                    fontWeight={"extrabold"}
                                >
                                    Total
                                </Text>
                                <Text
                                    textColor={"#D59B70"}
                                    fontSize={"2xl"}
                                    fontWeight={"extrabold"}
                                >
                                    108K
                                </Text>
                            </Stack>
                            <Button
                                bgColor={"#352919"}
                                textColor={"#FEF6E3"}
                                rounded={"3xl"}
                            >
                                Order
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack> */}
        </>
    );
};

export default function Order({ auth }: PageProps) {
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
        <Stack bgColor={"#FFF7E4"} h={"100vh"} w={"100vw"} direction={"row"}>
            <Sidebar
                desktopProps={{ contentComponent: <DesktopContent /> }}
                mobileProps={{ contentComponent: <MobileContent /> }}
            />
        </Stack>
    );
}
