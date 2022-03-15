import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import DomesticAddress from "./DomesticAddress";
import ForeignAddress from "./ForeignAddress";
import { useFormContext } from "react-hook-form";
import { Row } from "react-bootstrap";

export default function Address({ prefix, isRequired = true }) {
    const { getValues, setValue, register } = useFormContext();

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

        // console.log(
        //     "handleChange",
        //     prefix,
        //     event.target.checked,
        //     `${prefix}ForeignAddressCheckbox`,
        //     getValues(`${prefix}ForeignAddressCheckbox`),
        //     getValues("contactFullName")
        // );

        //setChecked(event.target.checked); // Change the state value
        // console.log(event.target.checked);
    };

    return (
        <>
            <Row className="p-0">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...register(`${prefix}ForeignAddressCheckbox`)}
                                id={`${prefix}ForeignAddressCheckbox`}
                                onChange={handleChange}
                            />
                        }
                        label="Check for Foreign Address"
                        checked={checked}
                    />
                </FormGroup>
                {checked ? (
                    <ForeignAddress prefix={prefix} isRequired={isRequired} />
                ) : (
                    <DomesticAddress prefix={prefix} isRequired={isRequired} />
                )}
            </Row>
        </>
    );
}
