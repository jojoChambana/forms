import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import DonorInfoCheckBoxes from './DonorInfoCheckBoxes';

export default function TedOrgDonor() {
    function NestedTedOrgDonorInput() {
        const { register } = useFormContext(); // retrieve all hook methods
        const [visible, setVisible] = useState(false);
        const handleChange = () => {
            setVisible(!visible);
        };
        return (
            <>
                <DonorInfoCheckBoxes />
                <Col xs={12}>
                    <FormControlLabel control={<Checkbox {...register("donorUnknown")} onChange={handleChange} />} label="Donor is unknown, anonymous, or various cash donors" />
                </Col>
                {!visible && (
                    <>
                        <Col xs={12} md={6}>
                            <TextField {...register("tedConstId")} required placeholder='TED Constituent ID' className="maxWidth" label="TED Constituent ID" />

                        </Col>
                        <Col xs={12} md={6}>
                            <TextField {...register("orgDonorName")} placeholder='Organization/Donor Name' className="maxWidth" label="Organization/Donor name" />
                        </Col>
                    </>
                )}
            </>
        );

    }
    return (
        <NestedTedOrgDonorInput />
    )
}
