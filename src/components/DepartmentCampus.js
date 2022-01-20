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
            {/* <FormControl component="fieldset" >
                <FormLabel component="legend">Select Campus</FormLabel>
                <RadioGroup
                    {...register("Campus")}
                    row
                    aria-label="trustType"
                    name="row-radio-buttons-group"
                // defaultValue="Urbana"
                >
                    <FormControlLabel
                        control={<Radio />}
                        value="Urbana"
                        label="Urbana"
                        name="campus"
                        checked={(props.dataValues?.campus || "Urbana") === "Urbana"}
                        onChange={handleChange}
                    />{" "}
                    <FormControlLabel
                        control={<Radio />}
                        value="Chicago"
                        label="Chicago"
                        name="campus"
                        checked={(props.dataValues?.campus || "Urbana") === "Chicago"}
                        onChange={handleChange}
                    />{" "}
                    <FormControlLabel
                        control={<Radio />}
                        value="Springfield"
                        label="Springfield"
                        name="campus"
                        checked={(props.dataValues?.campus || "Urbana") === "Springfield"}
                        onChange={handleChange}
                    />{" "}
                </RadioGroup>
            </FormControl> */}
            <FormControl>
                <RadioGroup
                    aria-labelledby="campus-Location"
                    defaultValue="Urbana"
                    name="campusLocation-radio-buttons-group"
                >
                    <Row>
                        <Col>
                            <FormControlLabel value="Urbana" control={<Radio {...register("campusLocation")} />} label="Urbana" />
                        </Col>
                        <Col>
                            <FormControlLabel value="Chicago" control={<Radio {...register("campusLocation")} />} label="Chicago" />
                        </Col>
                        <Col>
                            <FormControlLabel value="Springfield" control={<Radio {...register("campusLocation")} />} label="Springfield" />
                        </Col>
                    </Row>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}
