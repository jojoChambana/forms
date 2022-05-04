import { DatePicker, LocalizationProvider } from "@mui/lab";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import React from "react";

export default function BasicDatePicker({ labelName, fieldName }) {
    const { setValue, getValues } = useFormContext();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={labelName}
                value={getValues(fieldName)}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
