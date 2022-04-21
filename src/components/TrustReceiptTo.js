import {
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function TrustReceiptTo({ trustType }) {
    const { getValues, setValue, register } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    return (
        <>
            <Row>
                <Col xs={2}>
                    <FormLabel
                        component="legend"
                        style={{ paddingTop: "0.5em" }}
                    >
                        <Typography variable="p" style={{ marginBottom: "0" }}>
                            Receipt To:
                        </Typography>
                    </FormLabel>
                </Col>

                {/* Trust Services Checkbox*/}
                <Col xs={2}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="receiptToTrustServices"
                                checked={getValues("receiptToTrustServices")}
                                onClick={(event) => {
                                    setValue(
                                        "receiptToTrustServices",
                                        event.target.checked
                                    ); // set the rect hook array element appropriately
                                    setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                                }}
                            />
                        }
                        label="Trust Services"
                    />
                </Col>

                {(trustType === "Outright" || trustType === "Life Income") && (
                    <>
                        <Col>
                            <Row>
                                <Col
                                    xs={6}
                                    className="d-flex justify-content-center"
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="receiptToDevelopmentPrograms"
                                                checked={getValues(
                                                    "receiptToDevelopmentPrograms"
                                                )}
                                                onClick={(event) => {
                                                    setValue(
                                                        "receiptToDevelopmentPrograms",
                                                        event.target.checked
                                                    ); // set the rect hook array element appropriately
                                                    setaCheckboxChanged(
                                                        !aCheckboxChanged
                                                    ); // this will trigger a re-render of the page to hide/show elements
                                                }}
                                            />
                                        }
                                        label="Development Programs"
                                    />
                                </Col>

                                <Col xs={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="receiptToPlannedGiving"
                                                checked={getValues(
                                                    "receiptToPlannedGiving"
                                                )}
                                                onClick={(event) => {
                                                    setValue(
                                                        "receiptToPlannedGiving",
                                                        event.target.checked
                                                    ); // set the rect hook array element appropriately
                                                    setaCheckboxChanged(
                                                        !aCheckboxChanged
                                                    ); // this will trigger a re-render of the page to hide/show elements
                                                }}
                                            />
                                        }
                                        label="Planned Giving"
                                    />
                                </Col>
                            </Row>
                        </Col>

                        <Row>
                            <Col xs={12} md={6}>
                                <TextField
                                    {...register("receiptToOther")}
                                    placeholder="Receipt to Other"
                                    className="maxWidth"
                                    label="Receipt to Other"
                                />
                            </Col>
                        </Row>
                    </>
                )}
                {trustType === "Estate" && (
                    <Col xs={12} md={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="noReceiptNecessary"
                                    checked={getValues("noReceiptNecessary")}
                                    onClick={(event) => {
                                        setValue(
                                            "noReceiptNecessary",
                                            event.target.checked
                                        ); // set the rect hook array element appropriately
                                        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                                    }}
                                />
                            }
                            label="No Receipt Necessary per Trust Services"
                        />
                    </Col>
                )}
            </Row>
        </>
    );
}
