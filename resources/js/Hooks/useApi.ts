import { useToast } from "@chakra-ui/react";
import { AxiosError, isAxiosError } from "axios";

type ResponseModel<T = any> = {
    message: string;
    data?: T;
};

export const useToastErrorHandler = () => {
    const toast = useToast();

    return (error: AxiosError<ResponseModel>) => {
        console.error(error);

        if (!isAxiosError(error)) {
            toast({
                title: "Error",
                description: "Something went wrong",
                status: "error",
                isClosable: true,
            });
            return;
        }

        if (error.response) {
            // handle error code

            toast({
                title: "Error",
                description:
                    error.response.data.message || "Something went wrong",
                status: "error",
                isClosable: true,
            });
            return;
        }
    };
};
