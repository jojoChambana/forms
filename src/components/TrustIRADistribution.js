import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import RadioButtons from "./RadioButtons";

export default function TrustIRADistribution() {
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    return (
        <Row>
            <Col>
                <RadioButtons
                    variableName="iraDistribution"
                    label="IRA Distribution"
                    values={["Yes", "No"]}
                    radioChangedFlag={aCheckboxChanged}
                    setRadioChangedFlag={setaCheckboxChanged}
                />
            </Col>
        </Row>
    );
}
