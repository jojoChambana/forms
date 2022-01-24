import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

export default function PublicityDropDown() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [publicityCode, setPublicity] = React.useState('');
    const handleChange = (event) => {
        setPublicity(event.target.value);
        // console.table(event.target.value)
    };

    return (
        <Row className='mb-0'>
            <Col xs={12} md={3}>
                <FormControl className='maxWidth' name="publicityCode">
                    <InputLabel id="publicityCode">
                        Contact/Publicity Code
                    </InputLabel>
                    <Select
                        {...register("publicityCode")}
                        labelId="publicityCode"
                        id="publicityCode"
                        label="Contact/Publicity Code*"
                        required

                        value={publicityCode}
                        onChange={handleChange}
                    >
                        <MenuItem value={"No restrictions"}>No Restrictions</MenuItem>
                        <MenuItem value={"No personal contact"}>No Personal Contact</MenuItem>
                        <MenuItem value={"No publicity"}>No Publicity</MenuItem>
                        <MenuItem value={"No contact/publicity"} >
                            No Contact/Publicity
                        </MenuItem>
                        <MenuItem value={"anonymous"} >Anonymous</MenuItem>
                    </Select>
                </FormControl>
            </Col>
        </Row>
    )
}

