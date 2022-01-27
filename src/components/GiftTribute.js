import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import DomesticAddress from './DomesticAddress';
import ForeignAddress from './ForeignAddress';

export default function GiftTribute({ errors, register }) {

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
        <>
            <Typography variant="h5" component="h3">Tribute</Typography>
            <FormGroup>
                <Row className='mb-0'>
                    <Col>
                        <FormControlLabel label="Check if this gift is a tribute" control={<Checkbox {...register("tribute")} placeholder="Check if this gift is a tribute" onChange={handleChange} />} />
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
                                            <FormControlLabel value="In Memory Of" control={<Radio {...register("giftTribute")} />} label="In Memory Of" />
                                        </Col>
                                        <Col xs={6} md={2} style={divStyle}>
                                            <FormControlLabel value="In Honor Of" control={<Radio {...register("giftTribute")} />} label="In Honor Of" />
                                        </Col>
                                    </Row>
                                    <Row className='mb-0'>
                                        {
                                            !visableTribute ? (
                                                <>
                                                    <Col xs={12} >
                                                        <Row className='mb-0'>
                                                            <Col xs={12} md={4}>
                                                                <TextField placeholder='TED Constiutent ID' label='TED Constiutent ID' {...register("tedconstituentID")} className='maxWidth' />
                                                            </Col>

                                                            <Col xs={12} md={4}>
                                                                <TextField placeholder='Deceased Full Name' required label='Deceased Full Name' {...register("deceasedFullName")} className='maxWidth' />
                                                            </Col>
                                                            <Col xs={12} md={4}>
                                                                <FormGroup>
                                                                    <FormControlLabel control={<Checkbox />} label="New Address" {...register("inMemoryNewAddress")} />
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
                                <FormControlLabel control={<Checkbox onChange={handleChangeAddressToggle} />} {...register("inMemoryForeignAddress")} placeholder='Foreign Address' label='Foreign Address' />
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
        </>
    )

}
