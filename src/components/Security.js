import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdDelete, MdAdd } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { calcFinalTotals, newDesignation } from "./HelperFunctions";
import { IconContext } from "react-icons/lib";

export default function Security({ alwaysShowSecurtityDeleteButtons }) {
    const { register, control, getValues } = useFormContext();

    // used in building the repeating security section.  Get the array of object from the 'security' object in cashValues
    const { fields, setValue, append, remove } = useFieldArray({
        control,
        name: "security",
    });

    var securityCount = 0;
    if (getValues("security") !== undefined)
        securityCount = getValues("security").length; // used to determine if we should show Delete security buttons

    return (
        <>
            <Typography variant="h5" component="h3" className="mt-2 mb-3">
                Security Information
            </Typography>
            <ListGroup>
                {fields.map((item, index) => {
                    return (
                        <ListGroupItem key={item.id} className="mb-3">
                            <Row className="pt-3">
                                <Col xs={12} md={2}>
                                    <TextField
                                        {...register(
                                            `security.${index}.shares`
                                        )}
                                        required
                                        placeholder="Shares"
                                        label="Shares"
                                        className="maxWidth securityShares"
                                        thousandSeparator={true}
                                    />
                                </Col>
                                <Col xs={12} md={4}>
                                    <TextField
                                        {...register(`security.${index}.name`)}
                                        required
                                        placeholder="Name"
                                        label="Name"
                                        className="maxWidth"
                                    />
                                </Col>

                                <Col xs={12} md={3}>
                                    <TextField
                                        {...register(
                                            `security.${index}.symbol`
                                        )}
                                        required
                                        placeholder="Symbol"
                                        label="Symbol"
                                        className="maxWidth"
                                    />
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Row className="mb-0">
                                            <Col>
                                                {/* only show the 'delete Security' button if there is more than one item being shown */}
                                                {securityCount > 1 ||
                                                alwaysShowSecurtityDeleteButtons ? (
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
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            {/* the Add Security button at the end */}
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
