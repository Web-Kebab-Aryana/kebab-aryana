import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
    Button,
    Image,
    Input,
    Stack,
    Text,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Show,
    useToast,
    Link,
} from "@chakra-ui/react";

import { Link as InertiaLink, Head, router } from "@inertiajs/react";

import { BsArrowUpRightCircle } from "react-icons/bs";
import axios from "axios";
import { useToastErrorHandler } from "@/Hooks/useApi";
import { PageProps } from "@/types";
import ReCAPTCHA from "react-google-recaptcha";

interface IFormInput {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    recaptcha: string;
}

const Register = ({ recaptcha_site_key }: PageProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm<IFormInput>();

    const toast = useToast();
    const errorHandler = useToastErrorHandler();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        axios
            .post("/register", data)
            .then((res) => {
                toast({
                    title: "Success",
                    description: "Berhasil membuat akun",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });

                router.visit("/login");
            })
            .catch(errorHandler);
    };

    return (
        <>
            <Head title="Sign Up" />
            <Stack
                direction={["column", "column", "row", "row", "row"]}
                minW={"100vw"}
                minH={"100vh"}
                gap={"0"}
                // h={["50vh", "50vh", "auto"]}
            >
                <Stack
                    bgColor={"#FFE5A6"}
                    flex={["7", "7", "1"]}
                    gap={"0"}
                    h={"auto"}
                >
                    <Stack flex={["7", "7", "1"]}>
                        <Image
                            src="/imagesLoginPage/logoAryanaKebab.svg"
                            alt="logo-kebab"
                            boxSize={[
                                "5.5rem",
                                "7rem",
                                "7.5rem",
                                "9rem",
                                "11rem",
                            ]}
                            marginBottom={"-1rem"}
                            marginLeft={["2rem", "4rem", "4.6rem", "5.2rem"]}
                            marginTop={["1.5rem", "1rem", "2.99rem", "3rem"]}
                        />
                        <Stack
                            gap={"0"}
                            flex={"1"}
                            marginLeft={["2rem", "4rem", "4.6rem", "5.2rem"]}
                        >
                            <Text
                                fontSize={[
                                    "1.2rem",
                                    "1.6rem",
                                    "1.2rem",
                                    "1.4rem",
                                    "1.68rem",
                                ]}
                                fontWeight={"900"}
                            >
                                Make your account
                            </Text>
                            <Text
                                fontSize={[
                                    "0.8rem",
                                    "1.05rem",
                                    "0.89rem",
                                    "1.027rem",
                                    "1.25rem",
                                ]}
                            >
                                Register an account to log in
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack
                        flex={"1"}
                        justifyContent={"center"}
                        pb={["2rem", "4rem"]}
                        pt={["0rem", "0rem", "17rem"]}
                    >
                        <Button
                            as={InertiaLink}
                            href="/"
                            marginTop={"2.8rem"}
                            height={["2rem", "2.6rem"]}
                            bgColor={"#352919"}
                            _hover={{ bg: "#352919" }}
                            fontWeight={"100"}
                            textAlign={"center"}
                            marginLeft={["2rem", "4rem", "4.6rem", "5.2rem"]}
                            color={"#FFE4A6"}
                            justifyContent={"space-between"}
                            gap={["0rem", "1rem"]}
                            paddingLeft={["1rem", "2rem"]}
                            variant={"solid"}
                            width={["10rem", "14.7rem"]}
                            borderRadius={"8rem"}
                            fontSize={["0.7rem", "1rem"]}
                        >
                            Check your website
                            <Stack width={["1rem", "2rem"]}>
                                <Show above="md">
                                    <BsArrowUpRightCircle
                                        color="#FFE4A6"
                                        size={"2rem"}
                                    />
                                </Show>
                                <Show below="md">
                                    <BsArrowUpRightCircle
                                        color="#FFE4A6"
                                        size={"1.3rem"}
                                    />
                                </Show>
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>
                <Stack
                    flex={"1"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    pt={["2rem", "4rem"]}
                    pb={["3rem"]}
                    px={"4rem"}
                >
                    <Show above="md">
                        <Text
                            fontWeight={"bold"}
                            fontSize={[
                                "0",
                                "0",
                                "1.19rem",
                                "1.4rem",
                                "1.59rem",
                            ]}
                            marginBottom={"2rem"}
                        >
                            Sign Up
                        </Text>
                    </Show>

                    <Stack
                        as={"form"}
                        onSubmit={handleSubmit(onSubmit)}
                        justifyContent={"center"}
                        alignItems={"center"}
                        w={"full"}
                        h={"full"}
                        gap={"1rem"}
                    >
                        <FormControl isInvalid={!!errors.name}>
                            <FormLabel
                                htmlFor="name"
                                fontWeight={"bold"}
                                fontSize={["1rem"]}
                            >
                                Name
                            </FormLabel>
                            <Input
                                id="name"
                                bgColor={"#F8F8F8"}
                                borderColor={"#352919"}
                                _hover={{ borderColor: "#352919" }}
                                focusBorderColor="#352919"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 4,
                                        message: "name at least 4 characters",
                                    },
                                })}
                            />
                            <FormErrorMessage fontSize={"0.9rem"}>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!errors.email}>
                            <FormLabel
                                htmlFor="email"
                                fontWeight={"bold"}
                                fontSize={["1rem"]}
                            >
                                Email
                            </FormLabel>
                            <Input
                                id="email"
                                bgColor={"#F8F8F8"}
                                borderColor={"#352919"}
                                _hover={{ borderColor: "#352919" }}
                                focusBorderColor="#352919"
                                type="email"
                                {...register("email", {
                                    required: "email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            <FormErrorMessage fontSize={"0.9rem"}>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!errors.password}>
                            <FormLabel htmlFor="password" fontWeight={"bold"}>
                                Password
                            </FormLabel>
                            <Input
                                id="password"
                                type="password"
                                bgColor={"#F8F8F8"}
                                borderColor={"#352919"}
                                _hover={{ borderColor: "#352919" }}
                                focusBorderColor="#352919"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password at least 8 characters",
                                    },
                                })}
                            />
                            <FormErrorMessage
                                fontSize={"0.9rem"}
                                m={"0"}
                                p={"0"}
                            >
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!errors.password_confirmation}>
                            <FormLabel
                                htmlFor="password_confirmation"
                                fontWeight={"bold"}
                            >
                                Confirm Password
                            </FormLabel>
                            <Input
                                id="password_confirmation"
                                type="password"
                                bgColor={"#F8F8F8"}
                                borderColor={"#352919"}
                                _hover={{ borderColor: "#352919" }}
                                focusBorderColor="#352919"
                                {...register("password_confirmation", {
                                    required:
                                        "Password confirmation is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "password confirmation at least 8 characters",
                                    },
                                    deps: ["password"],
                                    validate: (value) =>
                                        value === watch("password") ||
                                        "The passwords do not match",
                                })}
                            />
                            <FormErrorMessage
                                fontSize={"0.9rem"}
                                m={"0"}
                                p={"0"}
                            >
                                {errors.password_confirmation &&
                                    errors.password_confirmation.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!errors.recaptcha}>
                            <Controller
                                control={control}
                                name="recaptcha"
                                rules={{
                                    required: "Recaptcha is required",
                                }}
                                render={({ field }) => (
                                    <ReCAPTCHA
                                        sitekey={recaptcha_site_key}
                                        {...field}
                                    />
                                )}
                            />
                            <FormErrorMessage
                                fontSize={"0.9rem"}
                                m={"0"}
                                p={"0"}
                            >
                                {errors.recaptcha && errors.recaptcha.message}
                            </FormErrorMessage>
                        </FormControl>

                        <Button
                            type="submit"
                            bgColor={"#352919"}
                            _hover={{ bgColor: "#352919" }}
                            color={"white"}
                            mt={"2rem"}
                            w={"full"}
                        >
                            Sign Up
                        </Button>
                        <Text>
                            Already have an account?{" "}
                            <Link
                                as={InertiaLink}
                                href="/login"
                                textDecoration={"underline"}
                                cursor={"pointer"}
                                fontWeight={"bold"}
                            >
                                Sign In
                            </Link>
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default Register;
