import { TextField } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';

export default function ForeignAddress(props) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField
                    {...register("address")}
                    required
                    id="donorForeignAddress"
                    label="Address"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("city")}
                    required
                    id="donorForeignCity"
                    label="City"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("provinceRegion")}
                    required
                    id="donorProvinceRegion"
                    label="Province/Region"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("country")}
                    required
                    id="donorCountry"
                    label="Country"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("postalCode")}
                    required
                    id="donorPostalCode"
                    label="Postal Code"
                    className="maxWidth"
                />
            </Col>
        </Row>
    )
}
