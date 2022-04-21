import { FormLabel, Typography } from "@mui/material";
import { useState } from "react";
import { Col } from "react-bootstrap";
import RadioButtons from "./RadioButtons";

export default function TrustIRADistribution() {
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    return (
        <>
            <div className="row">
                <Col xs={2}>
                    <FormLabel
                        component="legend"
                        style={{ paddingTop: "0.5em" }}
                    >
                        <Typography variable="p" style={{ marginBottom: "0" }}>
                            IRA Distribution:
                        </Typography>
                    </FormLabel>
                </Col>
                <div className="col">
                    <RadioButtons
                        variableName="iraDistribution"
                        values={["Yes", "No"]}
                        radioChangedFlag={aCheckboxChanged}
                        setRadioChangedFlag={setaCheckboxChanged}
                    />
                </div>
            </div>
        </>
    );
}
