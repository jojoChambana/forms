import { Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import GiftAssociatedOpportunity from './GiftAssociatedOpportunity';
import GiftAssociatedPledge from './GiftAssociatedPledge';
import NonGiftPortion from './NonGiftPortion';

export default function DesignationInformaiton({ errors, register, setValue }) {

    // const formMethods = useForm();

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>

            <Typography variant="h5" component="h3">Designation Information</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...register("newDesignationRequested")} onChange={handleChange} />} label="New Designation Requested" />
            </FormGroup>

            {checked ?
                <>
                    <Row>
                        {/* <Col xs={12} md={4} className='offset-md-2'>
                            <TextField {...register("departmentContactEmail")} required type="email" placeholder="Department Contact Email" label="Department Contact Email" className="maxWidth" />
                        </Col> */}
                        {/* <Col xs={12} md={4}>
                            <TextField {...register("departmentContact")} required placeholder="Department Contact" label="Department Contact" className="maxWidth" />
                        </Col> */}
                    </Row>
                </> :
                <Row>
                    {/* <Col xs={12} md={3} className='offset-md-2'>
                        <TextField {...register("tedDesignationId")} required placeholder="TED Designation ID" label="TED Designation ID" className="maxWidth" />
                    </Col> */}
                </Row>
            }
            <Row>
                {/* <Col xs={12} md={6} className='offset-md-2'>
                    <TextField {...register("tedDesignationTitle")} required placeholder="Designation Title" label="Designation Title" className="maxWidth" />
                </Col> */}
                {/* </Row>
            <Row className='d-flex flex-row-reverse'> */}
                <Col xs={12} md={4}>
                    {/* <div className='dollarAmount maxWidth'>
                        <TextField label="Designation Amount" placeholder='Designation Amount' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  {...register("totalDesignationAmount")} />
                    </div> */}
                </Col>

            </Row>

            <NonGiftPortion register={register} setValue={setValue} />
            <GiftAssociatedPledge register={register} errors={errors} />
            <Row>
                {/* <Col>
                    <GiftAssociatedOpportunity {...register(`giftAssociatedOpportunity`)} />
                </Col> */}
            </Row>
            <Row>
                {/* <Col sm={12}>
                    <TextField placeholder='Comments' label='Comments' {...register('designationAdditionalComments')} className="maxWidth" />
                </Col> */}
            </Row>
            <Row>
                {/* <Col xs={6} md={3}>
                    <Button placeholder='Add additional designation' label='Add additional designation'>Add additional designation</Button>
                </Col>
                <Col xs={6} md={3}>
                    <Button placeholder='Remove additional designation' label='Remove additional designation'>Remove additional designation</Button>
                </Col> */}
            </Row>
        </>
    )
}
