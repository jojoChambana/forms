    import {
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl,
    FormLabel
} from "@mui/material";

import {  useFormContext } from "react-hook-form";

export default function RadioButtons({variableName,label = "", values, radioChangedFlag, setRadioChangedFlag}) {

    const { getValues, setValue } = useFormContext();
    return (
            <FormControl>
                {(label !== "") &&
                <FormLabel component="legend">{label}</FormLabel>
                }                
                <RadioGroup
                row
                aria-labelledby={variableName}
                value={getValues(variableName)}
                onChange={(event) => {
                    setValue(variableName, event.target.value); // set the rect hook array element appropriately
                    setRadioChangedFlag(!radioChangedFlag); // this will trigger a re-render of the page to hide/show elements                                        
                    }
                }
                name={variableName}
            >
                {values.map((value) => {
                    return (
                    <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                    );    
                })}
                </RadioGroup> 
            </FormControl>
    );
}
