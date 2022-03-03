import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { Col } from "react-bootstrap";

import DonorInfoCheckBoxes from "./DonorInfoCheckBoxes";

export default function TedOrgDonor({ register }) {
    const [visible, setVisible] = useState(false);
    const handleChange = () => {
        setVisible(!visible);
    };
    return (
        <>
            <DonorInfoCheckBoxes />
            <Col xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            {...register("tedDonorUnknown")}
                            onChange={handleChange}
                        />
                    }
                    label="Donor is unknown, anonymous, or various cash donors"
                />
            </Col>
            {!visible && (
                <>
                    <Col xs={12} md={6}>
                        <TextField
                            {...register("tedConstituentID")}
                            required
                            placeholder="TED Constituent ID"
                            className="maxWidth"
                            label="TED Constituent ID"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField
                            {...register("organizationDonorNawne")}
                            placeholder="Organization/Donor Name"
                            className="maxWidth"
                            label="Organization/Donor name"
                        />
                    </Col>
                </>
            )}
        </>
    );
}
