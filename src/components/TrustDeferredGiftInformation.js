import {
    Typography, 
    TextField,
} from "@mui/material";
import {  useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import RadioButtons from "./RadioButtons"

export default function TrustDeferredGiftInformation() {


    const { register } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);


    return (
        <>
            <Typography variant="h5" component="h3">
                Deferred Gift Information
            </Typography>
            <Row>
                <Col xs={12} md={2}>
                    <TextField
                        {...register("dateOfCommitment")}
                        placeholder="Date of Commitment"
                        className="maxWidth"
                        label="Date of Commitment"
                    />
                </Col>
                <Col xs={12} md={2}>
                    <TextField
                        {...register("estimatedDollarValue")}
                        placeholder="Estimated Dollar Value"
                        className="maxWidth"
                        label="Estimated Dollar Value"
                        inputProps={{
                            inputMode: "numeric",
                            pattern:
                                "[0-9]+(.[0-9][0-9])?",
                        }}

                    />
                </Col>
                <Col xs={12} md={2}>
                    <TextField
                        {...register("newTotalIfIncreaseDecrease")}
                        placeholder="New Total if Increase/Decrease"
                        className="maxWidth"
                        label="New Total if Increase/Decrease"
                    />
                </Col>
                <Col xs={12} md={2}>
                    <TextField
                        {...register("estateReviewDate")}
                        placeholder="Estate Review Date"
                        className="maxWidth"
                        label="Estate Review Date"
                    />
                </Col>
                <Col xs={12} md={2}>
                    <TextField
                        {...register("expectedMaturityYear")}
                        placeholder="Expected Maturity Year"
                        className="maxWidth"
                        label="Expected Maturity Year"
                    />
                </Col>                
            </Row>
            <Row>
                <Col>
                <RadioButtons variableName="increaseDecreasePrior" label="Increase/Decrease Prior?" values={["Yes","No"]} radioChangedFlag={aCheckboxChanged} setRadioChangedFlag={setaCheckboxChanged} />
                </Col>
                <Col>
                <RadioButtons variableName="jointLifeGift" label="Joint Life Gift" values={["Yes","No"]} radioChangedFlag={aCheckboxChanged} setRadioChangedFlag={setaCheckboxChanged} />
                </Col>                
            </Row>
            <Row>
            <Col >
            <TextField
                        {...register("eventualDesignationOfPG")}
                        placeholder="Eventual Designation of PG"
                        className="maxWidth"
                        label="Eventual Designation of PG"
                    />
                </Col>
            </Row>  
            <Row>
                <Col>
                <RadioButtons variableName="endowment" label="Endowment" values={["Yes","No"]} radioChangedFlag={aCheckboxChanged} setRadioChangedFlag={setaCheckboxChanged} />
                </Col>
                <Col>
                <RadioButtons variableName="fundAgreement" label="Fund Agreement" values={["UIF existing","UIF in process","In will/trust"]} radioChangedFlag={aCheckboxChanged} setRadioChangedFlag={setaCheckboxChanged} />
                </Col>                
            </Row>  
            <Row>
            <Col >
            <TextField
                        {...register("documentation")}
                        placeholder="Documentation"
                        className="maxWidth"
                        label="Documentation"
                    />
                </Col>
            </Row>    
            <Row>
            <Col >
            <TextField
                        {...register("basisForDeterminingValue")}
                        placeholder="Basis for Determining Value"
                        className="maxWidth"
                        label="Basis for Determining Value"
                    />
                </Col>
            </Row>      
            <Row>
            <Col >
            <TextField
                        {...register("planOpportunity")}
                        placeholder="Plan/Opportunity"
                        className="maxWidth"
                        label="Plan/Opportunity"
                    />
                </Col>
            </Row>      
            <Row>
            <Col >
            <TextField
                        {...register("responsiblePerson")}
                        placeholder="Responsible Person"
                        className="maxWidth"
                        label="Responsible Person"
                    />
                </Col>
            </Row>      
            <Row>
            <Col >
            <TextField
                        {...register("trustName")}
                        placeholder="Trust Name"
                        className="maxWidth"
                        label="Trust Name"
                    />
                </Col>
            </Row>      
            <Row>
            <Col >
            <TextField
                        {...register("lifeIncomeDesignation")}
                        placeholder="Life Income Designation"
                        className="maxWidth"
                        label="Life Income Designation"
                    />
                </Col>
            </Row>                                                                                
        </>
    );
}
