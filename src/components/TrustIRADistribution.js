import {
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    FormControl,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function TrustIRADistribution() {
    const { getValues, setValue } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    return (
        <Row>
            <Col>
                <FormControl>
                    <FormLabel component="legend">IRA Distribution</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="iraDistribution"
                        value={getValues("iraDistribution")}
                        onChange={(event) => {
                            setValue("iraDistribution", event.target.value); // set the rect hook array element appropriately
                            setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                        }}
                        name="iraDistribution"
                    >
                        <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                        />
                        <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>
            </Col>
        </Row>
    );
}
