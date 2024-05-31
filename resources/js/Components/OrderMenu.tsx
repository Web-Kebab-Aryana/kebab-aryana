import {
    Box,
    Heading,
    Stack,
    Image,
    Text,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalFooter,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
} from "@chakra-ui/react";

import { useState } from "react";
import OrderCard from "./OrderCardHome";

const categories = ["All Menu", "Kebab", "Nasi", "Snack", "Minuman"];

type Menu = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const OrderMenu = ({ menus }: { menus: Menu[] }) => {
    const { onOpen, onClose, isOpen } = useDisclosure();

    const [selectedCategory, setSelectedCategory] =
        useState<string>("All Menu");
    const [step, setStep] = useState<number>(1);

    const filteredMenus = menus.filter(
        (menu) =>
            selectedCategory === "All Menu" ||
            menu.category === selectedCategory
    );

    return (
        <>
            <Stack
                direction={["column", "row", "row", "row", "row"]}
                bgColor={"#E7464E"}
                w={"100vw"}
                h={["26rem", "14rem", "16rem", "23rem", "23rem"]}
                py={"2rem"}
                px={["2rem", "1rem", "4rem", "4rem", "4rem"]}
                justify={"space-between"}
                align={["center", "center", "center", "center", "center"]}
                id="menu"
            >
                <Stack
                    justify={[
                        "start",
                        "space-evenly",
                        "space-evenly",
                        "space-evenly",
                        "space-evenly",
                    ]}
                    w={["100%", "25%", "25%", "25%", "25%"]}
                    h={"100%"}
                    gap={2}
                >
                    <Text
                        fontSize={["4xl", "lg", "3xl", "4xl", "5xl"]}
                        fontWeight={"semibold"}
                        textColor={"white"}
                    >
                        Have you tried our Best Seller?
                    </Text>
                    <Button
                        w={["8rem", "6rem", "8rem", "10rem", "12rem"]}
                        h={["2rem", "2rem", "2rem", "3rem", "3rem"]}
                        rounded={"full"}
                        bgColor={"#FDD039"}
                        textColor={"black"}
                        fontSize={["xs", "xs", "sm", "md", "lg"]}
                        onClick={onOpen}
                    >
                        Explore Menu
                    </Button>
                </Stack>
                <Stack
                    w={["55%", "22%", "22%", "22%", "22%"]}
                    h={"100%"}
                    bgImage={"url('/OrderMenu/kebab.png')"}
                    bgSize={"cover"}
                    bgRepeat={"no-repeat"}
                    objectFit={"cover"}
                >
                    <Stack
                        bgGradient="linear(to-b, transparent 60%, white 80%)"
                        h={"100%"}
                        align={"center"}
                        justify={"end"}
                        pb={["5%", "5%", "5%", "7%", "1.5rem"]}
                    >
                        <Text
                            fontSize={["xs", "xs", "sm", "lg", "xl"]}
                            fontWeight={"bold"}
                            textAlign={"center"}
                        >
                            Special Sandwich Ayam
                        </Text>
                    </Stack>
                </Stack>
                <Stack
                    w={["22%", "22%", "22%", "22%", "22%"]}
                    h={"100%"}
                    display={["none", "flex", "flex", "flex", "flex"]}
                    bgImage={"url('/OrderMenu/sandwich.png')"}
                    bgSize={"cover"}
                    bgRepeat={"no-repeat"}
                    objectFit={"fill"}
                >
                    <Stack
                        bgGradient="linear(to-b, transparent 60%, white 80%)"
                        h={"100%"}
                        align={"center"}
                        justify={"end"}
                        pb={["5%", "5%", "5%", "7%", "1.5rem"]}
                    >
                        <Text
                            fontSize={["xs", "xs", "sm", "lg", "xl"]}
                            fontWeight={"bold"}
                            textAlign={"center"}
                        >
                            Sandwich Ayam
                        </Text>
                    </Stack>
                </Stack>
                <Stack
                    w={["22%", "22%", "22%", "22%", "22%"]}
                    h={"100%"}
                    display={["none", "flex", "flex", "flex", "flex"]}
                    bgImage={"url('/OrderMenu/biryani.png')"}
                    bgSize={"cover"}
                    bgRepeat={"no-repeat"}
                    objectFit={"fill"}
                >
                    <Stack
                        bgGradient="linear(to-b, transparent 60%, white 80%)"
                        h={"100%"}
                        align={"center"}
                        justify={"end"}
                        pb={["5%", "5%", "5%", "7%", "1.5rem"]}
                    >
                        <Text
                            fontSize={["xs", "xs", "sm", "lg", "xl"]}
                            fontWeight={"bold"}
                            textAlign={"center"}
                        >
                            Nasi Biryani
                        </Text>
                    </Stack>
                </Stack>
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
                <ModalOverlay />
                <ModalContent m={"2rem"} rounded={"md"}>
                    <ModalHeader>Menus</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack direction={"row"} w={"100%"} flexWrap={"wrap"}>
                            {categories.map((cat) => (
                                <Button
                                    onClick={() => setSelectedCategory(cat)}
                                    key={cat}
                                    size={["sm", "sm", "xs", "sm", "sm"]}
                                    rounded={"3xl"}
                                    w={["6rem", "6rem", "4rem", "6rem", "6rem"]}
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

                        <Stack
                            direction={"row"}
                            w={"100%"}
                            flexWrap={"wrap"}
                            gap={"1rem"}
                            py={"2rem"}
                        >
                            {filteredMenus.map((menu) => (
                                <>
                                    <OrderCard key={menu.id} menu={menu} />
                                </>
                            ))}
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default OrderMenu;
