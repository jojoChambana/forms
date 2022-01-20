import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';

export default function NonGiftPortion() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [visable, setVisable] = useState(false);
    // const [visible, setVisible] = useState(false);
    const handleChange = () => {
        setVisable(!visable);
    }
    return (
        <FormGroup>
            <Row className='mb-0'>
                <Col>
                    {/* <Typography>Is there a non-gift portion?</Typography> */}
                    <FormControlLabel label="Check for non-gift portion" control={<Checkbox placeholder="Is there a non-gift portion?" {...register("nonGiftPortion")} onChange={handleChange} />} />
                </Col>
            </Row>
            {visable && (
                <Row>
                    <Col xs={12} md={4}><TextField {...register("nonGiftTedDesignationId")} placeholder="Non-Gift TED Designation ID" label="Non-gift TED designation ID" className="maxWidth" /></Col>
                    <Col xs={12} md={4}><TextField {...register("giftTedDesignationGiftAmount")} required placeholder="Gift amount" label="Gift amount" className="maxWidth" /></Col>
                    <Col xs={12} md={4}><TextField {...register("nonGiftTedDesignationGiftAmount")} required placeholder="Non-gift amount" label="Non-gift amount" className="maxWidth" /></Col>
                </Row>
            )}
        </FormGroup>
    )
}
