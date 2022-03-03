import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import React, { useState } from "react";

export default function DepartmentCampus() {
    const [radioChanged, setRadioChanged] = useState(false); // needed to force re-render
    const { getValues, setValue } = useFormContext();
    
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
        </>
    );
}
