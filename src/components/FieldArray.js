import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";
import GiftAssociatedOpportunity from "./GiftAssociatedOpportunity";

let renderCount = 0;

export default function Fields({ control, register }) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: "test",
    });

    renderCount++;

    return (
        <>
            <ul>
                {fields.map((item, index) => {
                    return (
                        <>
                            <li key={item.id}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...register(
                                                    `newDesignationRequested.${index}.newDesignationRequested`
                                                )}
                                                onChange={handleChange}
                                            />
                                        }
                                        label="New Designation Requested"
                                    />
                                </FormGroup>
                                {checked ? (
                                    <>
                                        <Row>
                                            <Col
                                                xs={12}
                                                md={4}
                                                className="offset-md-1"
                                            >
                                                <TextField
                                                    {...register(
                                                        `departmentContactEmail.${index}.email`
                                                    )}
                                                    required
                                                    type="email"
                                                    placeholder="Department Contact Email"
                                                    label="Department Contact Email"
                                                    className="maxWidth"
                                                />
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <TextField
                                                    {...register(
                                                        `departmentContact.${index}.contact`
                                                    )}
                                                    required
                                                    placeholder="Department Contact"
                                                    label="Department Contact"
                                                    className="maxWidth"
                                                />
                                            </Col>
                                        </Row>
                                    </>
                                ) : (
                                    <Row>
                                        <Col
                                            xs={12}
                                            md={3}
                                            className="offset-md-1"
                                        >
                                            <TextField
                                                {...register(
                                                    `tedDesignationId.${index}.tedId`
                                                )}
                                                required
                                                placeholder="TED Designation ID"
                                                label="TED Designation ID"
                                                className="maxWidth"
                                            />
                                        </Col>
                                    </Row>
                                )}

                                <Row>
                                    <Col xs={12} md={6} className="offset-md-1">
                                        <TextField
                                            {...register(
                                                `tedDesignationTitle.${index}.desigTitle`
                                            )}
                                            required
                                            placeholder="Designation Title"
                                            label="Designation Title"
                                            className="maxWidth"
                                        />
                                    </Col>

                                    <Col xs={12} md={4}>
                                        <div className="dollarAmount maxWidth">
                                            <TextField
                                                label="Designation Amount"
                                                placeholder="Designation Amount"
                                                inputProps={{
                                                    inputMode: "numeric",
                                                    pattern: "[0-9]*",
                                                }}
                                                {...register(
                                                    `totalDesignationAmount.${index}.totalAmount`
                                                )}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <GiftAssociatedOpportunity
                                    {...register(`giftAssociatedOpportunity`)}
                                />
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        </>
                    );
                })}
            </ul>

            <section>
                <button
                    type="button"
                    onClick={() => {
                        append({ name: "append" });
                    }}
                >
                    Add another designation
                </button>
            </section>
        </>
    );
}
