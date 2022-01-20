import { TextField } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';

export default function DomesticAddress() {
    const { register } = useFormContext(); // retrieve all hook methods
    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField
                    {...register("donorAddress")}
                    required
                    id="donorDomesticAddress"
                    label="Address"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("donorCity")}
                    required
                    id="donorCity"
                    label="City"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("donorState")}
                    required
                    id="donorState"
                    label="State"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("donorCountry")}
                    required
                    id="donorCountry"
                    label="Country"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("donorPostalCode")}
                    required
                    id="donorPostalCode"
                    label="Zip Code"
                    className="maxWidth"
                />
            </Col>
        </Row>
    )
}
