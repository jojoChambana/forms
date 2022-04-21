import { Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

export const PrintEightyTwoEightyThree = ({ formValues }) => {
    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Typography variant="h5" component="h3">
                        8283 Required
                    </Typography>
                </Col>
            </Row>

            <>
                <div className="theDesignationResults">
                    <div className="row border" style={{ padding: ".25em" }}>
                        <Col xs={6}>
                            <div
                                className="row"
                                style={{
                                    marginBottom: "0",
                                    paddingRight: "3em",
                                }}
                            >
                                <div className="col">
                                    <div className="rightLabel">
                                        Is 8282 Required:
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formValues.is8283Required}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            {formValues.giftAdmincheckbox}Ask Bill about these
                            checkboxes
                        </Col>
                        <Col xs={3}>
                            {formValues.trustcheckbox} not showing up
                        </Col>
                    </div>
                </div>
            </>
        </>
    );
};
