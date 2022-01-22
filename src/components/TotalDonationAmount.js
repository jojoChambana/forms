import { TextField } from '@mui/material';
import { Col } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

export default function TotalDonationAmount() {

    const { register, setValue, getValues } = useFormContext(); // retrieve all hook methods

    const myHandleChange = (event) => {
        // setValue("giftTotals", event.target.value + getValues.opportunityAmount)
        setValue("giftTotals", event.target.value)
    };

    return (
        <div className='mb-4 d-flex flex-row-reverse'>
            <Col xs={12} md={3} className="dollarAmount">
                <TextField name="totalDonationAmount" placeholder='Total Donation Amount' label="Total Donation Amount" {...register("totalDonationAmount")} onChange={myHandleChange} className="maxWidth" />
            </Col>
        </div>
    );
}
