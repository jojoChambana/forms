import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';
import DomesticAddress from './DomesticAddress';
import ForeignAddress from './ForeignAddress';

export default function Address(props) {
    const { register } = useFormContext(); // retrieve all hook methods
    const [checked, setChecked] = useState(false);
    // const prefix = props.prefix;
    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...register("foreignDonor")} onChange={handleChange} />} label="Check for foreign address" />
            </FormGroup>
            {checked ?
                <ForeignAddress prefix="hello" />
                :
                <DomesticAddress />
            }
        </>
    )
}
