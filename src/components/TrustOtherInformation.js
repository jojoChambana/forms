import {
    TextField,
    Typography,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl,
    Checkbox,
    FormGroup,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";
import RadioButtons from "./RadioButtons";

export default function TrustOtherInformation() {
    const { register, getValues } = useFormContext();

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
                <Col>
                    <RadioButtons
                        variableName="is8283Required"
                        values={["Yes", "No"]}
                        radioChangedFlag={is8283Changed}
                        setRadioChangedFlag={set8283Changed}
                    />
                </Col>
                <Col>
                    {getValues("is8283Required") === "Yes" ? (
                        <div className="col">
                            <FormGroup>
                                <div className="d-flex flex-direction-row">
                                    <div
                                        className="col"
                                        style={{ width: "200px" }}
                                    >
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value="Gift Admin"
                                            label="Gift Admin"
                                            name="giftAdmincheckbox"
                                        />
                                    </div>
                                    <div className="col">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value="Trust"
                                            label="Trust"
                                            name="trustcheckbox"
                                        />
                                    </div>
                                </div>
                            </FormGroup>
                        </div>
                    ) : null}
                </Col>
                {/* <FormControl>
                        <div className="col" style={{ padding: "1em" }}>
                            
                            <RadioGroup
                                row
                                aria-labelledby="is8283Required"
                                value={getValues("is8283Required")}
                                name="is8283Required"
                                onChange={(event) => {
                                    setValue(
                                        "is8283Required",
                                        event.target.value
                                    ); // set the rect hook array element appropriately
                                    setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                                    // var is8283Required = event.target.value;

                                    // iraDistribution !== "Yes"
                                    //     ? console.log("No")
                                    //     : console.log("Yes");
                                }}
                            >
                                <div>

                                </div>
                            </RadioGroup>
                        </div>
                        {!hidden ? (
                            <div className="col">
                                <FormGroup>
                                    <div className="d-flex flex-direction-row">
                                        <div
                                            className="col"
                                            style={{ width: "200px" }}
                                        >
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value="Gift Admin"
                                                label="Gift Admin"
                                                name="giftAdmincheckbox"
                                            />
                                        </div>
                                        <div className="col">
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value="Trust"
                                                label="Trust"
                                                name="trustcheckbox"
                                            />
                                        </div>
                                    </div>
                                </FormGroup>
                            </div>
                        ) : null}
                    </FormControl>
                </Col> */}
            </Row>
        </>
    );
}
