import { Button, TextField } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm, useFormContext, useFormState } from 'react-hook-form';
import FieldArray from './FieldArray';

const defaultValues = {
    test: [
        {
            name: "useFieldArray1",
            nestedArray: [{ field1: "field1", field2: "field2" }]
        },
        {
            name: "useFieldArray2",
            nestedArray: [{ field1: "field1", field2: "field2" }]
        }
    ]
};

export default function Designations() {
    // const { register } = useFormContext(); // retrieve all hook methods
    let renderCount = 0; // for Add/Remove designation
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        reset,
        setValue
    } = useForm({
        defaultValues
    });
    // const onSubmit = (data) => console.log("data", data);


    return <>

        <>
            <h1>Array of Array Fields</h1>
            <p>
                The following example demonstrate the ability of building nested array
                fields.
            </p>

            <FieldArray {...{ control, register, defaultValues, getValues, setValue, errors }} />

            <button type="button" onClick={() => reset(defaultValues)}>
                Reset
            </button>

            <input type="submit" />
        </>


        {/* <Row>
            <Col xs={12} md={6} className='offset-md-2'>
                <TextField {...register("tedDesignationTitle")} required placeholder="Designation Title" label="Designation Title" className="maxWidth" />
            </Col>
            <Col xs={12} md={4}>
                <div className='dollarAmount maxWidth'>
                    <TextField label="Designation Amount" placeholder='Designation Amount' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  {...register("totalDesignationAmount")} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <TextField placeholder='Comments' label='Comments' {...register('designationAdditionalComments')} className="maxWidth" />
            </Col>
        </Row> */}

    </>;
}
