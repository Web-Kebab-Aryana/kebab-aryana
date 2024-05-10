import React from "react";
import {
    Image,
    Show,
    Hide,
    Stack,
    Button,
    Text,
    Heading,
    MenuButton,
    Avatar,
    AvatarBadge,
    Menu,
    MenuList,
} from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { MdOutlineHistory, MdEditSquare } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { usePage, Link } from "@inertiajs/react";

const DesktopLayout = () => {
    // const currentPath = route().current();
    const { url } = usePage();

    const specialButtons = [
        {
            label: "Dashboard",
            path: "/dashboard",
            icon: <BiSolidDashboard size={"1.5rem"} />,
        },
        {
            label: "Order",
            path: "/order",
            icon: <FaListUl size={"1.5rem"} />,
        },
        {
            label: "History",
            path: "/history",
            icon: <MdOutlineHistory size={"1.5rem"} />,
        },
        {
            label: "Edit Page",
            path: "/edit",
            icon: <MdEditSquare size={"1.5rem"} />,
        },
    ];

    // const stateImageSize = {
    //     w: ["1rem", "1rem", "1.25rem", "1.75rem"],
    // };

    const buttonResponsiveProps = {
        p: [3, 3, 3, 5],
        p2: [4, 4, 6, 6],
        fontSize: ["0.75rem", "0.75rem", "0.85rem", "1rem"],
        imageSize: ["0.75rem", "0.75rem", "0.85rem", "1rem"],
    };

    return (
        <Stack
            flex={1}
            gap={0}
            direction={"row"}
            overflowX={"hidden"}
            overflowY={"hidden"}
        >
            <Stack
                w={["20rem", "20rem", "15rem", "20rem"]}
                minH={"100vh"}
                bg={"white"}
                // p={[5, 5, 8, 10]}
                alignItems={"center"}
                justifyContent={"space-between"}
                shadow={"lg"}
                pt={[6, 6, 6, 6]}
                pb={[6, 6, 8, 12]}
                borderRightRadius={"2.5rem"}
            >
                {/* <Stack w={"full"}>
            {/* Heading */}
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"full"}
                    mt={["1rem", "1rem", "1rem", "2rem"]}
                    gap={["0.5rem", "0.5rem", "0.5rem", "0.75rem"]}
                >
                    <Image
                        w={["5rem", "6rem", "8rem", "10rem"]}
                        src="/images/logoArayana.svg"
                        alt="Kebab Aryana"
                        mb={["0.5rem", "0.75rem", "1rem", "1.5rem"]}
                    />
                    {specialButtons.map((button, index) => (
                        <Stack w={"full"} pl={"2rem"}>
                            <Link
                                href={button.path}
                                key={index}
                                as="button"
                                type="button"
                            >
                                <Button
                                    type="button"
                                    variant={"ghost"}
                                    w={"full"}
                                    justifyContent={"start"}
                                    p={buttonResponsiveProps.p2}
                                    _hover={{
                                        transform: "scale(1.05)",
                                        color: "#352919",
                                        "> img": {
                                            opacity: 1,
                                            transition:
                                                "opacity 0.2s ease-in-out",
                                        },
                                        bgColor: "#FFF7E4",
                                    }}
                                    transition={"transform 0.2s ease-in-out"}
                                    bgColor={
                                        url === button.path
                                            ? "#FFF7E4"
                                            : "transparent"
                                    }
                                    color={"#35291950"}
                                >
                                    <Stack
                                        mr={"1rem"}
                                        color={
                                            url === button.path
                                                ? "#352919"
                                                : "#35291950"
                                        }
                                    >
                                        {button.icon}
                                    </Stack>
                                    <Text
                                        fontSize={
                                            buttonResponsiveProps.fontSize
                                        }
                                        fontWeight={
                                            url === button.path
                                                ? "semibold"
                                                : "medium"
                                        }
                                        color={
                                            url === button.path
                                                ? "#352919"
                                                : "#35291950"
                                        }
                                    >
                                        {button.label}
                                    </Text>
                                </Button>
                            </Link>
                        </Stack>
                    ))}
                </Stack>
                <Stack>
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        type="button"
                    >
                        <Button
                            type="button"
                            color={"#AB2937"}
                            variant={"ghost"}
                            fontWeight={"bold"}
                            bgColor={"#FFF7E4"}
                            w={"full"}
                            justifyContent={"start"}
                            borderRadius={"1rem"}
                            p={buttonResponsiveProps.p2}
                            px={["5", "5", "10", "12"]}
                            _hover={{
                                transform: "scale(1.05)",
                                "> img": {
                                    opacity: 1,
                                    transition: "opacity 0.2s ease-in-out",
                                },
                                bgColor: "button.gray",
                            }}
                            transition={"transform 0.2s ease-in-out"}
                        >
                            <TbLogout2 size={"1.5rem"} />
                            <Text
                                ml={"1rem"}
                                fontWeight={"bold"}
                                fontSize={buttonResponsiveProps.fontSize}
                            >
                                Log Out
                            </Text>
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

const MobileLayout = () => {
    const { url } = usePage();

    const specialButtons = [
        {
            label: "Dashboard",
            path: "/dashboard",
            icon: <BiSolidDashboard size={"1.5rem"} />,
        },
        {
            label: "Order",
            path: "/order",
            icon: <FaListUl size={"1.5rem"} />,
        },
        {
            label: "History",
            path: "/history",
            icon: <MdOutlineHistory size={"1.5rem"} />,
        },
        {
            label: "Edit Page",
            path: "/edit",
            icon: <MdEditSquare size={"1.5rem"} />,
        },
    ];

    const buttonResponsiveProps = {
        p: [3, 3, 3, 5],
        p2: [4, 4, 6, 6],
        fontSize: ["0.75rem", "0.75rem", "0.85rem", "1rem"],
        imageSize: ["0.75rem", "0.75rem", "0.85rem", "1rem"],
    };

    const currentPageName =
        url === "/dashboard"
            ? "Dashboard"
            : url === "/order"
            ? "Order"
            : url === "/history"
            ? "History"
            : url === "/edit"
            ? "Edit Page"
            : "Unknown Page";

    return (
        <Stack>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                bg="white"
                boxShadow="md"
                zIndex={10}
                position="fixed"
                width={"100%"}
                p={3}
                px={5}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Image
                        src="/images/logoArayana.svg"
                        w={["4.5rem", "4.5rem", "1.25rem", "1.5rem"]}
                        mr={["0.5rem", "0.5rem", "0.5rem", "1rem"]}
                        alt="Logo Aryana"
                    />
                    <Heading color={"#AB2937"} fontSize={"0.8rem"}>
                        {currentPageName}
                    </Heading>
                </Stack>
                <Menu>
                    <MenuButton>
                        <Avatar
                            w={["2rem", "2rem", "2rem", "3rem"]}
                            mr={"0.5rem"}
                            h={"auto"}
                        >
                            <AvatarBadge
                                boxSize={["1rem", "1rem", "1rem", "1.25rem"]}
                                bg="green.500"
                            />
                        </Avatar>
                    </MenuButton>
                    <MenuList borderRadius={"xl"} shadow={"lg"}>
                        <Stack
                            justifyContent={"center"}
                            alignItems={"start"}
                            ml={"0.5rem"}
                            mr={"0.5rem"}
                            gap={0}
                        >
                            <Text
                                fontSize={[
                                    "0.9rem",
                                    "0.9rem",
                                    "0.95rem",
                                    "1rem",
                                ]}
                                fontWeight={"bold"}
                                color={"text.primary"}
                            >
                                Muhammad
                            </Text>
                            <Text
                                fontSize={[
                                    "0.8rem",
                                    "0.8rem",
                                    "0.8rem",
                                    "0.85rem",
                                ]}
                                fontWeight={"medium"}
                                opacity={"0.75"}
                                color={"text.primary"}
                            >
                                CEO & Head Chef
                            </Text>
                            <Stack w={"full"}>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    type="button"
                                >
                                    <Button
                                        type="button"
                                        mt={2}
                                        bg={"#AB2937"}
                                        p={2}
                                        py={0}
                                        fontSize={[
                                            "0.8rem",
                                            "0.8rem",
                                            "0.85rem",
                                            "1rem",
                                        ]}
                                        borderRadius={"xl"}
                                        color={"white"}
                                        fontWeight={"bold"}
                                        gap={2}
                                        w={"full"}
                                        justifyContent={"center"}
                                    >
                                        <TbLogout2
                                            color="white"
                                            fontSize={"1.25rem"}
                                            fontWeight={"bold"}
                                        />
                                        Log Out
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </MenuList>
                </Menu>
            </Stack>
            {/* Content */}
            <Stack minH={"100vh"} minW={"100vw"} gap={0} pb={"4rem"}>
                <Stack p={25} pt={75} gap={"1rem"} flex={1}>
                    Ini mobile layout
                </Stack>
            </Stack>
            {/* Bottom Bar */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={"space-between"}
                p={3}
                px={4}
                bg="white"
                boxShadow="md"
                zIndex={10}
                position="fixed"
                bottom={0}
                width="full"
                shadow={"bottomOutline"}
            >
                {specialButtons.map((button, index) => (
                    <Stack direction={"row"}>
                        <Link
                            href={button.path}
                            key={index}
                            as="button"
                            type="button"
                        >
                            <Button
                                type="button"
                                variant={"ghost"}
                                w={"full"}
                                justifyContent={"start"}
                                _hover={{
                                    transform: "scale(1.05)",
                                    color: "#352919",
                                    "> img": {
                                        opacity: 1,
                                        transition: "opacity 0.2s ease-in-out",
                                    },
                                }}
                                transition={"transform 0.2s ease-in-out"}
                                color={"#35291950"}
                                flexDirection={"column"}
                                gap={1}
                            >
                                <Stack
                                    color={
                                        url === button.path
                                            ? "#352919"
                                            : "#35291950"
                                    }
                                >
                                    {button.icon}
                                </Stack>
                                <Text
                                    fontSize={buttonResponsiveProps.fontSize}
                                    fontWeight={
                                        url === button.path
                                            ? "semibold"
                                            : "medium"
                                    }
                                    color={
                                        url === button.path
                                            ? "#352919"
                                            : "#35291950"
                                    }
                                >
                                    {button.label}
                                </Text>
                            </Button>
                        </Link>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

const Sidebar = () => {
    return (
        <>
            <Show above="md">
                <Stack direction={"row"}>
                    <DesktopLayout />
                    <Text>Halo Ini Desktop Layout</Text>
                </Stack>
            </Show>
            <Hide above="md">
                <Stack direction={"row"}>
                    <MobileLayout />
                </Stack>
            </Hide>
        </>
    );
};

export default Sidebar;
