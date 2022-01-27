import { TextField } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import PhoneInput from './UI/PhoneInput';

export default function DonorInfo({ errors, register }) {

    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField {...register("contactFullName")} required placeholder='Contact full name' className="maxWidth" label="Contact full name" />
                <ErrorMessage errors={errors} name="singleErrorInput" />
            </Col>
            <Col xs={12} md={3}>
                {/* <TextField type="tel" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} placeholder="Phone" required {...register("contactPhone")} label="Phone" className="maxWidth" /> */}
                <PhoneInput />
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

