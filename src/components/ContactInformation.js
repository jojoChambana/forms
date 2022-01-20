import { TextField } from '@mui/material';
import { Col } from 'react-bootstrap';
import { useFormContext, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import { useCallback } from 'react';
export default function DonorInfo(props) {
    const { register } = useFormContext(); // retrieve all hook methods
    const useYupValidationResolver = validationSchema =>
        useCallback(
            async data => {
                try {
                    const values = await validationSchema.validate(data, {
                        abortEarly: false
                    });

                    return {
                        values,
                        errors: {}
                    };
                } catch (errors) {
                    return {
                        values: {},
                        errors: errors.inner.reduce(
                            (allErrors, currentError) => ({
                                ...allErrors,
                                [currentError.path]: {
                                    type: currentError.type ?? "validation",
                                    message: currentError.message
                                }
                            }),
                            {}
                        )
                    };
                }
            },
            [validationSchema]
        );

    const validationSchema = yup.object({
        donorName: yup.string().required("Required"),
        phoneNumber: yup.string().required("Required"),
        emailAddress: yup.string().email('Invalid email format').required('Required'),
        collegeName: yup.string().required("Required"),
    });


    function NestedContactInformationInput() {
        const { errors } = useForm();
        const resolver = useYupValidationResolver(validationSchema);
        const { handleSubmit } = useForm({ resolver });
        return (
            <>
                <Col xs={12} md={4}>
                    <TextField {...register("donorName")} required placeholder='Contact full name' className="maxWidth" label="Contact full name" />
                    <ErrorMessage errors={errors} name="singleErrorInput" />
                </Col>
                <Col xs={12} md={2}>
                    <TextField type="tel" placeholder="Phone" required {...register("phoneNumber", { pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i })} label="Phone" className="maxWidth" />
                </Col>
                <Col xs={12} md={2}>
                    <TextField {...register("emailAddress")} required placeholder='Email' type="email" label="Email" className="maxWidth" />
                </Col>
                <Col xs={12} md={4}>
                    <TextField {...register("collegeName")} required placeholder='College name' label="College name" className="maxWidth" />
                </Col>
            </>
        );

    }
    return (
        <NestedContactInformationInput />
    )
}

