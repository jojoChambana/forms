import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function GiftAssociatedOpportunity({
    register,
    setValue,
    getValues,
    index,
}) {
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false); // we use this to trigger a render operation

    const handleChange = (event) => {
        const [, index] = event.target.name.split("."); // the name will be 'designation.index.fieldName' and we just need the index
        setValue(
            `designation.${index}.associatedOpportunityChecked`,
            event.target.checked
        ); // set the react hook array element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const initCheckValue = getValues(
        `designation[${index}].associatedOpportunityChecked`
    );
    return (
        <>
            <Typography variant="h5" component="h3">
                Opportunity
            </Typography>
            <FormGroup>
                <Row className="mb-0">
                    <Col>
                        <FormControlLabel
                            label="Check if this gift is associated with an opportunity"
                            control={
                                <Checkbox
                                    placeholder="Is this gift associated with an opportunity"
                                    {...register(
                                        `designation.${index}.associatedOpportunityChecked`
                                    )}
                                    onChange={handleChange}
                                    name={`OpprtunityCheckbox.${index}`}
                                    checked={initCheckValue}
                                />
                            }
                        />
                    </Col>
                </Row>
                {initCheckValue && (
                    <>
                        <Row>
                            <Col xs={12} md={4}>
                                <TextField
                                    {...register(
                                        `designation.${index}.tedHouseholdId`
                                    )}
                                    required
                                    placeholder="TED Household ID"
                                    label="TED Household ID"
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={8}>
                                <TextField
                                    {...register(
                                        `designation.${index}.tedHouseholdName`
                                    )}
                                    required
                                    placeholder="Household name"
                                    label="Household name"
                                    className="maxWidth"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <TextField
                                    {...register(
                                        `designation.${index}.tedPlanName`
                                    )}
                                    required
                                    placeholder="Plan name"
                                    label="Plan name"
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="dollarAmount">
                                    <TextField
                                        {...register(
                                            `designation.${index}.tedOpportunityAmount`
                                        )}
                                        required
                                        inputProps={{
                                            inputMode: "numeric",
                                            pattern: "[0-9]+(.[0-9][0-9])?",
                                        }}
                                        placeholder="Opportunity amount"
                                        label="Opportunity amount"
                                        className="maxWidth"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <TextField
                                    {...register(
                                        `designation.${index}.actualAskDate`
                                    )}
                                    required
                                    placeholder="Actual ask date"
                                    label="Actual ask date"
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <TextField
                                    {...register(
                                        `designation.${index}.primaryPlanManager`
                                    )}
                                    required
                                    placeholder="Primary plan manager name"
                                    label="Primary plan manager name"
                                    className="maxWidth"
                                />
                            </Col>
                        </Row>
                    </>
                )}
            </FormGroup>
        </>
    );
}
