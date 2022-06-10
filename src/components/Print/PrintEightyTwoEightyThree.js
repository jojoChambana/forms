import { Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function PrintEightyTwoEightyThree({ formValues }, key) {
    const is8283Required = formValues.is8283Required;
    const is8283RadioButtons = formValues.is8283RadioButtons;
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
                    Is 8282 Required?{" "}
                    <span className="normal">{is8283Required}</span>
                </Col>
                <Col>
                    {is8283RadioButtons}: <span className="normal">Yes</span>
                </Col>
            </Row>
        </div>
    ) : null;
}
