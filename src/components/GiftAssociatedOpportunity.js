import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';

export default function GiftAssociatedOpportunity() {
    const { register } = useFormContext(); // retrieve all hook methods
    const [visable, setVisable] = useState(false);
    const handleChange = () => {
        setVisable(!visable);
    }
    return (
        <FormGroup>
            <Row className='mb-0'>
                <Col>
                    <FormControlLabel label="Check if this gift is associated with an opportunity" control={<Checkbox placeholder="Is this gift associated with an opportunity" {...register("giftAssociatedWithOpportunity")} onChange={handleChange} />} />
                </Col>
            </Row>
            {visable && (
                <>
                    <Row>
                        <Col xs={12} md={4}><TextField {...register("tedHouseholdId")} required placeholder="TED Household ID" label="TED Household ID" className="maxWidth" /></Col>
                        <Col xs={12} md={8}><TextField {...register("tedHouseholdName")} required placeholder="Household name" label="Household name" className="maxWidth" /></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}><TextField {...register("tedPlanName")} required placeholder="Plan name" label="Plan name" className="maxWidth" /></Col>
                        <Col xs={12} md={4}><TextField {...register("tedOpportunityAmount")} required placeholder="Opportunity amount" label="Opportunity amount" className="maxWidth" /></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}><TextField {...register("actualAskDate")} required placeholder="Actual ask date" label="Actual ask date" className="maxWidth" /></Col>
                        <Col xs={12} md={6}><TextField {...register("primaryPlanManagerName")} required placeholder="Primary plan manager name" label="Primary plan manager name" className="maxWidth" /></Col>
                    </Row>
                </>
            )}
        </FormGroup>
    )
}
