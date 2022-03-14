import { TextField } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from "react-hook-form";

export default function ForeignAddress({ prefix, isRequired }) {

    const { register } = useFormContext();

    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField
                    {...register(`${prefix}ForeignAddress`)}
                    required={isRequired}
                    id="donorForeignAddress"
                    label="Address"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register(`${prefix}ForeignAddressCity`)}
                    required={isRequired}
                    id={`${prefix}ForeignAddressCity`}
                    label="City"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register(`${prefix}ForeignAddressProvinceRegion`)}
                    required={isRequired}
                    id={`${prefix}ForeignAddressProvinceRegion`}
                    label="Province/Region"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register(`${prefix}ForeignAddressCountry`)}
                    required={isRequired}
                    id={`${prefix}ForeignAddressCountry`}
                    label="Country"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register(`${prefix}ForeignAddressPostalCode`)}
                    required={isRequired}
                    id={(`${prefix}ForeignAddressCountry`)}
                    label="Postal Code"
                    className="maxWidth"
                />
            </Col>
        </Row>
    )
}


