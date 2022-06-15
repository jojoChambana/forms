import { Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function PrintOtherInformation({ formValues }) {
    return (
        <>
            {formValues.otherInformation ? (
                <>
                    <Typography variant="h5" component="h3" className="mt-3">
                        Other Information
                    </Typography>
                    <Row className="border mt-3">
                        <Col
                            style={{
                                position: "relative",
                                left: "0.5em",
                            }}
                        >
                            <div className="d-print-table-cell col centerColContent">
                                <div className="d-print-table-row">
                                    <div className="rightLabel">Note: </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formValues.otherInformation}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>
            ) : null}
        </>
    );
}
