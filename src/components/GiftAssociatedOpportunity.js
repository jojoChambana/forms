import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function GiftAssociatedOpportunity({ index }) {

    const {
        register,
        setValue,
        getValues
    } = useFormContext();

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
                            label="Check if This Gift is Associated with an Opportunity"
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
                                    placeholder="Household Name"
                                    label="Household Name"
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
                                    placeholder="Plan Name"
                                    label="Plan Name"
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
                                        placeholder="Opportunity Amount"
                                        label="Opportunity Amount"
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
                                    placeholder="Actual Ask Date"
                                    label="Actual Ask Date"
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <TextField
                                    {...register(
                                        `designation.${index}.primaryPlanManager`
                                    )}
                                    required
                                    placeholder="Primary Plan Manager Name"
                                    label="Primary Plan Manager Name"
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
