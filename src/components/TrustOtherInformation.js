import {
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    FormGroup,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";
import RadioButtons from "./RadioButtons";

export default function TrustOtherInformation() {
    const { register, getValues, setValue } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes

    const [is8283Changed, set8283Changed] = useState(false);
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
                        placeholder="Other information"
                        className="maxWidth"
                        label="Other Information"
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
                        <FormGroup variableName="is8283RequiredCheckBoxes">
                            <div className="d-flex flex-direction-row">
                                <div style={{ width: "200px" }}>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        value="Gift Admin"
                                        label="Gift Admin"
                                        name="giftAdmincheckbox"
                                        checked={getValues("giftAdmincheckbox")}
                                        onClick={(event) => {
                                            setValue(
                                                "giftAdmincheckbox",
                                                event.target.checked
                                            ); // set the rect hook array element appropriately
                                            setaCheckboxChanged(
                                                !aCheckboxChanged
                                            ); // this will trigger a re-render of the page to hide/show elements
                                        }}
                                    />
                                </div>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        value="Trust"
                                        label="Trust"
                                        name="trustcheckbox"
                                        checked={getValues("trustcheckbox")}
                                        onClick={(event) => {
                                            setValue(
                                                "trustcheckbox",
                                                event.target.checked
                                            ); // set the rect hook array element appropriately
                                            setaCheckboxChanged(
                                                !aCheckboxChanged
                                            ); // this will trigger a re-render of the page to hide/show elements
                                        }}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                    ) : null}
                </Col>
            </Row>
        </>
    );
}
