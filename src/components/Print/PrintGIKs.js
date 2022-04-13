import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import PrintOneGIK from "./PrintOneGIK";

export default function PrintGIKs({ formValues }) {
    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Gift In Kind Information
                    </Typography>
                </Col>
            </Row>
            <Paper className="printTable mt-3">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>Gift Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formValues.giftInKind.map((item, index) => {
                            return (
                                <>
                                    <PrintOneGIK
                                        oneGiftInKind={item}
                                        index={index}
                                        key={"oneGik" + index}
                                    />
                                </>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </>
    );
}