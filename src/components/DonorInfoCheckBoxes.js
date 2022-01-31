import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Col, Row } from "react-bootstrap";


export default function DonorInfoCheckBoxes() {
    // const { register } = useFormContext(); // retrieve all hook methods
    const { control, handleSubmit, register } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });
    // const [newDonor, setNewDonor] = React.useState('');
    // const [newAddress, setNewAddress] = React.useState('false');
    // const handleClickDonor = (event) => {
    //     setNewDonor(event.target.value);
    //     console.log(setNewDonor)
    // };

    // const handleClickAddress = (event) => {
    //     setNewAddress(event.target.value);
    //     console.log(setNewAddress);
    // };

    return (
        <FormGroup>
            <Row className="mb-0">
                <Col xs={12} md={6}>
                    {/* <FormControlLabel control={<Checkbox {...register("newDonor")} value={newDonor} onClick={handleClickDonor} />} label="New donor" /> */}
                    <Controller
                        control={control}
                        name="newDonor"
                        render={({ field: { value, onChange } }) => (
                            // Checkbox accepts its value as `checked`
                            // so we need to connect the props here
                            <FormControlLabel
                                control={<Checkbox checked={value} onChange={onChange} />}
                                label="New donor"
                            />
                        )}
                    />

                </Col>
                <Col xs={12} md={6}>
                    {/* <FormControlLabel control={<Checkbox {...register("newAddress")} value={newAddress} onClick={handleClickAddress} />} label="New address" /> */}
                    <Controller
                        control={control}
                        name="newAddress"
                        render={({ field: { value, onChange } }) => (
                            // Checkbox accepts its value as `checked`
                            // so we need to connect the props here
                            <FormControlLabel
                                control={<Checkbox checked={value} onChange={onChange} />}
                                label="New address"
                            />
                        )}
                    />
                </Col>
            </Row>
        </FormGroup>
    );
}
