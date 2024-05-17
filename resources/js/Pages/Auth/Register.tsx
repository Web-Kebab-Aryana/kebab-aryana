import { useForm, SubmitHandler } from "react-hook-form";
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
} from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";

interface IFormInput {
    username: string;
    password: string;
}

const Register: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <Stack
            direction={["column", "column", "row", "row", "row"]}
            minW={"100vw"}
            minH={"100vh"}
            gap={"0"}
            h={["50vh", "50vh", "auto"]}
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
                        boxSize={["5.5rem", "7rem", "7.5rem", "9rem", "11rem"]}
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
                        Check our website
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
            >
                <Show above="md">
                    <Text
                        fontWeight={"bold"}
                        fontSize={["0", "0", "1.19rem", "1.4rem", "1.59rem"]}
                        marginBottom={"2rem"}
                    >
                        Sign Up
                    </Text>
                </Show>

                <Stack justifyContent={"center"} alignItems={"center"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack gap={"1.3rem"}>
                            <FormControl isInvalid={!!errors.username}>
                                <Stack alignItems={"center"}>
                                    <Stack
                                        align={"start"}
                                        w={[
                                            "140%",
                                            "200%",
                                            "160%",
                                            "210%",
                                            "290%",
                                        ]}
                                        gap={["0"]}
                                    >
                                        <FormLabel
                                            htmlFor="username"
                                            fontWeight={"bold"}
                                            fontSize={["1rem"]}
                                        >
                                            Username
                                        </FormLabel>
                                    </Stack>
                                    <Input
                                        id="username"
                                        bgColor={"#F8F8F8"}
                                        borderColor={"#352919"}
                                        _hover={{ borderColor: "#352919" }}
                                        focusBorderColor="#352919"
                                        marginBottom={[
                                            "0.2",
                                            "0.2rem",
                                            "2.8rem",
                                        ]}
                                        w={[
                                            "140%",
                                            "200%",
                                            "160%",
                                            "210%",
                                            "290%",
                                        ]}
                                        {...register("username", {
                                            required: "Username is required",
                                            minLength: {
                                                value: 4,
                                                message:
                                                    "Username at least 4 characters",
                                            },
                                        })}
                                    />
                                    <FormErrorMessage fontSize={"0.9rem"}>
                                        {errors.username &&
                                            errors.username.message}
                                    </FormErrorMessage>
                                </Stack>
                            </FormControl>
                            <FormControl isInvalid={!!errors.password}>
                                <Stack alignItems={"center"}>
                                    <Stack
                                        align={"start"}
                                        w={[
                                            "140%",
                                            "200%",
                                            "160%",
                                            "210%",
                                            "290%",
                                        ]}
                                    >
                                        <FormLabel
                                            htmlFor="password"
                                            fontWeight={"bold"}
                                        >
                                            Password
                                        </FormLabel>
                                    </Stack>
                                    <Input
                                        id="password"
                                        type="password"
                                        bgColor={"#F8F8F8"}
                                        borderColor={"#352919"}
                                        _hover={{ borderColor: "#352919" }}
                                        focusBorderColor="#352919"
                                        marginBottom={[
                                            "2rem",
                                            "2rem",
                                            "3.5rem",
                                        ]}
                                        w={[
                                            "140%",
                                            "200%",
                                            "160%",
                                            "210%",
                                            "290%",
                                        ]}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message:
                                                    "Password at least 6 characters",
                                            },
                                        })}
                                    />
                                    <FormErrorMessage
                                        fontSize={"0.9rem"}
                                        m={"0"}
                                        p={"0"}
                                    >
                                        {errors.password &&
                                            errors.password.message}
                                    </FormErrorMessage>

                                    <Button
                                        type="submit"
                                        bgColor={"#352919"}
                                        _hover={{ bgColor: "#352919" }}
                                        color={"white"}
                                        w={[
                                            "140%",
                                            "200%",
                                            "160%",
                                            "210%",
                                            "290%",
                                        ]}
                                    >
                                        Sign Up
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Stack>
                    </form>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Register;

// import { useEffect, FormEventHandler } from 'react';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     useEffect(() => {
//         return () => {
//             reset('password', 'password_confirmation');
//         };
//     }, []);

//     const submit: FormEventHandler = (e) => {
//         e.preventDefault();

//         post(route('register'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Register" />

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="name" value="Name" />

//                     <TextInput
//                         id="name"
//                         name="name"
//                         value={data.name}
//                         className="mt-1 block w-full"
//                         autoComplete="name"
//                         isFocused={true}
//                         onChange={(e) => setData('name', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.name} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         onChange={(e) => setData('email', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

//                     <TextInput
//                         id="password_confirmation"
//                         type="password"
//                         name="password_confirmation"
//                         value={data.password_confirmation}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password_confirmation', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password_confirmation} className="mt-2" />
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     <Link
//                         href={route('login')}
//                         className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                         Already registered?
//                     </Link>

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Register
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }
