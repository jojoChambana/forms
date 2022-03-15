import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdDelete, MdAdd } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { newTrustCheck } from "./HelperFunctions";
import { IconContext } from "react-icons";

export default function TrustCheck() {
    const { register, control } = useFormContext();

    // used in building the repeating trustCheck section.  Get the array of object from the 'trustCheck' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "trustCheck",
    });

    // var trustCheckCount = 0
    // if (getValues("trustCheck") !== undefined)
    //     trustCheckCount = getValues("trustCheck").length; // used to determine if we should show Delete Check buttons

    return (
        <>
            <Typography
                variant="h5"
                component="h3"
                className="mt-2 mr-0 mb-2 ml-0"
            >
                Check Information
            </Typography>
            <ListGroup className="row">
                {fields.map((item, index) => {
                    return (
                        <ListGroupItem key={item.id} className="mt-3">
                            <FormGroup>
                                <Row className="mt-2 mr-0 mb-2 ml-0">
                                    <Col xs={12} md={3}>
                                        <TextField
                                            {...register(
                                                `trustCheck.${index}.bankName`
                                            )}
                                            required
                                            placeholder="Check Number(s)"
                                            label="Check Number(s)"
                                            className="maxWidth"
                                        />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <TextField
                                            {...register(
                                                `trustCheck.${index}.checkTotal`
                                            )}
                                            inputProps={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]+(.[0-9][0-9])?",
                                            }}
                                            placeholder="0.00"
                                            label="Check Total"
                                            required
                                        />
                                    </Col>
                                    <Col>
                                        <div className="end-align">
                                            <Button
                                                placeholder="Delete Check"
                                                label="Delete Check"
                                                className="addButtonIcon mt-1"
                                                onClick={() => {
                                                    remove(index);
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
                                    </Col>
                                </Row>
                            </FormGroup>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            <Row>
                <Col xs={6} md={3}>
                    <div>
                        <Button
                            placeholder="Add Check"
                            label="Add Check"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newTrustCheck() });
                            }}
                        >
                            <IconContext.Provider
                                value={{
                                    size: "2em",
                                    title: "Add Check",
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
