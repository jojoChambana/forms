import {
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import DonorInfoCheckBoxes from './DonorInfoCheckBoxes'

export default function DonorInformation({
    errors,
    newDonor,
    newAddress,
    handleClickAddress,
    handleClickDonor,
    register,
}) {
    const [visible, setVisible] = useState(false);
    const handleClickUnknownDonor = () => {
        setVisible(!visible);
    };
    return (
        <>
            <Typography variant="h5" component="h3">
                Donor Information
            </Typography>
            <Row className="mt-4">
                <>
                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...register("donorUnknown")}
                                    onClick={handleClickUnknownDonor}
                                />
                            }
                            label="Donor is unknown, anonymous, or various cash donors"
                        />
                    </Col>

                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...register("newDonor")}
                                    value={newDonor}
                                    onClick={handleClickDonor}
                                />
                            }
                            label="New donor"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...register("newAddress")}
                                    value={newAddress}
                                    onClick={handleClickAddress}
                                />
                            }
                            label="New address"
                        />
                    </Col>
                    {!visible && (
                        <Row>
                            <Col xs={12} md={6}>
                                <TextField
                                    {...register("tedConstituentId")}
                                    required
                                    placeholder="TED Constituent ID"
                                    className="maxWidth"
                                    label="TED Constituent ID"
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <TextField
                                    {...register("organizationDonorName")}
                                    placeholder="Organization/Donor Name"
                                    className="maxWidth"
                                    label="Organization/Donor name"
                                />
                            </Col>
                        </Row>
                    )}
                </>
            </Row>
        </>
    );
}
