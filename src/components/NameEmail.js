import { TextField } from '@mui/material';
import { Col } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import DatePicker from './UI/DatePicker';


export default function NameEmail() {
    function NestedNameEmailInput() {
        const { register } = useFormContext(); // retrieve all hook methods
        return (
            <>
                <Col xs={12} md={3}>
                    <TextField {...register("deptName")} required placeholder='Department name' className="maxWidth" label="Department name" />

                </Col>
                <Col xs={12} md={3}>
                    <TextField {...register("preparedBy")} required placeholder='Prepared by' className="maxWidth" label="Prepared by" />
                </Col>
                <Col xs={12} md={2}>
                    <DatePicker />
                </Col>
                <Col xs={12} md={4}>
                    <TextField {...register("unitReferenceNumber")} placeholder='Unit reference number' className="maxWidth" label="Unit reference number" />
                </Col>
            </>
        );

    }
    return (
        <NestedNameEmailInput />
    )
}
