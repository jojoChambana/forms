import { TextField, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";
import PhoneInput from "react-phone-number-input";
import { Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
export default function DonorInfo({ register, errors, control }) {
    return (
        <>
            <Row>
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
                        placeholder="Contact full name"
                        className="maxWidth"
                        label="Contact full name"
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
                <Col xs={12} md={2}>
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
                <Col xs={12} md={4}>
                    <TextField
                        {...register("collegeName")}
                        required
                        placeholder="College name"
                        label="College name"
                        className="maxWidth"
                    />
                </Col>
            </Row>
        </>
    );
}
