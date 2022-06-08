import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";

import PrintOneSecurity from "./PrintOneSecurity";

const PrintSecurities = ({ formValues }, key) => {
    var securityCount = 0;
    var attachedCheckbox;
    if (formValues.security !== undefined)
        securityCount = formValues.security.length; // used to determine if we should show Delete security buttons

    attachedCheckbox = formValues.seeAttachedSecuritiesListCheckbox;
    // console.log(attachedCheckbox);
    // return !securityCount === 0 ? (
    //     <p>A security</p>
    // ) : (
    return (
        <>
            <Row className="theDesignationResults">
                <Col>
                    {attachedCheckbox === true || securityCount > 0 ? (
                        <Row className="calcBottom">
                            <Col>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    className="mt-2"
                                >
                                    Securities Information
                                </Typography>
                            </Col>
                        </Row>
                    ) : null}

                    {attachedCheckbox === true ? (
                        <>
                            <Row className="border">
                                <Col>
                                    <Typography variant="p">
                                        See Attached List
                                    </Typography>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <div key={key}>
                                <div className="printTable mt-3 pb-3 border">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Shares</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Symbol</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {formValues.security.map(
                                                (item, index) => {
                                                    return (
                                                        <>
                                                            <PrintOneSecurity
                                                                oneSecurity={
                                                                    item
                                                                }
                                                                index={index}
                                                                // key={"oneDesig" + index}
                                                            />
                                                        </>
                                                    );
                                                }
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </>
                    )}
                </Col>
            </Row>
        </>
    );
};
export default PrintSecurities;
