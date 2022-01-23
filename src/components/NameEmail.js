import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';



export default function NameEmail() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [value, setValue] = React.useState(new Date());
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Col xs={12} md={3}>
                <TextField {...register("departmentName")} required placeholder='Department name' className="maxWidth" label="Department name" />

            </Col>
            <Col xs={12} md={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker {...register("donationDate")} label="Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Col>
            <Col xs={12} md={3}>
                <TextField {...register("preparedBy")} required placeholder='Prepared by' className="maxWidth" label="Prepared by" />
            </Col>
            <Col xs={12} md={4}>
                <TextField {...register("unitReferenceNumber")} placeholder='Unit reference number' className="maxWidth" label="Unit reference number" />
            </Col>
        </>
    );
}
