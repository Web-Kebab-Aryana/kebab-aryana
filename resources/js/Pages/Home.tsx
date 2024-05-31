import { PageProps } from "@/types";
import { Stack, Text } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";

// componentss
import HeroSection from "@/Components/HeroSection";
import AboutUs from "@/Components/AboutUs";
import OurReview from "@/Components/OurReview";
import Location from "@/Components/Location";
import DivideStats from "@/Components/DivideStats";
import FooterSection from "@/Components/FooterSection";
import OrderMenu from "@/Components/OrderMenu";

type HomeProps = {
    data: {
        content: {
            aboutus: string;
            coordinate: string;
            location: string;
            whatsapp_number: string;
        };
        menus: {
            id: number;
            name: string;
            price: number;
            description: string;
            category: string;
            image: string;
        }[];
    };
};

export default function Home({ auth, data }: PageProps & HomeProps) {
    return (
        <>
            <Head title="Bukan Sembarang Kebab"></Head>
            <Stack minW={"100vw"} minH={"100vh"} gap={0}>
                <HeroSection />
                <AboutUs aboutus={data.content.aboutus} />

                {/* tunggu dimas slicing */}
                <DivideStats />
                <Location
                    coordinate={data.content.coordinate}
                    location={data.content.location}
                />
                <OrderMenu menus={data.menus} />
                <OurReview phoneNumber={data.content.whatsapp_number} />
                <FooterSection />
            </Stack>
        </>
    );
}
