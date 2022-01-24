import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';



export default function NameEmail() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [value, setValue] = React.useState(new Date());
    const handleChange = (newValue) => {
        setValue(newValue);
        console.log(value);
    };
    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField {...register("departmentName")} required placeholder='Department name' className="maxWidth" label="Department name" />

            </Col>
            <Col xs={12} md={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {/* <DatePicker label="Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    /> */}
                    <DatePicker
                        type="date"
                        label="Date"
                        value={value}
                        {...register("datePrepared", { valueAsDate: false, })}
                        onChange={handleChange}
                        renderInput={(value) => <TextField {...value} />}
                    />
                </LocalizationProvider>
            </Col>
            <Col xs={12} md={3}>
                <TextField {...register("preparedBy")} required placeholder='Prepared by' className="maxWidth" label="Prepared by" />
            </Col>
            <Col xs={12} md={4}>
                <TextField {...register("unitReferenceNumber")} placeholder='Unit reference number' className="maxWidth" label="Unit reference number" />
            </Col>
        </Row>
    );
}
