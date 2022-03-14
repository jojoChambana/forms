import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdNoteAdd, MdDeleteForever } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { newTrustWire } from "./HelperFunctions";

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
            <Typography variant="h5" component="h3">
                Wire Information
            </Typography>
            <ListGroup className="row">
                {fields.map((item, index) => {
                    return (
                        <ListGroupItem key={item.id}>
                            <FormGroup>
                                <Row className="mb-0">
                                    <Col>
                                        <div className="end-align">
                                            <Button
                                                placeholder="Delete Wire"
                                                label="Delete Wire"
                                                className="addButtonIcon mt-3"
                                                onClick={() => {
                                                    remove(index);
                                                }}
                                            >
                                                Delete Wire <MdDeleteForever />
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <Row>
                                <Col xs={12} md={3} className="offset-md-2">
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
                                <Col xs={12} md={6} className="offset-md-2">
                                    <TextField
                                        {...register(
                                            `trustWire.${index}.totalValue`
                                        )}
                                        inputProps={{
                                            inputMode: "numeric",
                                            pattern: "[0-9]+(.[0-9][0-9])?",
                                        }}
                                        placeholder="0.00"
                                        label="Total Value of Securities"
                                        required
                                    />
                                </Col>
                            </Row>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            {/* the Add Wire button at the end */}
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
                            Add Wire <MdNoteAdd />
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
