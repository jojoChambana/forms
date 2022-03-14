import { TextField, Typography,RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    FormControl } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import {  useFormContext } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";

export default function TrustOtherInformation() {

    const { register, getValues, setValue  } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

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
            <Row>
            <Col>
            <FormControl>
                  
            <RadioGroup
                row
                aria-labelledby="is8283Required"
                value={getValues("is8283Required")}
                onChange={(event) => {
                    setValue("is8283Required", event.target.value); // set the rect hook array element appropriately
                    setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements                                        
                    }
                }
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
        </>
    );
}
