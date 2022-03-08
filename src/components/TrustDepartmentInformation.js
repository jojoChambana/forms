import {
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";

export default function TrustDepartmentInformation({ trustType }) {
    const { register, getValues, setValue } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Department Information
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("dateOfGift")}
                        required
                        placeholder="Date of gift"
                        className="maxWidth"
                        label="Date of gift"
                    />
                </Col>
                <Col xs={12} md={4}>
                    <TextField
                        {...register("preparedBy")}
                        required
                        placeholder="Prepared by"
                        label="Prepared by"
                        className="maxWidth"
                    />
                </Col>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("datePrepared")}
                        required
                        placeholder="Date prepared"
                        className="maxWidth"
                        label="Date prepared"
                    />
                </Col>
            </Row>
            {(trustType === "Estate" || trustType === "Life Income") && (
                <Row>
                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="doNotProcessUntilContactedByTrustServices"
                                    checked={getValues(
                                        "doNotProcessUntilContactedByTrustServices"
                                    )}
                                    onClick={(event) => {
                                        setValue(
                                            "doNotProcessUntilContactedByTrustServices",
                                            event.target.checked
                                        ); // set the rect hook array element appropriately
                                        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                                    }}
                                />
                            }
                            label="Do not process until contacted by Trust Services"
                        />
                    </Col>
                </Row>
            )}
        </>
    );
}
