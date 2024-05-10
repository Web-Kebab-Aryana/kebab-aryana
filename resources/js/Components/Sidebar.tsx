import React from "react";
import { Image, Show, Hide, Stack, Button, Text } from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { MdOutlineHistory, MdEditSquare } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const DesktopLayout = () => {
    const specialButtons = [
        {
            label: "Dashboard",
            path: "/dashboard/toggles",
            icon: <BiSolidDashboard size={"1.5rem"} />,
        },
        {
            label: "Order",
            path: "/dashboard/verification",
            icon: <FaListUl size={"1.5rem"} />,
        },
        {
            label: "History",
            path: "/dashboard/history",
            icon: <MdOutlineHistory size={"1.5rem"} />,
        },
        {
            label: "Edit Page",
            path: "/dashboard/edit",
            icon: <MdEditSquare size={"1.5rem"} />,
        },
    ];

    const stateImageSize = {
        w: ["1rem", "1rem", "1.25rem", "1.75rem"],
    };

    const buttonResponsiveProps = {
        p: [3, 3, 3, 5],
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
                w={["20rem", "20rem", "15rem", "25rem"]}
                minH={"100vh"}
                bg={"white"}
                p={[5, 5, 8, 10]}
                alignItems={"center"}
                justifyContent={"space-between"}
                shadow={"lg"}
                pb={[6, 6, 6, 8]}
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
                        objectFit="cover"
                        src="/images/logoArayana.svg"
                        alt="Dan Abramov"
                        mb={["0.5rem", "0.5rem", "0.5rem", "1rem"]}
                    />
                    {specialButtons.map((button, index) => (
                        // <Link key={index} to={button.path}>
                        <Button
                            variant={"ghost"}
                            w={"full"}
                            justifyContent={"start"}
                            p={buttonResponsiveProps.p}
                            _hover={{
                                transform: "scale(1.05)",
                                color: "brand.maroon",
                                "> img": {
                                    opacity: 1,
                                    transition: "opacity 0.2s ease-in-out",
                                },
                                bgColor: "button.gray",
                            }}
                            transition={"transform 0.2s ease-in-out"}
                            // bgColor={
                            //   loc.pathname === button.path
                            //     ? "button.gray"
                            //     : "transparent"
                            // }
                            color={"#352919"}
                        >
                            <Stack
                                mr={"1rem"}

                                // w={buttonResponsiveProps.imageSize}
                            >
                                {button.icon}
                            </Stack>
                            <Text
                                fontSize={buttonResponsiveProps.fontSize}
                                //   fontWeight={
                                //     currentPath === button.path ? "semibold" : "medium"
                                //   }
                                //   color={
                                //     currentPath === button.path
                                //       ? "brand.maroon"
                                //       : "text.primary"
                                //   }
                            >
                                {button.label}
                            </Text>
                        </Button>
                        // {/* </Link> */}
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

const MobileLayout = () => {
    return (
        <div>
            Ini mobile layout
            <Image
                objectFit="cover"
                src="/images/logoArayana.svg"
                alt="Dan Abramov"
            />
        </div>
    );
};

const Sidebar = () => {
    return (
        <>
            <Show above="md">
                <DesktopLayout />
            </Show>
            <Hide above="md">
                <MobileLayout />
            </Hide>
        </>
    );
};

export default Sidebar;
