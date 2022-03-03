import React from "react";
import { Checkbox } from "@mui/material";

function NestedNewDonorCheckBox({ errors, register }) {

    return (
        <>
            <Checkbox {...register("newDonorCheckBox")} />
        </>
    );
}

export default NestedNewDonorCheckBox