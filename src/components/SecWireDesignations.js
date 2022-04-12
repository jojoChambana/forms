import { FormGroup, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdAdd, MdDelete } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
    parseNum,
    formatAmount,
    calcFinalTotals,
    newDesignation,
} from "./HelperFunctions";
import { IconContext } from "react-icons/lib";

export default function SecWireDesignations() {
    const { register, control, setValue, getValues, watch } = useFormContext();

    // used in building the repeating designation section.  Get the array of object from the 'designation' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "designation",
    });

    var designationCount = getValues("designation").length; // used to determine if we should show Delete Designation buttons

    // this is used to recalculate the Total Amount field when each gift or nongift amount is changed
    useEffect(() => {
        const subscription = watch((values, { name, value }) => {
            if (name.startsWith("designation.")) {
                const [, index, fieldName] = name.split("."); // the name is designation.index.fieldname.  we need the index

                if (
                    fieldName === "designationGiftAmount" ||
                    fieldName === "designationNonGiftAmount"
                ) {
                    setValue(
                        `designation[${index}].designationTotalAmount`,
                        formatAmount(
                            parseNum(
                                values.designation[index].designationGiftAmount
                            ) +
                                parseNum(
                                    values.designation[index]
                                        .designationNonGiftAmount
                                )
                        )
                    );
                }
            }
        });
        return () => subscription.unsubscribe();
    });

    return (
        <>
            <ListGroup>
                <Typography variant="h5" component="h3" className="mt-2 mb-3">
                    Designation Information
                </Typography>
                {fields.map((item, index) => {
                    return (
                        <ListGroupItem key={item.id} className="mb-3">
                            <Row className="mt-3">
                                <Col xs={12} md={3}>
                                    <TextField
                                        {...register(
                                            `designation.${index}.tedDesignationId`
                                        )}
                                        required
                                        placeholder="TED Designation ID"
                                        label="TED Designation ID"
                                        className="maxWidth"
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField
                                        {...register(
                                            `designation.${index}.tedDesignationTitle`
                                        )}
                                        required
                                        placeholder="Designation Title"
                                        label="Designation Title"
                                        className="maxWidth"
                                    />
                                </Col>
                                <Col xs={2}>
                                    <FormGroup>
                                        <Row className="mb-0">
                                            <Col>
                                                {/* only show the 'delete Designation' button if there is more than one item being shown */}
                                                {designationCount > 1 ? (
                                                    <div className="end-align">
                                                        <Button
                                                            placeholder="Delete Designation"
                                                            label="Delete Designation"
                                                            className="addButtonIcon mt-1"
                                                            onClick={() => {
                                                                remove(index);
                                                                calcFinalTotals(
                                                                    fields,
                                                                    setValue
                                                                );
                                                            }}
                                                        >
                                                            <IconContext.Provider
                                                                value={{
                                                                    size: "2em",
                                                                }}
                                                            >
                                                                <MdDelete />
                                                            </IconContext.Provider>
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={2}>
                                    <div className="dollarAmount maxWidth">
                                        <TextField
                                            label="Gift Amount"
                                            placeholder="0.00"
                                            required
                                            inputProps={{
                                                inputMode: "numeric",
                                            }}
                                            {...register(
                                                `designation.${index}.designationGiftAmount`
                                            )}
                                        />
                                    </div>
                                </Col>

                                <Col xs={12} md={2}>
                                    <div className="dollarAmount">
                                        <TextField
                                            {...register(
                                                `designation.${index}.designationNonGiftAmount`
                                            )}
                                            inputProps={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]+(.[0-9][0-9])?",
                                            }}
                                            placeholder="Non-gift Amount"
                                            label="Non-gift Amount"
                                            className="maxWidth"
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} md={2}>
                                    <div className="dollarAmount">
                                        <TextField
                                            disabled
                                            {...register(
                                                `designation.${index}.designationTotalAmount`
                                            )}
                                            placeholder="Total Amount"
                                            label="Total Amount"
                                            className="maxWidth"
                                            defaultValue="0"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    {/* Last is the comments field  */}
                                    <TextField
                                        placeholder="Comments"
                                        label="Comments"
                                        {...register(
                                            `designation.${index}.designationAdditionalComments`
                                        )}
                                        className="maxWidth"
                                    />
                                </Col>
                            </Row>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            {/* the Add Designation button at the end */}
            <Row>
                <Col xs={6} md={3}>
                    <div>
                        <Button
                            placeholder="Add Designation"
                            label="Add Designation"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newDesignation() });
                            }}
                        >
                            <IconContext.Provider
                                value={{
                                    size: "2em",
                                    title: "Add Designation",
                                }}
                            >
                                <MdAdd />
                            </IconContext.Provider>
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
