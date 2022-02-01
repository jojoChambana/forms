import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useState } from 'react';
import DomesticAddress from './DomesticAddress';
import ForeignAddress from './ForeignAddress';

export default function Address({ errors, register, prefix, setValue, getValues }) {


    const [checked, setChecked] = useState(getValues(`${prefix}ForeignAddressCheckbox`)); // Get initial value from the checkbox
    // console.log("Initial checked state", checked);

    const handleChange = (event) => {
        // setChecked(!checked);
        setValue(`${prefix}ForeignAddressCheckbox`, setChecked(event.target.checked)) // Change value of array in formVariables
        //setChecked(event.target.checked); // Change the state value
        // console.log(event.target.checked);
    };

    return (
        <>

            <FormControlLabel control={<Checkbox {...register(`${prefix}ForeignAddressCheckbox`)} id={`${prefix}ForeignAddressCheckbox`} onChange={handleChange} />} label="Check for foreign address" checked={checked} />
            {/* <Checkbox {...register(`${prefix}ForeignAddressCheckbox`)} id={`${prefix}ForeignAddressCheckbox`} onChange={handleChange} label="Check for foreign address" /> */}

            {checked ?
                <ForeignAddress errors={errors} register={register} prefix={prefix} />
                :
                <DomesticAddress errors={errors} register={register} prefix={prefix} />
            }
        </>
    )
}
