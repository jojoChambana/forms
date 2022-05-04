import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useFormContext } from "react-hook-form";

export default function DropDownList({
    variableName,
    label = "",
    values,
    dropDownChanged,
    setDropDownChanged,
}) {
    const { setValue } = useFormContext();

    return (
        <FormControl fullWidth required>
            <InputLabel id={`${variableName}Label`}>Commitment Type</InputLabel>
            <Select
                labelId={variableName}
                id={variableName}
                // value={getValues({variableName})}
                label={label}
                onChange={(event) => {
                    setValue(variableName, event.target.value);
                    setDropDownChanged(!dropDownChanged); // this will trigger a re-render of the page to hide/show elements
                }}
            >
                {values.map((value) => {
                    return (
                        <MenuItem key={value} value={value}>
                            {value}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}
