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

const PrintWire = ({ formValues, key }) => {
    var wireCount = 0;
    if (formValues.trustWire !== undefined)
        wireCount = formValues.trustWire.length; // used to determine if we should show Delete trustWire buttons
    return wireCount > 0 ? (
        <div key={key}>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Wire Information
                    </Typography>
                </Col>
            </Row>
            <div className="printTable mt-3 pb-3 border">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Bank Name</TableCell>
                            <TableCell>Total Value</TableCell>
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
        </div>
    ) : null;
};

export default PrintWire;
