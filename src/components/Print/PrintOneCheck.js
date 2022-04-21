import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../HelperFunctions";
export default function PrintOneCheck({ trustCheck, index }) {
    console.log("One Check:", trustCheck);
    return (
        <>
            <TableRow key={"trustCheck" + index}>
                <TableCell component="th" scope="row">
                    {/* {trustCheck.checkNumbers} */} Ask Bill
                </TableCell>
                <TableCell>
                    {/* {formatAmount(trustCheck.checkTotal)} */} About these
                    not showing up
                </TableCell>
            </TableRow>
        </>
    );
}
