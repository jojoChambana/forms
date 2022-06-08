import { TextField, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";
import RadioButtons from "./RadioButtons";

export default function TrustOtherInformation() {
    const { register, getValues } = useFormContext();
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [is8283Changed, set8283Changed] = useState(false);

    // we use this to trigger a render operation when a radio button is checked.  Used in the handleChange events for the radio buttons
    const [is8283RadioButtonsChanged, set8283RadioButtonsChanged] =
        useState(false);

    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Other Information
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <TextField
                        {...register("otherInformation")}
                        placeholder="Please enter any additional information"
                        className="maxWidth"
                        label="Note"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Is 8283 Required?
                    </Typography>
                </Col>
            </Row>

            <Row className="border">
                <Col className="ml-2">
                    <RadioButtons
                        variableName="is8283Required"
                        values={["Yes", "No"]}
                        radioChangedFlag={is8283Changed}
                        setRadioChangedFlag={set8283Changed}
                    />
                </Col>
                <Col>
                    {getValues("is8283Required") === "Yes" ? (
                        <RadioButtons
                            variableName="is8283RadioButtons"
                            values={["Gift Admin", "Trust"]}
                            radioChangedFlag={is8283RadioButtonsChanged}
                            setRadioChangedFlag={set8283RadioButtonsChanged}
                        />
                    ) : null}
                    {/* {console.log(getValues("is8283RadioButtons"))} */}
                </Col>
            </Row>
        </>
    );
}
