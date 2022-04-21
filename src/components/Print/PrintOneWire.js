import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../HelperFunctions";
export default function PrintOneWire({ newTrustCheck, index }) {
    return (
        <>
            <TableRow key={"trustWire" + index}>
                <TableCell component="th" scope="row">
                    {/* {newTrustCheck.bankName}  */} Ask Bill
                </TableCell>
                <TableCell>
                    {/* {formatAmount(newTrustCheck.totalValue)} */}
                    About why these values aren't pulling in
                </TableCell>
            </TableRow>
        </>
    );
}
