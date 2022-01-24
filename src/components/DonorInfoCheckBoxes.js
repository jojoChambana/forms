import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormContext } from 'react-hook-form';
import { Col, Row } from "react-bootstrap";


export default function DonorInfoCheckBoxes() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [newDonor, setNewDonor] = React.useState('');
    const [newAddress, setNewAddress] = React.useState('');
    const handleClickDonor = (event) => {
        setNewDonor(event.target.value);
        console.table(event.target.value)
    };

    const handleClickAddress = (event) => {
        setNewAddress(event.target.value);
        console.table(event.target.value)
    };

    return (
        <FormGroup>
            <Row className="mb-0">
                <Col xs={12} md={6}>
                    <FormControlLabel control={<Checkbox {...register("newDonor")} value={newDonor} onClick={handleClickDonor} />} label="New donor" />
                </Col>
                <Col xs={12} md={6}>
                    <FormControlLabel control={<Checkbox {...register("newAddress")} value={newAddress} onClick={handleClickAddress} />} label="New address" />
                </Col>
            </Row>
        </FormGroup>
    );
}
