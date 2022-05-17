import { FormGroup, TextField, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useState } from "react";
import RadioButtons from "./RadioButtons";
import TrustApplication from "./TrustApplication";

export default function PlannedGift({
    alwaysShowPlannedGiftDeleteButtons,
    showSeeAttached,
    trustMode = false,
}) {
    const { register, control, getValues, event } = useFormContext();

    // used in building the repeating Planned Gift section.  Get the array of object from the 'PlannedGift' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "PlannedGift",
    });

    var PlannedGiftCount = 0;
    if (getValues("PlannedGift") !== undefined)
        PlannedGiftCount = getValues("PlannedGift").length; // used to determine if we should show Delete Planned Gift buttons

    const [isGiftPlanned, setGiftPlanned] = useState("no");
    const [isDifferentDonor, setIsDifferentDonor] = useState("no");

    // const [, index] = event.target.name.split("."); // the name will be 'designation.index.newDesignationRequestedChecked ' and we just need the index

    const pledgeRevLabel =
        trustMode === true
            ? "Planned Gift or Pledge Revenue ID"
            : "Pledge Revenue ID";
    return (
        <>
            <Typography variant="h5" component="h3" className="mt-3">
                Planned Gift
            </Typography>

            <div className="border mt-3 mb-2">
                <Row>
                    <Col className="pb-0">
                        <Typography
                            variant="span"
                            component={"p"}
                            style={{ marginBottom: "0" }}
                        >
                            Is this gift associated with a Planned Gift
                            Application?
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col className="ml-2 pt-0 pb-0">
                        <RadioButtons
                            variableName="isGiftPlanned"
                            values={["Yes", "No"]}
                            radioChangedFlag={isGiftPlanned}
                            setRadioChangedFlag={setGiftPlanned}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup variableName="isGiftPlannedCheckBoxes">
                            {/* Last is the comments field  */}
                            <TextField
                                placeholder="Comments"
                                label="Comments"
                                {...register(`applicationAdditionalComments`)}
                                className="maxWidth"
                            />
                        </FormGroup>
                    </Col>
                    {getValues("isGiftPlanned") === "Yes" ? (
                        <TrustApplication />
                    ) : null}
                </Row>
            </div>
        </>
    );
}
