import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';

export default function GiftAssociatedPledge() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [visable, setVisable] = useState(false);
    const handleChange = () => {
        setVisable(!visable);
    }
    return (
        <FormGroup>
            <Row className='mb-0'>
                <Col>
                    <FormControlLabel label="Check if this gift is associated with a pledge" control={<Checkbox placeholder="Is this gift associated with a pledge?" {...register("giftAssociatedWithPledge")} onChange={handleChange} />} />
                </Col>
            </Row>
            {visable && (
                <Row>
                    <Col xs={12} md={4}><TextField {...register("pledgeRevenueId")} placeholder="Pledge Revenue ID ID" label="Pledge Revenue ID" className="maxWidth" /></Col>
                </Row>
            )}
        </FormGroup>
    )
}
