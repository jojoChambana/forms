import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';
import DomesticAddress from './DomesticAddress';
import ForeignAddress from './ForeignAddress';

export default function GiftTribute(props) {
    const { register } = useFormContext(); // retrieve all hook methods
    const [visable, setVisable] = useState(false);
    const handleChange = () => {
        setVisable(!visable);
    }

    const [visableTribute, setVisableTribute] = useState(false);
    const handleChangeTribute = (event) => {
        setVisableTribute(!visableTribute)
    };

    const [visableAddressToggle, setVisableAddressToggle] = useState(false);
    const handleChangeAddressToggle = (event) => {
        setVisableAddressToggle(!visableAddressToggle)
    };

    const divStyle = {
        flexBasis: 'content',
        msFlexPreferredSize: 'content'
    };
    return (
        <FormGroup>
            <Row className='mb-0'>
                <Col>
                    <FormControlLabel label="Check if this gift is a tribute" control={<Checkbox {...register("Tribute")} placeholder="Check if this gift is a tribute" onChange={handleChange} />} />
                </Col>
            </Row>
            {
                visable && (
                    <>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="campus-Location"
                                defaultValue="In Memory Of"
                                name="gift-tribute-radio-buttons-group"
                                onChange={handleChangeTribute}
                            >
                                <Row className='mb-0'>
                                    <Col xs={6} md={2} style={divStyle}>
                                        <FormControlLabel value="In Memory Of" control={<Radio {...register("Gift Tribute")} />} label="In Memory Of" />
                                    </Col>
                                    <Col xs={6} md={2} style={divStyle}>
                                        <FormControlLabel value="In Honor Of" control={<Radio {...register("Gift Tribute")} />} label="In Honor Of" />
                                    </Col>
                                </Row>
                                <Row className='mb-0'>
                                    {
                                        !visableTribute ? (
                                            <>
                                                <Col xs={12} >
                                                    <Row className='mb-0'>
                                                        <Col xs={12} md={4}>
                                                            <TextField placeholder='TED Constiutent ID' label='TED Constiutent ID' {...register("Ted constituent ID")} className='maxWidth' />
                                                        </Col>

                                                        <Col xs={12} md={4}>
                                                            <TextField placeholder='Deceased Full Name' required label='Deceased Full Name' {...register("Deceased Full Name")} className='maxWidth' />
                                                        </Col>
                                                        <Col xs={12} md={4}>
                                                            <FormGroup>
                                                                <FormControlLabel control={<Checkbox />} label="New Address" {...register("In Honor New Address")} />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </>
                                        )
                                            : (
                                                <Col xs={12}>
                                                    <Row className='mb-0'>
                                                        <Col xs={12} md={4}>
                                                            <TextField placeholder='TED Constiutent ID' label='TED Constiutent ID' {...register("inHonorTedID")} className='maxWidth' />
                                                        </Col>
                                                        <Col xs={12} md={4}>
                                                            <TextField placeholder='Honoree Full Name' label='Honoree Full Name' {...register("honoreeFullName")} className='maxWidth' />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            )
                                    }
                                </Row>
                            </RadioGroup>
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={handleChangeAddressToggle} />} placeholder='Foreign Address' label='Foreign Address' />
                        </FormGroup>
                        {
                            visableAddressToggle ? (<ForeignAddress />) : (<DomesticAddress />)
                        }
                        <Row>
                            <Col xs={12} md={4}>
                                <TextField type="tel" placeholder='Designation phone number' label='Phone number' {...register("designationPhoneNumber")} className='maxWidth' />
                            </Col>
                            <Col xs={12} md={4}>
                                <TextField type="email" placeholder='Designation email' label='Email' {...register("designationEmail")} className='maxWidth' />
                            </Col>
                        </Row>
                    </>
                )
            }
        </FormGroup>

    )

}
