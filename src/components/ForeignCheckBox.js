import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

export default function ForeignCheckBox({
    errors,
    register,
    setValue,
    getValues,
    prefix,
}) {
    const [checked, setChecked] = useState(
        getValues(`${prefix}ForeignAddressCheckbox`)
    ); // Get initial value from the checkbox
    // console.log("Initial checked state", checked);

    const handleChange = (event) => {
        // setChecked(!checked);
        setValue(
            `${prefix}ForeignAddressCheckbox`,
            setChecked(event.target.checked)
        ); // Change value of array in formVariables
        //setChecked(event.target.checked); // Change the state value
        // console.log(event.target.checked);
    };
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        {...register(`${prefix}ForeignAddressCheckbox`)}
                        id={`${prefix}ForeignAddressCheckbox`}
                        onChange={handleChange}
                    />
                }
                label="Check for foreign address"
                checked={checked}
            />
        </FormGroup>
    );
}
