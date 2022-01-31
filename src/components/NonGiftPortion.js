import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'

export default function NonGiftPortion({ errors, setValue, register }) {

    const [visable, setVisable] = useState(false);
    // const [visible, setVisible] = useState(false);
    const handleChange = () => {
        setVisable(!visable);
    }

    const myHandleChange = (event) => {
        // setValue("giftTotals", event.target.value + getValues.opportunityAmount)
        setValue("nonGiftTotals", event.target.value)
    };
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
                    {/* <Col xs={12} md={4}>
                        <TextField {...register("Non-gift TED Id")} placeholder="Non-Gift TED Designation ID" label="Non-gift TED designation ID" className="maxWidth" /></Col> */}
                    <Col xs={12} md={4}>
                        <TextField name="nonGiftTed" placeholder='Non-Gift TED Designation ID' label="Non-gift TED designation ID" {...register("nonGiftTedId")} onChange={myHandleChange} className="maxWidth" />
                    </Col>

                    <Col xs={12} md={4}>
                        <div className='dollarAmount'>
                            <TextField {...register("giftTedAmount")} required placeholder="Gift amount" label="Gift amount" className="maxWidth" />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='dollarAmount'>
                            <TextField {...register("nonGiftTedAmount")} required placeholder="Non-gift amount" label="Non-gift amount" className="maxWidth" />
                        </div>
                    </Col>
                </Row>
            )}
        </FormGroup>
    )
}
