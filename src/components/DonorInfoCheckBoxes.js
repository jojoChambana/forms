import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import { Col, Row } from "react-bootstrap";

export default function DonorInfoCheckBoxes(register) {
    return (
        <FormGroup>
            <Row className="mb-0">
                <Col xs={12} md={6}>
                    <Controller
                        name="newDonorCheckBox"
                        render={({ field: { value, onChange } }) => (
                            // Checkbox accepts its value as `checked`
                            // so we need to connect the props here
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={value}
                                        onChange={onChange}
                                        {...register("newDonorAddress")}
                                        id="newDonorAddress"
                                    />
                                }
                                label="New donor"
                            />
                        )}
                    />
                </Col>
                <Col xs={12} md={6}>
                    <Controller
                        name="newDonorAddressCheckBox"
                        render={({ field: { value, onChange } }) => (
                            // Checkbox accepts its value as `checked`
                            // so we need to connect the props here
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={value}
                                        onChange={onChange}
                                    />
                                }
                                label="New address"
                            />
                        )}
                    />
                </Col>
            </Row>
        </FormGroup>
    );
}
