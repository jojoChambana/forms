import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormContext } from 'react-hook-form';

export default function ForeignCheckBox({ errors, register }) {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox {...register("foreignaddress")} />} label="Check for foreign address" />
        </FormGroup>
    );
}
