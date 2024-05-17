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
    Select,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import DataTable from "@/Components/Datatables";
import { MUIDataTableColumn } from "mui-datatables";
import { MdDeleteForever } from "react-icons/md";
import { Button as MuiButton } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ResponseModel, useToastErrorHandler } from "@/Hooks/useApi";
import { router } from "@inertiajs/react";

type TransactionHistory = {
    id: number;
    customer_name: string;
    total: number;
    transaction_date: string;
};

type ModalState = {
    transaction: TransactionHistory;
    mode: "delete";
};

export default function History({
    auth,
    transactions,
}: PageProps & {
    transactions: TransactionHistory[];
}) {
    const toast = useToast();
    const errorHandler = useToastErrorHandler();

    const [modalState, setModalState] = useState<ModalState | undefined>();
    const [transactionDateSelect, setTransactionDateSelect] =
        useState<string>("today");

    const colDefs: MUIDataTableColumn[] = [
        {
            name: "id",
            label: "ID Transaksi",
        },
        {
            name: "customer_name",
            label: "Nama Pembeli",
        },
        {
            name: "total",
            label: "Total Harga",
        },
        {
            name: "transaction_date",
            label: "Tanggal Transaksi",
            options: {
                customBodyRender: (value: string) => {
                    return new Date(value).toLocaleString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                },
            },
        },
        {
            name: "id",
            label: "Action",
            options: {
                customBodyRender: (value: number) => {
                    const transaction = transactions.find(
                        (transaction) => transaction.id === value
                    );
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
                                setModalState({
                                    transaction: transaction!,
                                    mode: "delete",
                                })
                            }
                        >
                            <MdDeleteForever />
                        </MuiButton>
                    );
                },
            },
        },
    ];

    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.transaction_date);
        const today = new Date();
        const weekStart = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - today.getDay()
        );
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

        if (transactionDateSelect === "today") {
            return (
                transactionDate.getDate() === today.getDate() &&
                transactionDate.getMonth() === today.getMonth() &&
                transactionDate.getFullYear() === today.getFullYear()
            );
        } else if (transactionDateSelect === "week") {
            return transactionDate >= weekStart && transactionDate <= today;
        } else if (transactionDateSelect === "month") {
            return transactionDate >= monthStart && transactionDate <= today;
        }

        return false;
    });

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
                    mt={"1rem"}
                >
                    <Stack p={"1rem"} w={"full"} align={"end"}>
                        <Select
                            value={transactionDateSelect}
                            onChange={(event) =>
                                setTransactionDateSelect(event.target.value)
                            }
                            w={"9rem"}
                            rounded={"full"}
                            bgColor={"#FFF7E4"}
                        >
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                        </Select>
                    </Stack>

                    <DataTable colDefs={colDefs} data={filteredTransactions} />
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
                                        {modalState?.transaction.customer_name}
                                    </b>{" "}
                                    ?
                                </Text>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    colorScheme="red"
                                    onClick={() => {
                                        axios
                                            .delete<ResponseModel>(
                                                `/api/transaction/${modalState?.transaction.id}`
                                            )
                                            .then((res) => {
                                                toast({
                                                    title: "Success",
                                                    description:
                                                        res.data.message,
                                                    status: "success",
                                                    duration: 5000,
                                                    isClosable: true,
                                                });
                                            })
                                            .catch(errorHandler)
                                            .finally(() => {
                                                setModalState(undefined);
                                                router.reload();
                                            });
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
