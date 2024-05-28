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
    newPassword: string;
    confirmPassword: string;
}

const ForgotPassword: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    const newPassword = watch("newPassword");

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
                            Reset Password
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
                            Please don’t forget again
                        </Text>
                    </Stack>
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
                        Forgot Password
                    </Text>
                </Show>

                <Stack justifyContent={"center"} alignItems={"center"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack gap={"1.3rem"}>
                            <FormControl isInvalid={!!errors.newPassword}>
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
                                            htmlFor="newPassword"
                                            fontWeight={"bold"}
                                            fontSize={["1rem"]}
                                        >
                                            New Password
                                        </FormLabel>
                                    </Stack>
                                    <Input
                                        id="newPassword"
                                        type="password"
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
                                        {...register("newPassword", {
                                            required:
                                                "New password is required",
                                            minLength: {
                                                value: 6,
                                                message:
                                                    "Password at least 6 characters",
                                            },
                                        })}
                                    />
                                    <FormErrorMessage fontSize={"0.9rem"}>
                                        {errors.newPassword &&
                                            errors.newPassword.message}
                                    </FormErrorMessage>
                                </Stack>
                            </FormControl>
                            <FormControl isInvalid={!!errors.confirmPassword}>
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
                                            htmlFor="confirmPassword"
                                            fontWeight={"bold"}
                                        >
                                            Confirm Password
                                        </FormLabel>
                                    </Stack>
                                    <Input
                                        id="confirmPassword"
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
                                        {...register("confirmPassword", {
                                            required:
                                                "Confirm password is required",
                                            validate: (value) =>
                                                value === newPassword ||
                                                "Passwords do not match",
                                        })}
                                    />
                                    <FormErrorMessage
                                        fontSize={"0.9rem"}
                                        m={"0"}
                                        p={"0"}
                                    >
                                        {errors.confirmPassword &&
                                            errors.confirmPassword.message}
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
                                        Save
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

export default ForgotPassword;

// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, useForm } from '@inertiajs/react';
// import { FormEventHandler } from 'react';

// export default function ForgotPassword({ status }: { status?: string }) {
//     const { data, setData, post, processing, errors } = useForm({
//         email: '',
//     });

//     const submit: FormEventHandler = (e) => {
//         e.preventDefault();

//         post(route('password.email'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Forgot Password" />

//             <div className="mb-4 text-sm text-gray-600">
//                 Forgot your password? No problem. Just let us know your email address and we will email you a password
//                 reset link that will allow you to choose a new one.
//             </div>

//             {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

//             <form onSubmit={submit}>
//                 <TextInput
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={data.email}
//                     className="mt-1 block w-full"
//                     isFocused={true}
//                     onChange={(e) => setData('email', e.target.value)}
//                 />

//                 <InputError message={errors.email} className="mt-2" />

//                 <div className="flex items-center justify-end mt-4">
//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Email Password Reset Link
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }
