import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function PublicityDropDown() {
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes

    const { setValue, getValues } = useFormContext();
    const [dropDownChanges, setDropDownChanged] = useState(false);
    const handleChange = (event) => {
        setValue("publicityCode", event.target.value);
        setDropDownChanged(!dropDownChanges); // this will trigger a re-render of the page to hide/show elements
        // console.table(event.target.value)
    };

    return (
        <Row>
            <Col xs={12} md={3}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Publicity Code
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={getValues("publicityCode")}
                        label="Publicity Code"
                        onChange={handleChange}
                    >
                        <MenuItem value={"No Restrictions"}>
                            No Restrictions
                        </MenuItem>
                        <MenuItem value={"No Personal Contact"}>
                            No Personal Contact
                        </MenuItem>
                        <MenuItem value={"No Contact/Publicity"}>
                            No Contact/Publicity
                        </MenuItem>
                        <MenuItem value={"Anonymous"}>Anonymous</MenuItem>
                    </Select>
                </FormControl>
            </Col>
        </Row>
    );
}
