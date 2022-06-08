import { FormGroup, TextField, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import RadioButtons from "./RadioButtons";
import TrustApplication from "./TrustApplication";

export default function PlannedGift({
    alwaysShowPlannedGiftDeleteButtons,
    showSeeAttached,
    trustMode = false,
}) {
    const { register, getValues } = useFormContext();

    const [isGiftPlanned, setGiftPlanned] = useState("no");

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
                            Application
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

                <>
                    {getValues("isGiftPlanned") === "Yes" ? (
                        <TrustApplication />
                    ) : null}
                </>

                <Row>
                    <FormGroup variableName="isGiftPlannedCheckBoxes">
                        <Row className="mb-0">
                            <div className="col">
                                {" "}
                                <TextField
                                    placeholder="Charitable Remainder Amount"
                                    label="Charitable Remainder Amount"
                                    {...register(`charitableRemainderAmount`)}
                                    className="maxWidth"
                                />
                            </div>
                            <div className="col">
                                <TextField
                                    placeholder="Annuity Payable"
                                    label="Annuity Payable"
                                    {...register(`annuityPayable`)}
                                    className="maxWidth"
                                />
                            </div>
                        </Row>

                        <Row className="mb-0">
                            <Col>
                                {/* Last is the comments field  */}
                                <TextField
                                    placeholder="Comments"
                                    label="Comments"
                                    {...register(
                                        `applicationAdditionalComments`
                                    )}
                                    className="maxWidth"
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                </Row>
            </div>
        </>
    );
}
