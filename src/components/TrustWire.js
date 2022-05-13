import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdDelete, MdAdd } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { newTrustWire } from "./HelperFunctions";
import { IconContext } from "react-icons";

export default function TrustWire() {
    // used in building the repeating trustWire section.  Get the array of object from the 'trustWire' object in cashValues

    const { register, control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "trustWire",
    });

    // var trustWireCount = 0
    // if (getValues("trustWire") !== undefined)
    //     trustWireCount = getValues("trustWire").length; // used to determine if we should show Delete Wire buttons

    return (
        <>
            <Typography
                variant="h5"
                component="h3"
                className="mt-2 mr-0 mb-2 ml-0"
            >
                Wire Information
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
                                                `trustWire.${index}.bankName`
                                            )}
                                            required
                                            placeholder="Bank Name"
                                            label="Bank Name"
                                            className="maxWidth"
                                        />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <TextField
                                            {...register(
                                                `trustWire.${index}.totalValue`
                                            )}
                                            inputProps={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]+(.[0-9][0-9])?",
                                            }}
                                            placeholder="0.00"
                                            label="Total Value"
                                            required
                                        />
                                    </Col>
                                    <Col>
                                        <div className="end-align">
                                            <Button
                                                placeholder="Delete Wire"
                                                label="Delete Wire"
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
                            placeholder="Add Wire"
                            label="Add Wire"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newTrustWire() });
                            }}
                        >
                            <IconContext.Provider
                                value={{
                                    size: "2em",
                                    title: "Add Wire",
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
