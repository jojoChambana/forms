import { TextField } from '@mui/material';
import { Col } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

export default function TotalDonationAmount() {

    const { register, setValue, getValues } = useFormContext(); // retrieve all hook methods
    const parseNum = (num) => {
        let newValue = parseFloat(num)

        if (isNaN(newValue))
            newValue = 0;

        return (newValue)
    }
    const myHandleChange = (event) => {
        setValue("giftTotals", parseNum(event.target.value) + parseNum(getValues("totalDesignationAmount")))
    };

    return (
        <div className='mb-4 d-flex flex-row-reverse'>
            <Col xs={12} md={3} className="dollarAmount">
                <TextField name="totalDonationAmount" placeholder='Total Donation Amount' label="TotalDonationAmount" {...register("totalDonationAmount")} onChange={myHandleChange} className="maxWidth" />
            </Col>
        </div>
    );
}
