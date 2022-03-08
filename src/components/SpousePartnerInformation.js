import {
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function SpousePartnerInformation() {
    const { register, getValues, setValue } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    return (
        <>
            <Typography variant="h5" component="h3">
                Spouse/Partner Information
            </Typography>
            <Row className="mt-2">
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
                        label="Do not add spouse/partner to receipt"
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
                        label="Do not give spouse/partner credit"
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <TextField
                        {...register("spousePartnerTedConstituentId")}
                        required
                        placeholder="TED Constituent ID"
                        className="maxWidth"
                        label="TED Constituent ID"
                    />
                </Col>
                <Col xs={12} md={6}>
                    <TextField
                        {...register("spousePartnerOrganizationDonorName")}
                        placeholder="Organization/Donor Name"
                        className="maxWidth"
                        label="Organization/Donor name"
                    />
                </Col>
            </Row>
        </>
    );
}
