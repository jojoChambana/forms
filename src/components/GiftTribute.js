import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "react-phone-number-input/style.css";

import Address from "./Address";

export default function GiftTribute({
    errors,
    register,
    getValues,
    setValue,
    checked,
}) {
    const [visible, setvisible] = useState(false);

    const handleChange = (event) => {
        setvisible(event.target.checked);
        setValue("designation.tributeChecked", event.target.checked); // set the rect hook element appropriately
    };

    const [isMemorial, setisMemorial] = useState(false);

    const handleMemHon = (event) => {
        setisMemorial(event.target.value === "In memory of");
        //setValue("designation.tributeChecked", event.target.checked); // set the rect hook element appropriately
    };

    // const [visibleAddressToggle, setvisibleAddressToggle] = useState(false);
    // const handleChangeAddressToggle = (event) => {
    //     setvisibleAddressToggle(!visibleAddressToggle);
    // };

    const divStyle = {
        flexBasis: "content",
        msFlexPreferredSize: "content",
    };

    return (
        <>
            <Typography variant="h5" component="h3">
                Tribute
            </Typography>
            <FormGroup>
                <Row className="mb-0">
                    <Col>
                        <FormControlLabel
                            label="Check if this gift is a tribute"
                            defaultValue={false}
                            checked={checked}
                            control={
                                <Checkbox
                                    {...register("tributeChecked")}
                                    placeholder="Check if this gift is a tribute"
                                    onChange={handleChange}
                                />
                            }
                        />
                    </Col>
                </Row>
                {visible && (
                    <>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="campus-Location"
                                defaultValue="In memory of"
                                name="gift-tribute-radio-buttons-group"
                                onChange={handleMemHon}
                            >
                                <Row className="mb-0">
                                    <Col xs={6} md={2} style={divStyle}>
                                        <FormControlLabel
                                            value="In memory of"
                                            control={
                                                <Radio
                                                    {...register("giftTribute")}
                                                />
                                            }
                                            label="In memory of"
                                        />
                                    </Col>
                                    <Col xs={6} md={2} style={divStyle}>
                                        <FormControlLabel
                                            value="In honor Of"
                                            control={
                                                <Radio
                                                    {...register("giftTribute")}
                                                />
                                            }
                                            label="In honor of"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-0">
                                    {!isMemorial ? (
                                        <>
                                            <Col xs={12}>
                                                <Row className="mb-0">
                                                    <Col xs={12} md={4}>
                                                        <TextField
                                                            placeholder="Deceased Full Name"
                                                            required
                                                            label="Deceased Full Name"
                                                            {...register(
                                                                "deceasedFullName"
                                                            )}
                                                            className="maxWidth"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </>
                                    ) : (
                                        <Col xs={12}>
                                            <Row className="mb-0">
                                                <Col xs={12} md={4}>
                                                    <TextField
                                                        placeholder="Honoree Full Name"
                                                        label="Honoree Full Name"
                                                        {...register(
                                                            "honoreeFullName"
                                                        )}
                                                        className="maxWidth"
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    )}
                                </Row>
                            </RadioGroup>
                        </FormControl>
                        <Row>
                            <Col xs={12} md={4}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="New Address"
                                        {...register("inMemoryNewAddress")}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Address
                            errors={errors}
                            register={register}
                            getValues={getValues}
                            prefix="tribute"
                            setValue={setValue}
                        />

                        <Row>
                            <Col xs={12} md={4}>
                                <TextField
                                    type="tel"
                                    placeholder="Designation phone number"
                                    label="Phone number"
                                    {...register("designationPhoneNumber")}
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <TextField
                                    type="email"
                                    placeholder="Designation email"
                                    label="Email"
                                    {...register("designationEmail")}
                                    className="maxWidth"
                                />
                            </Col>
                        </Row>
                    </>
                )}
            </FormGroup>
        </>
    );
}
