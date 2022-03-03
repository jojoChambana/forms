import { TextField } from '@mui/material';
import { Col } from 'react-bootstrap';

export default function TotalDonationAmount({ register }) {

    return (
        <div className='mb-4 d-flex flex-row-reverse'>
            <Col xs={12} md={3} className="dollarAmount">
                <TextField name="totalDonationAmount" placeholder='Total Donation Amount' label="Total Donation Amount" {...register("totalDonationAmount")} className="maxWidth" />
            </Col>
        </div>
    );
}
