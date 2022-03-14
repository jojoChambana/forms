import {
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useFormContext,Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Address from "./Address";
import PublicityDropDown from "../components/PublicityDropDown";

export default function DonorInformation({ showAnonymousDonorCheckBox, showPhoneAndDOB = false }) {
    const { register, getValues, setValue, control } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const donorUnknownCheckBox = getValues("donorUnknownCheckBox");
    // console.log("showAnonymousCheckBox", showAnonymousDonorCheckBox);

    return (
        <>
            <Typography variant="h5" component="h3">
                Donor Information
            </Typography>
            <Row className="mt-2">
                <>
                    {showAnonymousDonorCheckBox ? (
                        <Col xs={12} md={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={getValues(
                                            "donorUnknownCheckBox"
                                        )}
                                        onClick={(event) => {
                                            setValue(
                                                "donorUnknownCheckBox",
                                                event.target.checked
                                            ); // set the rect hook array element appropriately
                                            setaCheckboxChanged(
                                                !aCheckboxChanged
                                            ); // this will trigger a re-render of the page to hide/show elements
                                        }}
                                    />
                                }
                                label="Donor is Unknown, Anonymous, or Various Cash Donors"
                            />
                        </Col>
                    ) : (
                        <></>
                    )}

                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={getValues("newDonorCheckBox")}
                                    onClick={(event) => {
                                        setValue(
                                            "newDonorCheckBox",
                                            event.target.checked
                                        ); // set the rect hook array element appropriately
                                        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                                    }}
                                />
                            }
                            label="New Donor"
                        />
                    </Col>
                    {!donorUnknownCheckBox && (
                        <>
                            <Row className="mb-0">
                                <Col xs={12} md={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={getValues(
                                                    "newDonorAddressCheckBox"
                                                )}
                                                onClick={(event) => {
                                                    setValue(
                                                        "newDonorAddressCheckBox",
                                                        event.target.checked
                                                    ); // set the rect hook array element appropriately
                                                    setaCheckboxChanged(
                                                        !aCheckboxChanged
                                                    ); // this will trigger a re-render of the page to hide/show elements
                                                }}
                                            />
                                        }
                                        label="New Address"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4}>
                                    <TextField
                                        {...register("organizationDonorName")}
                                        placeholder="Organization/Donor Name"
                                        required
                                        className="maxWidth"
                                        label="Organization/Donor Name"
                                    />
                                </Col>
                                <Col xs={12} md={3}>
                                    <TextField
                                        {...register("tedConstituentId")}
                                        placeholder="TED Constituent ID"
                                        className="maxWidth"
                                        label="TED Constituent ID"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Address prefix="donor" />
                                </Col>
                            </Row>
                            <Row>
                            <PublicityDropDown />
                            {showPhoneAndDOB && (
                                <>
                            <Col xs={12} md={3}>
                                <Controller
                                    name="phone-input"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <PhoneInput
                                            {...register("donorPhone")}
                                            placeholder="Phone"
                                            value={value}
                                            onChange={onChange}
                                            defaultCountry="US"
                                            id="phone-input"
                                        />
                                    )}
                                />
                            </Col>
                            <Col xs={12} md={3}>
                                <TextField
                                    {...register("donorDOB")}
                                    label="Date of Birth"
                                    className="dateField maxWidth"
                                    />
                             </Col>                            
                             </>
                            )}
                            </Row>
                    </>
                    )}
                </>
            </Row>
        </>
    );
}
