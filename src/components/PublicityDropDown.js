import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

export default function PublicityDropDown() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [publicity, setPublicity] = React.useState('');
    const handleChange = (event) => {

        setPublicity(event.target.value);

    };
    // console.log({ ...register(publicity) })

    return (
        <Row className='mb-0'>
            <Col xs={12} md={3}>
                <FormControl className='maxWidth'>
                    <InputLabel id="publicityCode">
                        Contact/Publicity Code
                    </InputLabel>
                    <Select
                        labelId="publicityCode"
                        id="publicityCode"
                        label="Contact/Publicity Code*"
                        required
                        value={publicity}
                        onChange={handleChange}
                    >
                        <MenuItem {...register("No Restrictions")} value={"No restrictions"} >No Restrictions</MenuItem>
                        <MenuItem {...register("No Personal Contact")} value={"No personal contact"}>No Personal Contact</MenuItem>
                        <MenuItem {...register("No Publicity")} value={"No publicity"}>No Publicity</MenuItem>
                        <MenuItem {...register("No Contact/Publicity")} value={"No contact/publicity"}>
                            No Contact/Publicity
                        </MenuItem>
                        <MenuItem {...register("Anonymous")} value={"Anonymous"}>Anonymous</MenuItem>
                    </Select>
                </FormControl>
            </Col>
        </Row>
    )
}

