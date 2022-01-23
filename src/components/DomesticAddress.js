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
                    {...register("address")}
                    required
                    id="donorDomesticAddress"
                    label="Address"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("city")}
                    required
                    id="donorCity"
                    label="City"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("state")}
                    required
                    id="donorState"
                    label="State"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("zipCode")}
                    required
                    id="donorPostalCode"
                    label="Zip Code"
                    className="maxWidth"
                />
            </Col>
        </Row>
    )
}
