import { TextField } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useForm } from 'react-hook-form';



function PhoneField(register) {
    const { handleOnChange } = register;

    return (
        <>

            <MuiPhoneNumber variant="outlined" label="Phone" defaultCountry={'us'} onChange={handleOnChange} />
        </>
    );
}

export default (PhoneField);