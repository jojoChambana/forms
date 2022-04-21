import {
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function SpousePartnerInformation({
    showCheckBoxes = true,
    showPhoneAndDOB = false,
}) {
    const { register, getValues, setValue, control } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    return (
        <>
            <Typography variant="h5" component="h3">
                Spouse/Partner Information
            </Typography>
            {showCheckBoxes && (
                <Row className="mt-2s">
                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={getValues(
                                        "doNotAddSpousePartnerToReceipt"
                                    )}
                                    onClick={(event) => {
                                        setValue(
                                            "doNotAddSpousePartnerToReceipt",
                                            event.target.checked
                                        ); // set the rect hook array element appropriately
                                        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                                    }}
                                />
                            }
                            label="Do Not Add Spouse/Partner to Receipt"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={getValues(
                                        "doNotGiveSpousePartnerCredit"
                                    )}
                                    onClick={(event) => {
                                        setValue(
                                            "doNotGiveSpousePartnerCredit",
                                            event.target.checked
                                        ); // set the rect hook array element appropriately
                                        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                                    }}
                                />
                            }
                            label="Do Not Give Spouse/Partner Credit"
                        />
                    </Col>
                </Row>
            )}
            <Row className="mt-3">
                <Col xs={12} md={4}>
                    <TextField
                        {...register("spousePartnerOrganizationDonorName")}
                        placeholder="Organization/Donor Name"
                        // required
                        className="maxWidth"
                        label="Organization/Donor Name"
                    />
                </Col>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("spousePartnerTedConstituentId")}
                        placeholder="TED Constituent ID"
                        className="maxWidth"
                        label="TED Constituent ID"
                    />
                </Col>
            </Row>
            {showPhoneAndDOB && (
                <Row>
                    <Col xs={12} md={3}>
                        <Controller
                            name="phone-input"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                    {...register("spousePartnerPhone")}
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
                            {...register("spousePartnerDOB")}
                            label="Date of Birth"
                            className="dateField maxWidth"
                        />
                    </Col>
                </Row>
            )}
        </>
    );
}
