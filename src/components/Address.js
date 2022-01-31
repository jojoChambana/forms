import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useState } from 'react';
import DomesticAddress from './DomesticAddress';
import ForeignAddress from './ForeignAddress';

export default function Address({ errors, register }) {

    const [checked, setChecked] = useState(false);
    // const prefix = props.prefix;
    const handleChange = (props) => {
        setChecked(!checked);
        // console.log(checked)

    };
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...register("foreignDonor")} onChange={handleChange} />} label="Check for foreign address" />
            </FormGroup>
            {checked ?
                <ForeignAddress errors={errors} register={register} />
                :
                <DomesticAddress errors={errors} register={register} />
            }
        </>
    )
}
