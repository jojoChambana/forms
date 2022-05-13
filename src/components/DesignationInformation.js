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
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import {
    parseNum,
    formatAmount,
    calcFinalTotals,
    newDesignation,
} from "./HelperFunctions";
import { IconContext } from "react-icons/lib";
import RadioButtons from "./RadioButtons";

export default function DesignationInformation({ trustMode = false }) {
    const { register, control, setValue, getValues, watch } = useFormContext();

    // used in building the repeating designation section.  Get the array of object from the 'designation' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "designation",
    });

    const pledgeRevLabel =
        trustMode === true
            ? "Planned Gift or Pledge Revenue ID"
            : "Pledge Revenue ID";

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const [isGiftPlanned, setGiftPlanned] = useState("no");

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
            <div>
                <ListGroup className="list-group row innerBorder">
                    {fields.map((item, index) => {
                        var newDesigChecked = getValues(
                            `designation[${index}].newDesignationRequestedChecked`
                        );
                        var nonGiftChecked = getValues(
                            `designation[${index}].nonGiftPortionChecked`
                        );
                        return (
                            <ListGroupItem key={index} className="mt-4">
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    className="mt-3"
                                >
                                    Designation Information
                                </Typography>
                                <Row>
                                    <Col>
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
                                                        checked={
                                                            newDesigChecked
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="mb-0">
                                                <Col>
                                                    <FormControlLabel
                                                        label="Check for Non-Gift Portion"
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
                                                                checked={
                                                                    nonGiftChecked
                                                                }
                                                            />
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                        </FormGroup>
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
                                                            getValues(
                                                                "designation"
                                                            ),
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

                                {/* if New Designation is checked, show two contact fields, otherwise show designation id */}
                                {newDesigChecked ? (
                                    <>
                                        <Row>
                                            <Col xs={12} md={3}>
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
                                            <Col xs={12} md={3}>
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
                                        <Col xs={12} md={3}>
                                            <Controller
                                                name={`designation.${index}.tedDesignationId`}
                                                control={control}
                                                render={({
                                                    field: { onChange, value },
                                                }) => (
                                                    <TextField
                                                        onChange={onChange}
                                                        value={value}
                                                        label="TED Designation ID"
                                                        required
                                                        className="maxWidth"
                                                    />
                                                )}
                                            />
                                        </Col>
                                    </Row>
                                )}
                                {/* designation title */}
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Controller
                                            name={`designation.${index}.tedDesignationTitle`}
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                            }) => (
                                                <TextField
                                                    onChange={onChange}
                                                    value={value}
                                                    label="Designation Title"
                                                    className="maxWidth"
                                                    required
                                                />
                                            )}
                                        />
                                    </Col>
                                </Row>
                                {/* Gift Amount */}
                                <Row>
                                    <Col xs={12} md={2}>
                                        <div className="dollarAmount maxWidth">
                                            <TextField
                                                label="Gift Amount"
                                                placeholder="0.00"
                                                required
                                                inputProps={{
                                                    inputMode: "numeric",
                                                    pattern:
                                                        "[0-9]+(.[0-9][0-9])?",
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
                                            <Col xs={12} md={2}>
                                                <div className="dollarAmount">
                                                    <TextField
                                                        {...register(
                                                            `designation.${index}.designationNonGiftAmount`
                                                        )}
                                                        required
                                                        inputProps={{
                                                            inputMode:
                                                                "numeric",
                                                            pattern:
                                                                "[0-9]+(.[0-9][0-9])?",
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
                                        </>
                                    )}
                                </Row>
                                {/* pledge revenue  */}
                                <Row>
                                    <Col>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            className="mt-3"
                                        >
                                            Planned Gift
                                        </Typography>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="p">
                                            Is this gift associated with a
                                            Planned Gift Application?
                                        </Typography>
                                    </Col>
                                </Row>
                                <Row className="border">
                                    <Col className="ml-2">
                                        <RadioButtons
                                            variablename="isGiftPlanned"
                                            values={["Yes", "No"]}
                                            radioChangedFlag={isGiftPlanned}
                                            setRadioChangedFlag={setGiftPlanned}
                                        />
                                    </Col>
                                    <FormGroup variablename="isGiftPlannedCheckBoxes">
                                        <Row>
                                            <Col>
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
                                    </FormGroup>
                                </Row>

                                {getValues("isGiftPlanned") === "Yes" ? (
                                    <>
                                        <Row>
                                            <Col>
                                                <Typography
                                                    variant="h5"
                                                    component="h3"
                                                >
                                                    Application
                                                </Typography>
                                            </Col>
                                        </Row>
                                        <Row className="border">
                                            <Col className="ml-2 d-flex align-items-center">
                                                <Typography
                                                    variant="p"
                                                    className="pr-3"
                                                >
                                                    <div
                                                        style={{
                                                            marginRight: "1em",
                                                        }}
                                                    >
                                                        This is a
                                                    </div>
                                                </Typography>
                                                <RadioButtons
                                                    variablename="applicationType"
                                                    values={[
                                                        "Planned Gift",
                                                        "Planned Gift Addition",
                                                    ]}
                                                    radioChangedFlag={
                                                        isGiftPlanned
                                                    }
                                                    setRadioChangedFlag={
                                                        setGiftPlanned
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    </>
                                ) : null}

                                <Row>
                                    <Col xs={12} md={4}>
                                        <TextField
                                            {...register(
                                                `designation.${index}.pledgeRevenueId`
                                            )}
                                            placeholder={pledgeRevLabel}
                                            label={pledgeRevLabel}
                                            className="maxWidth"
                                        />
                                    </Col>
                                </Row>
                                {/* opportunity checkbox and all of those fields  */}

                                <GiftAssociatedOpportunity index={index} />
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
            </div>
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
