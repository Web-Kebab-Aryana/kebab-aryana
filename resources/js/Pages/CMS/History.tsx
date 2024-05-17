import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "@/Components/Sidebar";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
} from "@chakra-ui/react";
import DataTable from "@/Components/Datatables";
import { MUIDataTableColumn } from "mui-datatables";
import { MdDeleteForever } from "react-icons/md";
import { Button as MuiButton } from "@mui/material";
import { useState } from "react";

const historyData = [
    {
        id: 1,
        nama: "John Doe",
        harga: "Rp. 100.000",
        tanggalTransaksi: "2021-10-10",
        notaPembelian: "123456",
        action: "Detail",
    },
    {
        id: 2,
        nama: "Jane Doe",
        harga: "Rp. 150.000",
        tanggalTransaksi: "2021-10-10",
        notaPembelian: "123456",
        action: "Detail",
    },
];

type ModalState = {
    id?: number;
    mode: "delete";
};

type Data = {
    id: number;
    name: string;
    harga: string;
    notaPembelian: boolean;
};

export default function History({ auth }: PageProps) {
    const [modalState, setModalState] = useState<ModalState | undefined>();

    const colDefs: MUIDataTableColumn[] = [
        {
            name: "id",
            label: "ID Transaksi",
        },
        {
            name: "nama",
            label: "Nama Pembeli",
        },
        {
            name: "harga",
            label: "Total Harga",
        },
        {
            name: "tanggalTransaksi",
            label: "Tanggal Transaksi",
        },
        {
            name: "notaPembelian",
            label: "Nota Pembelian",
        },
        {
            name: "id",
            label: "Action",
            options: {
                customBodyRender: (value: number) => {
                    return (
                        <MuiButton
                            variant={"contained"}
                            color={"error"}
                            sx={{
                                borderRadius: "md",
                                minWidth: "0",
                                paddingX: "0.5rem",
                                boxShadow: "none",
                                backgroundColor: "button.success",
                            }}
                            onClick={() =>
                                setModalState({ id: value, mode: "delete" })
                            }
                        >
                            <MdDeleteForever />
                        </MuiButton>
                    );
                },
            },
        },
    ];

    return (
        <Stack bgColor={"#FFF7E4"} h={"100vh"} w={"100vw"} direction={"row"}>
            <Sidebar auth={auth}>
                <Stack
                    bgColor={"white"}
                    w={"full"}
                    shadow={"lg"}
                    rounded={"xl"}
                    overflow={"auto"}
                    flex={1}
                >
                    <DataTable colDefs={colDefs} data={historyData} />
                    {/* MODAL START */}
                    <Modal
                        isCentered
                        isOpen={!!modalState}
                        onClose={() => setModalState(undefined)}
                    >
                        <ModalOverlay
                            bg="blackAlpha.300"
                            backdropFilter="blur(10px)"
                        />

                        <ModalContent>
                            <ModalHeader>Delete</ModalHeader>
                            <ModalCloseButton />

                            <ModalBody>
                                <Text>
                                    Are you sure to delete{" "}
                                    <b>
                                        {
                                            historyData.find(
                                                (data) =>
                                                    data.id === modalState?.id
                                            )?.nama
                                        }
                                    </b>{" "}
                                    ?
                                </Text>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    colorScheme="red"
                                    onClick={() => {
                                        // const data = verificationData.data?.find(
                                        //     (data) => data.id === modalState?.id
                                        // );
                                        // if (data?.role === "panitia") {
                                        //     api.delete(`/panitia/${modalState?.id}`)
                                        //         .then(() => {
                                        //             toast({
                                        //                 title: "Berhasil",
                                        //                 description: `Data ${data.name} berhasil dihapus`,
                                        //                 status: "error",
                                        //                 duration: 5000,
                                        //                 isClosable: true,
                                        //             });
                                        //         })
                                        //         .catch(errorHandler)
                                        //         .finally(() => {
                                        //             setModalState(undefined);
                                        //             verificationData.mutate();
                                        //         });
                                        // } else {
                                        //     api.delete(`/organisator/${modalState?.id}`)
                                        //         .then(() => {
                                        //             toast({
                                        //                 title: "Berhasil Dihapus!",
                                        //                 description: `Data ${data?.name} berhasil dihapus`,
                                        //                 status: "error",
                                        //                 duration: 5000,
                                        //                 isClosable: true,
                                        //             });
                                        //         })
                                        //         .catch(errorHandler)
                                        //         .finally(() => {
                                        //             setModalState(undefined);
                                        //             verificationData.mutate();
                                        //         });
                                        // }
                                        setModalState(undefined);
                                    }}
                                >
                                    Delete
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    {/* MODAL END */}
                </Stack>
            </Sidebar>
        </Stack>
    );
}
