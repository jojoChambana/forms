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
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Address from "./Address";

export default function GiftTribute() {
    const { register, getValues, setValue, control } = useFormContext();

    let giftTribute = getValues("giftTribute");
    if (giftTribute === "") {
        setValue("giftTribute", "In memory of");
        giftTribute = getValues("giftTribute");
    }
    const tributeChecked = getValues("tributeChecked");
    // console.log("tributeChecked", tributeChecked);
    // console.log("giftTribute", giftTribute);

    const notifyIndividualOrFamily = getValues("notifyIndividualOrFamily");

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);
    const [showInMemoryOf, setShowInMemoryOf] = useState(
        giftTribute === "In memory of"
    );

    const handleTributeChange = (event) => {
        setValue("tributeChecked", event.target.checked); // set the rect hook element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const handleClickNewAddress = (event) => {
        setValue("inMemoryNewAddress", event.target.checked); // set the rect hook array element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const handleMemHon = (event) => {
        setValue("giftTribute", event.target.value); // set the rect hook element appropriately
        setShowInMemoryOf(event.target.value === "In memory of");
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const handleClickNotify = (event) => {
        setValue("notifyIndividualOrFamily", event.target.checked); // set the rect hook array element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

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
                            <Row>
                                <Col xs={12} md={3}>
                                    <TextField
                                        {...register("tedTributeConstituentId")}
                                        placeholder="TED Constituent ID"
                                        className="maxWidth"
                                        label="TED Constituent ID"
                                    />
                                </Col>

                                <Col
                                    xs={12}
                                    md={4}
                                    className={
                                        showInMemoryOf ? "mb-0" : "hiddenText"
                                    }
                                >
                                    <TextField
                                        placeholder="Deceased Full Name"
                                        required={showInMemoryOf}
                                        name="Deceased"
                                        label="Deceased Full Name"
                                        {...register("deceasedFullName")}
                                        className="maxWidth"
                                    />
                                </Col>

                                <Col
                                    xs={12}
                                    md={4}
                                    className={
                                        showInMemoryOf ? "hiddenText" : "mb-0"
                                    }
                                >
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
                        </FormControl>
                        <Row className="mb-0">
                            <Col xs={12} md={4}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={getValues(
                                                    "inMemoryNewAddress"
                                                )}
                                                onClick={handleClickNewAddress}
                                            />
                                        }
                                        {...register("inMemoryNewAddress")}
                                        label="New Address"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Address prefix="tribute" />
                        <Row>
                            <Col xs={12} md={3}>
                                <Controller
                                    name="designationPhoneNumber"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <PhoneInput
                                            {...register(
                                                "designationPhoneNumber"
                                            )}
                                            placeholder="Phone"
                                            value={value}
                                            onChange={onChange}
                                            defaultCountry="US"
                                            id="designationPhoneNumber"
                                        />
                                    )}
                                />
                            </Col>
                            <Col xs={12} md={3}>
                                <TextField
                                    type="email"
                                    placeholder="Designation email"
                                    label="Email"
                                    {...register("designationEmail")}
                                    className="maxWidth"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-0">
                            <Col>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={getValues(
                                                    "notifyIndividualOrFamily"
                                                )}
                                                onClick={handleClickNotify}
                                            />
                                        }
                                        label="Please notify the following individual/family of my gift"
                                        {...register(
                                            "notifyIndividualOrFamily"
                                        )}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        {notifyIndividualOrFamily && (
                            <>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            {...register(
                                                "tedTributeAcknowledgedFirstName"
                                            )}
                                            placeholder="Acknowledgee First Name"
                                            className="maxWidth"
                                            label="First Name"
                                        />
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            {...register(
                                                "tedTributeAcknowledgedLastName"
                                            )}
                                            placeholder="Acknowledgee Last Name"
                                            className="maxWidth"
                                            label="Last Name"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Address prefix="acknowledgee" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <Controller
                                            name="tedTributeAcknowledgedPhone"
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                            }) => (
                                                <PhoneInput
                                                    {...register(
                                                        "tedTributeAcknowledgedPhone"
                                                    )}
                                                    placeholder="Phone"
                                                    value={value}
                                                    onChange={onChange}
                                                    defaultCountry="US"
                                                    id="tedTributeAcknowledgedPhone"
                                                />
                                            )}
                                        />
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            {...register(
                                                "notifyIndividualOrFamilyEmail"
                                            )}
                                            required
                                            placeholder="Email"
                                            type="email"
                                            label="Email"
                                            className="maxWidth"
                                        ></TextField>
                                    </Col>
                                </Row>
                            </>
                        )}
                    </>
                )}
            </FormGroup>
        </>
    );
}
