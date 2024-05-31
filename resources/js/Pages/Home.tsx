import OurReview from "@/Components/OurReview";
import DivideStats from "@/Components/DivideStats";

import { PageProps } from "@/types";
import { Stack, Text } from "@chakra-ui/react";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Stack>
                <DivideStats />
            </Stack>
        </>
    );
}
