import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../HelperFunctions";
export default function PrintOneGIK({ oneGiftInKind, index }) {
    console.log("Gift", oneGiftInKind);
    return (
        <>
            <TableRow key={"security" + index}>
                <TableCell component="th" scope="row">
                    {oneGiftInKind.descriptionOfGift}
                </TableCell>
                <TableCell>{formatAmount(oneGiftInKind.giftValue)}</TableCell>
            </TableRow>
        </>
    );
}
