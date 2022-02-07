import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import GiftAssociatedOpportunity from "./GiftAssociatedOpportunity";
import { Controller, useFieldArray } from "react-hook-form";
import {
    parseNum,
    formatAmount,
    calcFinalTotals,
    newDesignation,
} from "./HelperFunctions";
import CurrencyFormat from "react-currency-format";
import NumberFormat from "react-number-format";

export default function DesignationInformaiton({
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
            <ul className="list-group mb-4">
                {fields.map((item, index) => {
                    var newDesigChecked = getValues(
                        `designation[${index}].newDesignationRequestedChecked`
                    );
                    var nonGiftChecked = getValues(
                        `designation[${index}].nonGiftPortionChecked`
                    );

                    return (
                        <li className="list-group-item pt-3" key={item.id}>
                            <Typography variant="h5" component="h3">
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
                                            <Button
                                                placeholder="Delete Designation"
                                                label="Delete Designation"
                                                onClick={() => {
                                                    remove(index);
                                                    calcFinalTotals(
                                                        fields,
                                                        setValue
                                                    );
                                                }}
                                            >
                                                Delete Designation
                                            </Button>
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
                                            placeholder="Gift Amount"
                                            required
                                            inputProps={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]*",
                                            }}
                                            {...register(
                                                `designation.${index}.designationGiftAmount`
                                            )}
                                        />
                                    </div>
                                </Col>

                                {/* <Col xs={12} md={2} className="offset-md-2">
                                    <div className="dollarAmount maxWidth">
                                        <CurrencyFormat
                                            label="Gift Amount"
                                            placeholder="Gift Amount"
                                            required
                                            thousandSeparator={true}
                                            prefix={"$"}
                                            displayType={"input"}
                                            decimalScale={2}
                                            inputprops={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]*",
                                            }}
                                            {...register(
                                                `designation.${index}.designationGiftAmount`
                                            )}
                                        />
                                    </div>
                                </Col> */}

                                {/* <Col>
                                    <Controller
                                        as={
                                            <NumberFormat
                                                customInput={TextField}
                                                thousandSeparator={true}
                                                prefix={"$ "}
                                                onValueChange={(v) => {
                                                    //value without dollar signe
                                                    // const [, index] =
                                                    //     v.split(".");
                                                    // setValue(
                                                    //     `designation.${index}.designationGiftAmount`,
                                                    //     v.value
                                                    // );
                                                    console.log(v.value);
                                                }}
                                            />
                                        }
                                        name="amount"
                                        variant="outlined"
                                        defaultValue="20000"
                                        control={control}
                                    />
                                </Col> */}

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
                                <Col xs={12} md={4}>
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
                            {/* opportunity checkbox andf all of those fields  */}
                            <GiftAssociatedOpportunity
                                register={register}
                                setValue={setValue}
                                getValues={getValues}
                                index={index}
                            />
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
                        </li>
                    );
                })}
            </ul>
            {/* the Add Designation button at the end */}
            <Row>
                <Col xs={6} md={3}>
                    <Button
                        placeholder="Add Designation"
                        label="Add Designation"
                        onClick={() => {
                            append({ ...newDesignation() });
                        }}
                    >
                        Add Designation
                    </Button>
                </Col>
            </Row>
        </>
    );
}
