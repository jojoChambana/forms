import React from "react";
import { Checkbox } from "@mui/material";
import { useFormContext } from 'react-hook-form';

function NestedNewDonorCheckBox() {
    const { register } = useFormContext(); // retrieve all hook methods
    return (
        <>
            <Checkbox {...register("New donor?")} />
        </>
    );
}

export default NestedNewDonorCheckBox