import Location from "@/Components/Location";
import { PageProps } from "@/types";
import { Stack, Text } from "@chakra-ui/react";
export default function Home({ auth }: PageProps) {
    return (
        <>
            <Stack>
                <Location />
            </Stack>
        </>
    );
}
