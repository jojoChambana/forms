import {
    Typography,
    FormControl, InputLabel, MenuItem, Select
} from "@mui/material";
import {  useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import RadioButtons from "./RadioButtons"

export default function TrustTypeOfCommitment() {

    const C_HELD_BY_UIF = "Irrevocable Held by UIF";
    const C_HELD_BY_OTHERS = "Irrevocable Held by Others";
    const C_REVOCABLE = "Revocable";

    const { getValues, setValue } = useFormContext();
    const [dropDownChanged, setDropDownChanged] = useState(false);

        // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
        const [aCheckboxChanged, setaCheckboxChanged] = useState(false);


    return (
        <>
            <Typography variant="h5" component="h3">
                Type of Commitment
            </Typography>
            <Row>
                <Col>
                <RadioButtons variableName="trustCommitmentType" values={[C_HELD_BY_UIF,C_HELD_BY_OTHERS,C_REVOCABLE]} radioChangedFlag={aCheckboxChanged} setRadioChangedFlag={setaCheckboxChanged} />
                </Col>
            </Row>
            <Row>
            <Col xs={12} md={3}>
                {getValues("trustCommitmentType") === C_HELD_BY_UIF && (

                <FormControl fullWidth  required>
                    <InputLabel id="heldByUIFChoiceLabel">
                        Commitment Type
                    </InputLabel>
                    <Select
                        labelId="heldByUIFChoice"
                        id="heldByUIFChoice"
                        value={getValues("heldByUIFChoice")}
                        label="Commitment Type"
                        onChange={(event) => {
                                setValue("heldByUIFChoice", event.target.value);
                                setDropDownChanged(!dropDownChanged); // this will trigger a re-render of the page to hide/show elements
                            }
                        }
                    >
                        <MenuItem value={"Charitable Gift Annuity"}>Charitable Gift Annuity</MenuItem>
                        <MenuItem value={"Charitable Remainder Trust"}>Charitable Remainder Trust</MenuItem>
                        <MenuItem value={"Charitable Remainder Annuity Trust"}>Charitable Remainder Annuity Trust</MenuItem>
                        <MenuItem value={"Deferred Gift Annuity"}>Deferred Gift Annuity</MenuItem>
                        <MenuItem value={"Charitable Lead Unitrust"}>Charitable Lead Unitrust</MenuItem>
                        <MenuItem value={"Charitable Annuity Trust"}>Charitable Annuity Trust</MenuItem>
                        <MenuItem value={"Retained Life Estate"}>Retained Life Estate</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                    </FormControl>
                ) }
                {getValues("trustCommitmentType") === C_HELD_BY_OTHERS && (
                    <FormControl fullWidth  required>
                    <InputLabel id="heldByOtherLabel">
                        Commitment Type
                    </InputLabel>
                    <Select
                        labelId="heldByOthers"
                        id="heldByOthers"
                        value={getValues("heldByOthersChoice")}
                        label="Commitment Type"
                        onChange={(event) => {
                            setValue("heldByOthersChoice", event.target.value);
                            setDropDownChanged(!dropDownChanged); // this will trigger a re-render of the page to hide/show elements
                        }
                    }
                >
                        <MenuItem value={"Charitable Lead Trust"}>Charitable Lead Trust</MenuItem>
                        <MenuItem value={"Charitable Remainder Trust"}>Charitable Remainder Trust</MenuItem>
                        <MenuItem value={"Charitable Remainder Annuity Trust"}>Charitable Remainder Annuity Trust</MenuItem>
                        <MenuItem value={"Charitable Lead Annuity Trust"}>Charitable Lead Annuity Trust</MenuItem>
                        <MenuItem value={"Charitable Lead Unitrust"}>Charitable Lead Unitrust</MenuItem>
                        <MenuItem value={"Charitable Gift Annuity"}>Charitable Gift Annuity</MenuItem>
                        <MenuItem value={"Non-qualified"}>Non-Qualified</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                    </FormControl>
                ) }
                {getValues("trustCommitmentType") === C_REVOCABLE && (
                    <FormControl fullWidth  required>
                    <InputLabel id="revocableLabel">
                        Commitment Type
                    </InputLabel>
                    <Select
                        labelId="revocable"
                        id="revocable"
                        value={getValues("revocableChoice")}
                        label="Commitment Type"
                        onChange={(event) => {
                            setValue("revocableChoice", event.target.value);
                            setDropDownChanged(!dropDownChanged); // this will trigger a re-render of the page to hide/show elements
                        }
                    }
                    >
                        <MenuItem value={"Bequest"}>Bequest</MenuItem>
                        <MenuItem value={"Living Trust"}>Living Trust</MenuItem>
                        <MenuItem value={"Life Insurance"}>Life Insurance</MenuItem>
                        <MenuItem value={"Retirement Plan"}>Retirement Plan</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                    </FormControl>                    
                ) }
                </Col>
            </Row>            
        </>
    );
}
