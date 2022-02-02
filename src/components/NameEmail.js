import { TextField } from "@mui/material";
import { isToday } from "date-fns";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";

export default function NameEmail({ errors, register }) {
    var today = new Date();
    let date =
        today.getMonth() +
        1 +
        "-" +
        today.getDate() +
        "-" +
        today.getFullYear();
    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField
                    {...register("departmentName")}
                    required
                    placeholder="Department name"
                    className="maxWidth"
                    label="Department name"
                />
                <ErrorMessage errors={errors} name="departmentNameError" />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("donationDate")}
                    label="Date"
                    className="dateField"
                    defaultValue={date}
                />
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("preparedBy")}
                    required
                    placeholder="Prepared by"
                    className="maxWidth"
                    label="Prepared by"
                />
            </Col>
            <Col xs={12} md={4}>
                {/* <TextField {...register("unitReferenceNumber")} placeholder='Unit reference number' className="maxWidth" label="Unit reference number" /> */}
                <TextField
                    type="text"
                    placeholder="Unit number"
                    id="unit-ref"
                    {...register("unitReferenceNumber")}
                    className="maxWidth"
                    label="Unit reference number"
                />
                {errors["unit-ref"] && (
                    <p className="error-message">
                        Invalid unit reference number
                    </p>
                )}
            </Col>
        </Row>
    );
}
