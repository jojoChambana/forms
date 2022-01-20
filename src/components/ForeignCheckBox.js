import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormContext } from 'react-hook-form';

export default function ForeignCheckBox() {
    function NestedForeignDonorCheckBox() {
        const { register } = useFormContext(); // retrieve all hook methods

        return (
            <FormGroup>
                <FormControlLabel control={<Checkbox {...register("foreignDonor")} />} label="Check for foreign address" />
            </FormGroup>
        );
    }
    return (
        <NestedForeignDonorCheckBox />
    )

}
