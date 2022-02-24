import {
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdNoteAdd, MdDeleteForever } from "react-icons/md";
import { useFieldArray } from "react-hook-form";
import {
    parseNum,
    formatAmount,
    calcFinalTotals,
    newDesignation,
} from "./HelperFunctions";

export default function SecWireDesignations({
    register,
    control,
    setValue,
    getValues,
    watch,
}) {
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
            <Typography variant="h5" component="h3">
                Designation Information
            </Typography>        
            <ListGroup className="list-group row">
                {fields.map((item, index) => {
                    return (
                        <ListGroupItem key={item.id}>

                            <FormGroup>
                                <Row className="mb-0">
                                    <Col>
                                        {/* only show the 'delete Designation' button if there is more than one item being shown */}
                                        {designationCount > 1 ? (
                                            <div className="end-align">
                                                <Button
                                                    placeholder="Delete Designation"
                                                    label="Delete Designation"
                                                    className="addButtonIcon mt-3"
                                                    onClick={() => {
                                                        remove(index);
                                                        calcFinalTotals(
                                                            fields,
                                                            setValue
                                                        );
                                                    }}
                                                >
                                                    Delete Designation{" "}
                                                    <MdDeleteForever />
                                                </Button>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </Col>
                                </Row>
                            </FormGroup>

                                <Row>
                                    <Col xs={12} md={3} className="offset-md-2">
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
                                <Col xs={12} md={6} className="offset-md-2">
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
                                <Col xs={12} md={2} className="offset-md-2">
                                    <div className="dollarAmount maxWidth">
                                        <TextField
                                            label="Gift Amount"
                                            placeholder="0.00"
                                            required
                                            inputProps={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]+(.[0-9][0-9])?",
                                            }}
                                            {...register(
                                                `designation.${index}.designationGiftAmount`
                                            )}
                                        />
                                    </div>
                                </Col>

                                        <Col
                                            xs={12}
                                            md={2}
                                            className="offset-md-2"
                                        >
                                            <div className="dollarAmount">
                                                <TextField
                                                    {...register(
                                                        `designation.${index}.designationNonGiftAmount`
                                                    )}
                                                    required
                                                    inputProps={{
                                                        inputMode: "numeric",
                                                        pattern:
                                                            "[0-9]+(.[0-9][0-9])?",
                                                    }}
                                                    placeholder="Non-gift Amount"
                                                    label="Non-gift Amount"
                                                    className="maxWidth"
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={12}
                                            md={2}
                                            className="offset-md-2"
                                        >
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
                            Add Designation <MdNoteAdd />
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}