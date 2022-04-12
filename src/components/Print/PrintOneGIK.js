import React from "react";
import { Col } from "react-bootstrap";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
export default function PrintOneGIK({ oneGiftInKind, index }) {
    console.log("Gift", oneGiftInKind);
    return (
        <>
            <TableRow key={"security" + index}>
                <TableCell component="th" scope="row">
                    {oneGiftInKind.descriptionOfGift}
                </TableCell>
                <TableCell>{oneGiftInKind.giftValue}</TableCell>
            </TableRow>
        </>
    );
}
