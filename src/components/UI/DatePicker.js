import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import * as React from "react";
import { useFormContext } from "react-hook-form";

export default function DatePicker(props) {
    const [value, setValue] = React.useState(new Date());

    const { register } = useFormContext(); // retrieve all hook methods
    // console.table(register)
    const handleChange = (newValue) => {
        setValue(props.newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker  {...register("Date")} label="Date"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}