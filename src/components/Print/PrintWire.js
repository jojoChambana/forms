import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import PrintOneWire from "./PrintOneWire";

export default function PrintWire({ formValues }) {
    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Wire Information
                    </Typography>
                </Col>
            </Row>
            <div className="printTable mt-3">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Bank Name</TableCell>
                            <TableCell>Total Value of Securities</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formValues.trustWire.map((item, index) => {
                            return (
                                <>
                                    <PrintOneWire
                                        trustWire={item}
                                        index={index}
                                        key={"trustWire" + index}
                                    />
                                </>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
