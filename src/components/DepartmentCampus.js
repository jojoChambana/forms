import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';


export default function DepartmentCampus(props) {
    const { register } = useFormContext(); // retrieve all hook methods
    const handleChange = (event) => {
        const updatedStateVariable = {
            ...props.dataValues,

            [event.currentTarget.name]: event.currentTarget.value,
        };
        console.log(updatedStateVariable);
        props.updateStateVariable(updatedStateVariable);
    };
    return (
        <Box>
            <FormControl>
                <RadioGroup
                    aria-labelledby="campus-Location"
                    defaultValue="Urbana"
                    name="campusLocation-radio-buttons-group"
                >
                    <Row>
                        <Col>
                            <FormControlLabel value="Urbana" control={<Radio {...register("Campus Location")} />} label="Urbana" />
                        </Col>
                        <Col>
                            <FormControlLabel value="Chicago" control={<Radio {...register("Campus Location")} />} label="Chicago" />
                        </Col>
                        <Col>
                            <FormControlLabel value="Springfield" control={<Radio {...register("Campus Location")} />} label="Springfield" />
                        </Col>
                    </Row>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}
