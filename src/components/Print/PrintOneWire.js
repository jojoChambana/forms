import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../HelperFunctions";
export default function PrintOneWire({ trustWire, index }) {
    console.log("Trust Wire", trustWire);
    return (
        <>
            <TableRow key={"trustWire" + index}>
                <TableCell component="th" scope="row" style={{ width: "50%" }}>
                    {trustWire.bankName}
                </TableCell>
                <TableCell style={{ width: "123px" }}>
                    {formatAmount(trustWire.totalValue)}
                </TableCell>
            </TableRow>
        </>
    );
}
