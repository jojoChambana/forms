import { TextField } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

export default function NameEmail() {
    var today = new Date();
    let date =
        today.getMonth() +
        1 +
        "-" +
        today.getDate() +
        "-" +
        today.getFullYear();

    const {
        formState: { errors },
        register,
    } = useFormContext();

    return (
        <>
        <Row>
            <Col xs={12} md={3}>
                <TextField
                    {...register("departmentName")}
                    required
                    placeholder="Department Name"
                    className="maxWidth"
                    label="Department Name"
                />
                <ErrorMessage errors={errors} name="departmentNameError" />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("donationDate")}
                    label="Date Received by Department"
                    className="dateField maxWidth"
                    defaultValue={date}
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("preparedBy")}
                    required
                    placeholder="Prepared By"
                    className="maxWidth"
                    label="Prepared By"
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    type="text"
                    placeholder="Unit Reference Number"
                    id="unit-ref"
                    {...register("unitReferenceNumber")}
                    className="maxWidth"
                    label="Unit Reference Number"
                />
                {errors["unit-ref"] && (
                    <p className="error-message">
                        Invalid unit reference number
                    </p>
                )}
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <TextField
                    {...register("sourceCode")}
                    placeholder="Source Code"
                    label="Source Code"
                    className="maxWidth"
                />
            </Col>
        </Row> 
        </>       
    );
}
