import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import { Stack, Text } from "@chakra-ui/react";

const DesktopContent = () => {
    return <Text>Desktop Specific Content</Text>;
};

const MobileContent = () => {
    return <Text>Mobile Specific Content</Text>;
};

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Stack
                bgColor={"#FFF7E4"}
                h={"100vh"}
                w={"100vw"}
                direction={"row"}
            >
                <Sidebar auth={auth}>
                    <Text>asdasd</Text>
                </Sidebar>
            </Stack>
        </>
    );
}
