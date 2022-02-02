import { ErrorMessage } from "@hookform/error-message";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function GiftAssociatedOpportunity({ register, errors }) {
    const [visible, setvisible] = useState(false);
    const handleChange = () => {
        setvisible(!visible);
    };
    return (
        <>
            <Typography variant="h6" component="h4">
                Opportunity
            </Typography>
            <FormGroup>
                <Row className="mb-0">
                    <Col>
                        <FormControlLabel
                            label="Check if this gift is associated with an opportunity"
                            control={
                                <Checkbox
                                    {...register(`associatedOpportunity`)}
                                    placeholder="Is this gift associated with an opportunity"
                                    onChange={handleChange}
                                />
                            }
                        />
                        <ErrorMessage
                            errors={errors}
                            name="associatedOpportunity"
                        />
                    </Col>
                </Row>
                {visible && (
                    <>
                        <Row>
                            <Col xs={12} md={4}>
                                <TextField
                                    {...register("tedHouseholdId")}
                                    required
                                    placeholder="TED Household ID"
                                    label="TED Household ID"
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={8}>
                                <TextField
                                    {...register("tedHouseholdName")}
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
                                    {...register("tedPlanName")}
                                    required
                                    placeholder="Plan name"
                                    label="Plan name"
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="dollarAmount">
                                    <TextField
                                        {...register("tedOpportunityAmount")}
                                        required
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
                                    {...register("actualAskDate")}
                                    required
                                    placeholder="Actual ask date"
                                    label="Actual ask date"
                                    className="maxWidth"
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <TextField
                                    {...register("primaryPlanManager")}
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
