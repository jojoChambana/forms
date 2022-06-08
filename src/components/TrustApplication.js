import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdDelete, MdAdd } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { calcFinalTotals, newApplication } from "./HelperFunctions";
import { IconContext } from "react-icons/lib";
import RadioButtons from "./RadioButtons";
import { useState } from "react";

export default function TrustApplication({ formType, formValues, index }) {
    const { register, control, getValues } = useFormContext();
    const [radioChanged, setRadioChanged] = useState(false); // needed to force re-render
    // used in building the repeating application section.  Get the array of object from the 'application' object in cashValues
    const { fields, setValue, append, remove } = useFieldArray({
        control,
        name: "application",
    });

    var applicationCount = 0;

    if (getValues("application") !== undefined)
        applicationCount = getValues("application").length; // used to determine if we should show Delete application buttons

    return (
        <>
            <Row>
                <Col className="pb-0">
                    <Typography variant="h5" component="h3">
                        Application Information
                    </Typography>
                </Col>
            </Row>

            <>
                <ListGroup className="list-group">
                    {fields.map((item, index) => {
                        // console.log(
                        //     "I got Here",
                        //     getValues(
                        //         `application.${index}.isApplicationDonorDifferent`
                        //     )
                        // );
                        return (
                            <ListGroupItem
                                key={item.id}
                                style={{
                                    border: "none",
                                    padding: "0em 0em 1em 0.5em",
                                }}
                            >
                                <div className="col pt-0 pb-0">
                                    <div className="d-flex align-items-center">
                                        <div className="col-1">This is a</div>
                                        <div className="col-8">
                                            <RadioButtons
                                                variableName={`application.${index}.applicationType`}
                                                // required={true}
                                                {...register(
                                                    `application.${index}.applicationType`
                                                )}
                                                values={[
                                                    "Planned Gift",
                                                    "Planned Gift Addition",
                                                ]}
                                                radioChangedFlag={radioChanged}
                                                setRadioChangedFlag={
                                                    setRadioChanged
                                                }
                                                checked
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col pt-0">
                                    <div className="d-flex align-items-center">
                                        <div className="col-4">
                                            Is Donor different than Donor above?
                                        </div>
                                        <div className="col-8">
                                            <RadioButtons
                                                variableName={`application.${index}.isApplicationDonorDifferent`}
                                                {...register(
                                                    `application.${index}.isApplicationDonorDifferent`
                                                )}
                                                values={["Yes", "No"]}
                                                radioChangedFlag={radioChanged}
                                                setRadioChangedFlag={
                                                    setRadioChanged
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                {getValues(
                                    `application.${index}.isApplicationDonorDifferent`
                                ) === "Yes" ? (
                                    <div className="row">
                                        <div
                                            className="d-flex justify-content-around"
                                            style={{
                                                position: "relative",
                                                right: "0.2em",
                                            }}
                                        >
                                            <div className="col-4">
                                                <TextField
                                                    {...register(
                                                        `application.${index}.dLastOrgName`
                                                    )}
                                                    required
                                                    placeholder="Last/Organization Name"
                                                    label="Last/Organization Name"
                                                    className="maxWidth"
                                                />
                                            </div>
                                            <div className="col-3">
                                                <TextField
                                                    {...register(
                                                        `application.${index}.dFirstName`
                                                    )}
                                                    placeholder="First Name"
                                                    label="First Name"
                                                    className="maxWidth"
                                                />
                                            </div>
                                            <div className="col-4">
                                                <TextField
                                                    {...register(
                                                        `application.${index}.dMiddleName`
                                                    )}
                                                    placeholder="Middle Name"
                                                    label="Middle Name"
                                                    className="maxWidth"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}

                                <div
                                    className="applicationInfo"
                                    style={{ width: "maxContent" }}
                                >
                                    <div className="col-2">
                                        <TextField
                                            {...register(
                                                `application.${index}.applicationDate`
                                            )}
                                            required
                                            placeholder="Date"
                                            label="Date"
                                            className="maxWidth"
                                        />
                                    </div>

                                    <div className="col-6">
                                        <TextField
                                            {...register(
                                                `application.${index}.planGiftType`
                                            )}
                                            required
                                            label="Plan Gift Type"
                                            className="dateField maxWidth"
                                        />
                                    </div>
                                    <div className="col-2">
                                        <TextField
                                            {...register(
                                                `application.${index}.planGiftAmount`
                                            )}
                                            required
                                            label="Plan Gift Amount"
                                            className="dateField maxWidth"
                                        />
                                    </div>

                                    <div className="col-1">
                                        <FormGroup>
                                            <div className="row mb-0">
                                                <div className="col">
                                                    {/* only show the 'delete application' button if there is more than one item being shown */}
                                                    {applicationCount > 1 ? (
                                                        <div className="end-align">
                                                            <Button
                                                                placeholder="Delete Designation"
                                                                label="Delete Designation"
                                                                className="addButtonIcon mt-1"
                                                                onClick={() => {
                                                                    remove(
                                                                        index
                                                                    );
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
                                                </div>
                                            </div>
                                        </FormGroup>
                                    </div>
                                </div>
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>

                {/* the Add application button at the end */}
                <Row>
                    <Col style={{ padding: "0em 1em" }}>
                        <Button
                            placeholder="Add Application"
                            label="Add Application"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newApplication() });
                            }}
                        >
                            <IconContext.Provider
                                value={{
                                    size: "2em",
                                    title: "Add Application",
                                }}
                            >
                                <MdAdd />
                            </IconContext.Provider>
                        </Button>
                    </Col>
                </Row>
            </>
        </>
    );
}
