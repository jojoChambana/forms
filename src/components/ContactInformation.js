import { TextField } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import { useFormContext, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default function DonorInfo(props) {
    const { register } = useFormContext(); // retrieve all hook methods
    const { errors } = useForm();
    // const resolver = useYupValidationResolver(validationSchema);
    // const { handleSubmit } = useForm({ resolver });
    return (
        <Row>
            <Col xs={12} md={4}>
                <TextField {...register("contactFullName")} required placeholder='Contact full name' className="maxWidth" label="Contact full name" />
                <ErrorMessage errors={errors} name="singleErrorInput" />
            </Col>
            <Col xs={12} md={2}>
                <TextField type="tel" placeholder="Phone" required {...register("contactPhone", { pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i })} label="Phone" className="maxWidth" />
            </Col>
            <Col xs={12} md={2}>
                <TextField {...register("contactEmail")} required placeholder='Email' type="email" label="Email" className="maxWidth" />
            </Col>
            <Col xs={12} md={4}>
                <TextField {...register("collegeName")} required placeholder='College name' label="College name" className="maxWidth" />
            </Col>
        </Row>
    );
}

