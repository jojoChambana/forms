import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export default function DepartmentCampus({ getValues, setValue }) {
    //    console.log('departmentcampus',formValues.campusLocation)

    const [radioChanged, setRadioChanged] = useState(false); // needed to force re-render

    let radioValue = getValues("campusLocation");

    const handleChange = (event) => {
        // console.log(event.target.value);

        setValue("campusLocation", event.target.value);
        setRadioChanged(!radioChanged); // needed to force re-render
        radioValue = event.target.value;
    };
    return (
        <>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="campus-Location"
                    value={radioValue}
                    onChange={handleChange}
                    name="campusLocation"
                >
                    <FormControlLabel
                        value="Urbana"
                        control={<Radio />}
                        label="Urbana"
                    />
                    <FormControlLabel
                        value="Chicago"
                        control={<Radio />}
                        label="Chicago"
                    />
                    <FormControlLabel
                        value="Springfield"
                        control={<Radio />}
                        label="Springfield"
                    />
                </RadioGroup>
            </FormControl>
            {/* <FormControl>
                <RadioGroup
                    aria-labelledby="campus-Location"
                    defaultValue={formValues.campusLocation}
                >
                    <Row>
                        <Col>
                            <FormControlLabel
                                value="Urbana"
                                control={
                                    <Radio {...register("campusLocation")} />
                                }
                                label="Urbana"
                            />
                        </Col>
                        <Col>
                            <FormControlLabel
                                value="Chicago"
                                control={
                                    <Radio {...register("campusLocation")} />
                                }
                                label="Chicago"
                            />
                        </Col>
                        <Col>
                            <FormControlLabel
                                value="Springfield"
                                control={
                                    <Radio {...register("campusLocation")} />
                                }
                                label="Springfield"
                            />
                        </Col>
                    </Row>
                </RadioGroup>
            </FormControl> */}
        </>
    );
}
