import { TextField, Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import validator from 'validator';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Controller, useForm } from 'react-hook-form';
import "react-phone-number-input/style.css";
export default function DonorInfo({ register }) {
    const { handleSubmit, formState: { errors }, control } = useForm();
    const [emailError, setEmailError] = useState("");
    // const [phoneError, setPhoneError] = useState("");
    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError('Valid email :)')
        } else {
            setEmailError('Enter valid email!')
        }
    }

    // const validatePhone = (e) => {
    //     var phone = e.target.value
    //     if (validator.isPhone(phone)) {
    //         setPhoneError('Valid Phone: ')
    //     } else {
    //         setPhoneError('Enter a valid phone number')
    //     }
    // }




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
                    <TextField {...register("contactFullName")} required placeholder='Contact full name' className="maxWidth" label="Contact full name" />
                    <ErrorMessage errors={errors} name="singleErrorInput" />
                </Col>
                <Col xs={12} md={3}>
                    <div>
                        <Controller

                            name="phone-input"
                            control={control}
                            rules={{
                                validate: (value) => isValidPhoneNumber(value)
                            }}
                            render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                    {...register('contactPhone')}
                                    placeholder="Phone"
                                    value={value}
                                    onChange={onChange}
                                    defaultCountry="US"
                                    id="phone-input"
                                />
                            )}
                        />
                        {errors["phone-input"] && (
                            <p className="error-message">Invalid Phone</p>
                        )}
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <TextField {...register("contactEmail")} onChange={(e) => validateEmail(e)} required placeholder='Email' type="email" label="Email" className="maxWidth">
                        <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{emailError}</span>
                    </TextField>
                </Col>
                <Col xs={12} md={4}>
                    <TextField {...register("collegeName")} required placeholder='College name' label="College name" className="maxWidth" />
                </Col>
            </Row>
        </>
    );
}

