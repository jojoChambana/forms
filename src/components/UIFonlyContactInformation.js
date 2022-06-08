import {
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";

export default function UIFonlyContactInformation() {
    const { register, getValues, setValue, control, trustType } =
        useFormContext();

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
                        placeholder="Date of Gift"
                        className="maxWidth"
                        label="Date of Gift"
                    />
                </Col>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("preparedBy")}
                        required
                        placeholder="Prepared By"
                        label="Prepared By"
                        className="maxWidth"
                    />
                </Col>
                <Col xs={12} md={3}>
                    <TextField
                        {...register("datePrepared")}
                        required
                        placeholder="Date Prepared"
                        className="maxWidth"
                        label="Date Prepared"
                    />
                </Col>

                {trustType !== "Life Income" ? (
                    <Col xs={12} md={2}>
                        <Controller
                            name={"sourceCode"}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    onChange={onChange}
                                    value={value}
                                    label="Source Code"
                                    className="maxWidth"
                                />
                            )}
                        />
                    </Col>
                ) : (
                    <Col xs={12} md={2}>
                        <Controller
                            name={"sourceCode"}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    onChange={onChange}
                                    value={10000}
                                    label="Source Code"
                                    className="maxWidth"
                                />
                            )}
                        />
                    </Col>
                )}
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
                            label="Do Not Process Until Contacted by Trust Services"
                        />
                    </Col>
                </Row>
            )}
        </>
    );
}
