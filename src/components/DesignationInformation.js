import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdDelete, MdAdd } from "react-icons/md";
import GiftAssociatedOpportunity from "./GiftAssociatedOpportunity";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
    parseNum,
    formatAmount,
    calcFinalTotals,
    newDesignation,
} from "./HelperFunctions";
import { IconContext } from "react-icons/lib";

export default function DesignationInformation() {
    const { register, control, setValue, getValues, watch } = useFormContext();

    // used in building the repeating designation section.  Get the array of object from the 'designation' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "designation",
    });

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const handleChangeNewDesignation = (event) => {
        const [, index] = event.target.name.split("."); // the name will be 'designation.index.newDesignationRequestedChecked ' and we just need the index
        setValue(
            `designation.${index}.newDesignationRequestedChecked`,
            event.target.checked
        ); // set the rect hook array element appropriately
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

    const handleChangeIncludesNonGiftChecked = (event) => {
        const [, index] = event.target.name.split("."); // the name will be 'designation.index.nonGiftPortionChecked ' and we just need the index
        setValue(
            `designation.${index}.nonGiftPortionChecked`,
            event.target.checked
        ); // the name will be 'designation.index.newDesignationRequestedChecked ' and we just need the index
        setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
    };

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
            <ListGroup className="list-group row">
                {fields.map((item, index) => {
                    var newDesigChecked = getValues(
                        `designation[${index}].newDesignationRequestedChecked`
                    );
                    var nonGiftChecked = getValues(
                        `designation[${index}].nonGiftPortionChecked`
                    );

                    return (
                        <ListGroupItem key={item.id}>
                            <Typography
                                variant="h5"
                                component="h3"
                                className="mt-3"
                            >
                                Designation Information
                            </Typography>
                            <FormGroup>
                                <Row className="mb-0">
                                    {/* the two checkboxes at the top */}
                                    <Col>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...register(
                                                        `designation.${index}.newDesignationRequestedChecked`
                                                    )}
                                                    onChange={
                                                        handleChangeNewDesignation
                                                    }
                                                />
                                            }
                                            label="New Designation Requested"
                                            name={`newDesigCheckbox.${index}`}
                                            checked={newDesigChecked}
                                        />
                                    </Col>
                                    <Col>
                                        <FormControlLabel
                                            label="Check for non-gift portion"
                                            control={
                                                <Checkbox
                                                    placeholder="Is there a non-gift portion?"
                                                    {...register(
                                                        `designation.${index}.nonGiftPortionChecked`
                                                    )}
                                                    onChange={
                                                        handleChangeIncludesNonGiftChecked
                                                    }
                                                    name={`NonGiftCheckbox.${index}`}
                                                    checked={nonGiftChecked}
                                                />
                                            }
                                        />
                                    </Col>
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
                                                    <IconContext.Provider
                                                        value={{ size: "2em" }}
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

                            {/* if New Designation is checked, show two contact fields, otherwise show designation id */}
                            {newDesigChecked ? (
                                <>
                                    <Row>
                                        <Col
                                            xs={12}
                                            md={4}
                                            className="offset-md-2"
                                        >
                                            <TextField
                                                {...register(
                                                    `designation.${index}.departmentContactEmail`
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
                                                    `designation.${index}.departmentContact`
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
                                </Row>
                            )}
                            {/* designation title */}
                            <Row>
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
                            </Row>
                            {/* Gift Amount */}
                            <Row>
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

                                {/* Only show nongift and total if nongift is checked */}
                                {nonGiftChecked && (
                                    <>
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
                                    </>
                                )}
                            </Row>
                            {/* pledge revenue  */}
                            <Row>
                                <Col xs={12} md={4} className="offset-md-2">
                                    <TextField
                                        {...register(
                                            `designation.${index}.pledgeRevenueId`
                                        )}
                                        placeholder="Pledge Revenue ID"
                                        label="Pledge Revenue ID"
                                        className="maxWidth"
                                    />
                                </Col>
                            </Row>
                            {/* opportunity checkbox and all of those fields  */}
                            <GiftAssociatedOpportunity index={index} />
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
