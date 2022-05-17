import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdDelete, MdAdd } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { calcFinalTotals, newDesignation } from "./HelperFunctions";
import { IconContext } from "react-icons/lib";

export default function TrustApplication() {
    const { register, control, getValues } = useFormContext();

    // used in building the repeating application section.  Get the array of object from the 'application' object in cashValues
    const { fields, setValue, append, remove } = useFieldArray({
        control,
        name: "application",
    });

    var applicationCount = 0;
    if (getValues("application") !== undefined)
        applicationCount = getValues("application").length; // used to determine if we should show Delete application buttons
    console.log("Application", applicationCount);
    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Application Information
                    </Typography>
                </Col>
            </Row>

            <>
                <ListGroup className="list-group">
                    {fields.map((item, index) => {
                        return (
                            <ListGroupItem
                                key={item.id}
                                style={{
                                    border: "none",
                                    padding: "0em 0em 1em 0.5em",
                                }}
                            >
                                <div className="applicationInfo">
                                    <div className="col-2">
                                        <TextField
                                            {...register(
                                                `application.${index}.applicationDate`
                                            )}
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
                                            label="Plan Gift Type"
                                            className="dateField maxWidth"
                                        />
                                    </div>
                                    <div className="col-2">
                                        <TextField
                                            {...register(
                                                `application.${index}.planGiftAmount`
                                            )}
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
                    </Col>
                </Row>
            </>
        </>
    );
}
