import { Heading, Stack, Image, Text, Button, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa6";

type Review = {
    phoneNumber: string;
};

const OurReview = ({ phoneNumber }: Review) => {
    return (
        <Stack
            bgGradient="linear(to-b, #FDD03975, #FFFFFF)"
            mb={10}
            // alignItems={"center"}
            id="review"
        >
            <Stack align={"center"} justify={"center"} my={10}>
                <Heading color={"#E7464E"}>Our Reviews</Heading>
            </Stack>
            {/* BOX REVIEWS */}
            <Stack flex={1} alignItems={"center"}>
                <Stack
                    // flex={1}
                    direction={"row"}
                    // justify={"center"}
                    justifyContent={"start"}
                    gap={{ base: 5, sm: 10 }}
                    // flexWrap={"wrap"}
                    overflowX={{ base: "scroll", lg: "hidden" }}
                    // bgColor={"red"}
                    w={{ base: "75%", lg: "auto" }}
                >
                    <Stack
                        bgColor={"white"}
                        borderRadius={"3xl"}
                        minW={{ base: "12.5rem", md: "25rem" }}
                        maxW={{ base: "15rem", md: "25rem" }}
                        // maxH={"30rem"}
                        p={7}
                        // boxShadow={"2xl"}
                    >
                        {/* PROFILE */}
                        <Stack
                            direction={"row"}
                            mb={6}
                            align={"center"}
                            gap={3}
                        >
                            <Image
                                src="/profile/MaleC1.png"
                                w={30}
                                borderRadius={"full"}
                            ></Image>
                            <Text fontWeight={"bold"}>Aghitya Nugraha</Text>
                        </Stack>
                        {/* TEXT REVIEW */}
                        <Text>
                            This kebab was good, I will give you extra score
                            another kebab is very bad i will deduct their score.
                        </Text>
                    </Stack>

                    <Stack
                        bgColor={"white"}
                        borderRadius={"3xl"}
                        minW={{ base: "12.5rem", md: "25rem" }}
                        maxW={{ base: "15rem", md: "25rem" }}
                        maxH={"37.5rem"}
                        p={7}
                        // boxShadow={"2xl"}
                    >
                        {/* PROFILE */}
                        <Stack
                            direction={"row"}
                            mb={6}
                            align={"center"}
                            gap={3}
                        >
                            <Image
                                src="/profile/FemaleC1.png"
                                w={30}
                                borderRadius={"full"}
                            ></Image>
                            <Text fontWeight={"bold"}>Indah Basudara</Text>
                        </Stack>
                        {/* TEXT REVIEW */}
                        <Text>
                            Kata Ilham, kebabnya enak banget, saya suka banget!
                            Kalian wajib coba!
                        </Text>
                    </Stack>

                    <Stack
                        bgColor={"white"}
                        borderRadius={"3xl"}
                        minW={{ base: "12.5rem", md: "25rem" }}
                        maxW={{ base: "15rem", md: "25rem" }}
                        maxH={"37.5rem"}
                        p={7}
                        // boxShadow={"2xl"}
                    >
                        {/* PROFILE */}
                        <Stack
                            direction={"row"}
                            mb={6}
                            align={"center"}
                            gap={3}
                        >
                            <Image
                                src="/profile/FemaleC2.png"
                                w={30}
                                borderRadius={"full"}
                            ></Image>
                            <Text fontWeight={"bold"}>Marion Zigiro</Text>
                        </Stack>
                        {/* TEXT REVIEW */}
                        <Text>
                            Pokoknya enak banget, pasti bakal kesini lagi.
                            Kebabnya top lah! Teman Malaysia saya aja suka
                            banget!
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                mt={20}
                align={"center"}
                justify={"center"}
                direction={"row"}
                flex={1}
            >
                <Stack
                    bgColor={"#FDD039"}
                    borderRadius={"3xl"}
                    p={{ base: 8, md: 10 }}
                    w={["85%", "30rem", "40rem", "75rem"]}
                    direction={{ base: "column", md: "row" }}
                    pos={"relative"}
                >
                    <Stack flex={1}>
                        <Heading
                            fontWeight={"regular"}
                            size={{ base: "medium", md: "xl" }}
                        >
                            How does the kebab taste?
                        </Heading>
                        <Heading
                            fontWeight={"bold"}
                            size={{ base: "lg", md: "xl" }}
                            mb={{ base: 9, sm: 0 }}
                        >
                            Isn't it good?
                        </Heading>
                        <Button
                            mt={8}
                            bgColor={"#E7464E"}
                            color={"white"}
                            borderRadius={"full"}
                            w={"10rem"}
                            _hover={{ bgColor: "#b22b39" }}
                            transition={"0.25s"}
                        >
                            Write a Review
                        </Button>
                    </Stack>
                    <Stack flex={1}>
                        <Image
                            src="/profile/kebabReview.png"
                            pos={"absolute"}
                            w={["45%", "10rem", "25rem", "35rem", "35rem"]}
                            top={["20%", "0", "-1.5rem", "-3.5rem"]}
                            right={["-1rem", "0", "-3rem", "0"]}
                            mt={{ base: 5, sm: 0 }}
                        ></Image>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                direction={"row"}
                mx={["3rem", "7rem", "", "", "8rem"]}
                py={"2rem"}
                align={"center"}
            >
                <Text fontSize={"1.5rem"}>Feel free to </Text>
                <Button
                    as={Link}
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    leftIcon={<FaWhatsapp />}
                    bgColor={"#FDD039"}
                    _hover={{
                        bgColor: "#D8B235",
                    }}
                    rounded={"full"}
                >
                    Contact Us
                </Button>
            </Stack>
        </Stack>
    );
};

export default OurReview;
