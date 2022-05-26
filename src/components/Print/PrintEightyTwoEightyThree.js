import { Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function PrintEightyTwoEightyThree({ formValues }, key) {
    const is8283Required = formValues.is8283Required;

    //is8283Required = formValues.security.length; // used to determine if we should show Delete security buttons
    return is8283Required !== "No" ? (
        <div key={key}>
            <Row className="mt-3">
                <Col>
                    <Typography variant="h5" component="h3">
                        8283 Required
                    </Typography>
                </Col>
            </Row>
            <Row className="border">
                <Col>
                    Is 8282 Required?<span className="normal"> Yes</span>
                </Col>
            </Row>
            {/* <div className="mt-3 mb-2 border">
                <>
                    <div className="theDesignationResults">
                        <div className="row mb-0">
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
                                            8282 Required:
                                        </div>

                                        <div>
                                            <span className="normal">
                                                Yes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={4} className="p-3">
                                <div className="d-print-table-row">
                                    <div className="d-print-table-cell">
                                        {formValues.is8283RequiredCheckBoxes !==
                                        "Gift Admin" ? (
                                            <>
                                                <div className="d-flex">
                                                    Type:{" "}
                                                    <span
                                                        className="normal"
                                                        style={{
                                                            width: "max-content",
                                                        }}
                                                    >
                                                        {
                                                            formValues.is8283RadioButtons
                                                        }
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )}

                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </>
            </div> */}
        </div>
    ) : null;
}
