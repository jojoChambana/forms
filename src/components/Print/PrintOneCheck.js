import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../HelperFunctions";
import { Col } from "react-bootstrap";
export default function PrintOneCheck({ oneCheck, index }) {
    return (
        <TableRow key={"oneCheck" + index}>
            <TableCell
                component="th"
                scope="row"
                style={{ width: "50%", fontWeight: "bold" }}
            >
                <Col xs={6}>{oneCheck.checkNumbers}</Col>
            </TableCell>
            <TableCell style={{ width: "123px" }}>
                <Col xs={6}>{formatAmount(oneCheck.checkTotal)}</Col>
            </TableCell>
        </TableRow>
    );
}
