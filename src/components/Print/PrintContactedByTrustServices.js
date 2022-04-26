import React from "react";
import { Col } from "react-bootstrap";

export default function PrintContactedByTrustServices({ formValues }) {
    return (
        <Col xs={6}>{formValues.doNotProcessUntilContactedByTrustServices}</Col>
    );
}
