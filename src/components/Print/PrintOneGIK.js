import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../HelperFunctions";
export default function PrintOneGIK({ oneGiftInKind, index }) {
    return (
        <>
            <TableRow key={"giftInKind" + index}>
                <TableCell component="th" scope="row" style={{ width: "50%" }}>
                    {oneGiftInKind.descriptionOfGift}
                </TableCell>
                <TableCell style={{ width: "123px" }}>
                    {formatAmount(oneGiftInKind.giftValue)}
                </TableCell>
            </TableRow>
        </>
    );
}
