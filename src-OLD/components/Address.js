import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import DomesticAddress from "./DomesticAddress";
import ForeignAddress from "./ForeignAddress";

export default function Address({
    errors,
    register,
    prefix,
    setValue,
    getValues,
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

        console.log(
            "handleChange",
            prefix,
            event.target.checked,
            `${prefix}ForeignAddressCheckbox`,
            getValues(`${prefix}ForeignAddressCheckbox`),
            getValues("contactFullName")
        );

        //setChecked(event.target.checked); // Change the state value
        // console.log(event.target.checked);
    };

    return (
        <>
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
            {checked ? (
                <ForeignAddress
                    errors={errors}
                    register={register}
                    prefix={prefix}
                    getValues={getValues}
                    setValue={setValue}
                />
            ) : (
                <DomesticAddress
                    errors={errors}
                    register={register}
                    prefix={prefix}
                    getValues={getValues}
                    setValue={setValue}
                />
            )}
        </>
    );
}
