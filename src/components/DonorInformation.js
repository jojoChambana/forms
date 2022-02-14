import {
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Address from "./Address";
import PublicityDropDown from "../components/PublicityDropDown";

export default function DonorInformation({
    errors,
    register,
    getValues,
    setValue,
}) {
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const handleClickUnknownDonor = (event) => {
        setValue("donorUnknownCheckBox", event.target.checked); // set the rect hook array element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const handleClickNewAddress = (event) => {
        setValue("newDonorAddressCheckBox", event.target.checked); // set the rect hook array element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const handleClickNewDonor = (event) => {
        setValue("newDonorCheckBox", event.target.checked); // set the rect hook array element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const donorUnknownCheckBox = getValues("donorUnknownCheckBox");

    return (
        <>
            <Typography variant="h5" component="h3">
                Donor Information
            </Typography>
            <Row className="mt-4">
                <>
                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={donorUnknownCheckBox}
                                    onClick={handleClickUnknownDonor}
                                />
                            }
                            label="Donor is unknown, anonymous, or various cash donors"
                        />
                    </Col>

                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={getValues("newDonorCheckBox")}
                                    onClick={handleClickNewDonor}
                                />
                            }
                            label="New donor"
                        />
                    </Col>
                    {!donorUnknownCheckBox && (
                        <>
                            <Row>
                                <Col xs={12} md={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={getValues(
                                                    "newDonorAddressCheckBox"
                                                )}
                                                onClick={handleClickNewAddress}
                                            />
                                        }
                                        label="New address"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6}>
                                    <TextField
                                        {...register("tedConstituentId")}
                                        required
                                        placeholder="TED Constituent ID"
                                        className="maxWidth"
                                        label="TED Constituent ID"
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField
                                        {...register("organizationDonorName")}
                                        placeholder="Organization/Donor Name"
                                        className="maxWidth"
                                        label="Organization/Donor name"
                                    />
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col>
                                    <Address
                                        errors={errors}
                                        register={register}
                                        setValue={setValue}
                                        getValues={getValues}
                                        prefix="donor"
                                    />
                                </Col>
                            </Row> */}
                            {/* <PublicityDropDown
                                setValue={setValue}
                                getValues={getValues}
                            /> */}
                        </>
                    )}
                </>
            </Row>
        </>
    );
}
