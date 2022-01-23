import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react';
// import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';
import DonorInfoCheckBoxes from './DonorInfoCheckBoxes'

export default function DonorInformation(props) {
    const { register } = useFormContext(); // retrieve all hook methods
    const [visible, setVisible] = useState(false);
    const handleChange = () => {
        setVisible(!visible);
    };
    return (
        <>
            <Typography variant="h5" component="h3">
                Donor Information
            </Typography>
            <Row className="mt-4">
                <>
                    <DonorInfoCheckBoxes />
                    <Col xs={12}>
                        <FormControlLabel control={<Checkbox {...register("donorUnknown")} onChange={handleChange} />} label="Donor is unknown, anonymous, or various cash donors" />
                    </Col>
                    {!visible && (
                        <>
                            <Col xs={12} md={6}>
                                <TextField {...register("tedConstituentId")} required placeholder='TED Constituent ID' className="maxWidth" label="TED Constituent ID" />

                            </Col>
                            <Col xs={12} md={6}>
                                <TextField {...register("organizationDonorName")} placeholder='Organization/Donor Name' className="maxWidth" label="Organization/Donor name" />
                            </Col>
                        </>
                    )}
                </>
            </Row>
        </>
    )
}
