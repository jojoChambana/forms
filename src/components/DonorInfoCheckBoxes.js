import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormContext } from 'react-hook-form';
import { Col, Row } from "react-bootstrap";

export default function DonorInfoCheckBoxes() {
    const { register } = useFormContext(); // retrieve all hook methods
    return (
        <FormGroup>
            <Row className="mb-0">
                <Col xs={12} md={6}>
                    <FormControlLabel control={<Checkbox {...register("newDonor")} />} label="New donor" />
                </Col>
                <Col xs={12} md={6}>
                    <FormControlLabel control={<Checkbox {...register("newAddress")} />} label="New address" />
                </Col>
            </Row>
        </FormGroup>
    );
}
