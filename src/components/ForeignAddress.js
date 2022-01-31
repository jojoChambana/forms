import { TextField, Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ForeignAddress({ errors, register }) {

    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField
                    {...register("foreignAddress")}
                    required
                    id="donorForeignAddress"
                    label="Address"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("foreignCity")}
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
                    {...register("foreignCountry")}
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


