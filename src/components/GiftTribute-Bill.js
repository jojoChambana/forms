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
    let giftTribute = getValues("giftTribute");
    if (giftTribute === "") {
        setValue("giftTribute", "In memory of");
        giftTribute = getValues("giftTribute");
    }
    const tributeChecked = getValues("tributeChecked");
    console.log("tributeChecked", tributeChecked);
    console.log("giftTribute", giftTribute);

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);
    const [showInMemoryOf, setShowInMemoryOf] = useState(
        giftTribute === "In memory of"
    );

    const handleTributeChange = (event) => {
        setValue("tributeChecked", event.target.checked); // set the rect hook element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const handleMemHon = (event) => {
        setValue("giftTribute", event.target.value); // set the rect hook element appropriately
        setShowInMemoryOf(event.target.value === "In memory of");
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
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
                            checked={tributeChecked}
                            control={
                                <Checkbox
                                    placeholder="Check if this gift is a tribute"
                                    onChange={handleTributeChange}
                                />
                            }
                        />
                    </Col>
                </Row>
                {tributeChecked && (
                    <>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="campus-Location"
                                name="gift-tribute-radio-buttons-group"
                                value={giftTribute}
                                onChange={handleMemHon}
                            >
                                <Row className="mb-0">
                                    <Col xs={6} md={2} style={divStyle}>
                                        <FormControlLabel
                                            value="In memory of"
                                            control={<Radio />}
                                            label="In memory of"
                                        />
                                    </Col>
                                    <Col xs={6} md={2} style={divStyle}>
                                        <FormControlLabel
                                            value="In honor Of"
                                            control={<Radio />}
                                            label="In honor of"
                                        />
                                    </Col>
                                </Row>
                            </RadioGroup>
                            <Row className="mb-0">
                                <Col xs={12}>
                                    <Row
                                        className={
                                            showInMemoryOf
                                                ? "mb-0"
                                                : "hiddenText"
                                        }
                                    >
                                        <Col xs={12} md={4}>
                                            <TextField
                                                placeholder="Deceased Full Name"
                                                required={showInMemoryOf}
                                                name="Deceased"
                                                label="Deceased Full Name"
                                                {...register(
                                                    "deceasedFullName"
                                                )}
                                                className="maxWidth"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12}>
                                    <Row
                                        className={
                                            showInMemoryOf
                                                ? "hiddenText"
                                                : "mb-0"
                                        }
                                    >
                                        <Col xs={12} md={4}>
                                            <TextField
                                                placeholder="Honoree Full Name"
                                                required={!showInMemoryOf}
                                                name="Honoree"
                                                label="Honoree Full Name"
                                                {...register("honoreeFullName")}
                                                className="maxWidth"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
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
