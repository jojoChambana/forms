import { TextField, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";
import PhoneInput from "react-phone-number-input";
import { Controller, useFormContext } from "react-hook-form";
import "react-phone-number-input/style.css";
export default function DonorInfo() {
    const { register, errors, control } = useFormContext();

    return (
        <>
            <Row className="mt-3 mb-3">
                <Col>
                    <Typography variant="h5" component="h3">
                        Contact Information
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("contactFullName")}
                        required
                        placeholder="Contact Full Name"
                        className="maxWidth"
                        label="Contact Full Name"
                    />
                    <ErrorMessage errors={errors} name="singleErrorInput" />
                </Col>
                <Col xs={12} md={3}>
                    <div>
                        <Controller
                            name="phone-input"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                    {...register("contactPhone")}
                                    placeholder="Phone"
                                    value={value}
                                    onChange={onChange}
                                    defaultCountry="US"
                                    id="phone-input"
                                />
                            )}
                        />
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("contactEmail")}
                        // onChange={(e) => validateEmail(e)}
                        required
                        placeholder="Email"
                        type="email"
                        label="Email"
                        className="maxWidth"
                    ></TextField>
                </Col>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("collegeName")}
                        required
                        placeholder="College Name"
                        label="College Name"
                        className="maxWidth"
                    />
                </Col>
            </Row>
        </>
    );
}
