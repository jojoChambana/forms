import {
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    FormGroup,
    TextField,
    Typography,
    FormControl,
    createTheme,
} from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdNoteAdd, MdDeleteForever } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useState } from "react";
import { newTrustGIK } from "./HelperFunctions";
import { ThemeProvider } from "@emotion/react";
import { useRef } from "react";

export default function TrustGIK() {
    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const { register, control, getValues, setValue } = useFormContext();

    // used in building the repeating trustGIK section.  Get the array of object from the 'trustGIK' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "trustGIK",
    });

    const componentRef = useRef();

    const theme = createTheme({
        typography: {
            formCat: {
                fontWeight: "bold",
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <div ref={componentRef}>
                    <Typography variant="h5" component="h3">
                        Gift in Kind Information
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
                                                        placeholder="Delete Gift in Kind"
                                                        label="Delete Gift in Kind"
                                                        className="addButtonIcon mt-3"
                                                        onClick={() => {
                                                            remove(index);
                                                        }}
                                                    >
                                                        Delete Gift in Kind{" "}
                                                        <MdDeleteForever />
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </FormGroup>

                                    <Row>
                                        <Col
                                            xs={12}
                                            md={3}
                                            className="offset-md-2"
                                        >
                                            <TextField
                                                {...register(
                                                    `trustGIK.${index}.descriptionOfGift`
                                                )}
                                                required
                                                placeholder="Description of Gift"
                                                label="Description of Gift"
                                                className="maxWidth"
                                            />
                                        </Col>
                                        <Col
                                            xs={12}
                                            md={3}
                                            className="offset-md-2"
                                        >
                                            <TextField
                                                {...register(
                                                    `trustGIK.${index}.giftAmount`
                                                )}
                                                required
                                                inputProps={{
                                                    inputMode: "numeric",
                                                    pattern:
                                                        "[0-9]+(.[0-9][0-9])?",
                                                }}
                                                placeholder="0"
                                                label="Gift Amount"
                                                className="maxWidth"
                                            />
                                        </Col>
                                        <Col
                                            xs={12}
                                            md={6}
                                            className="offset-md-2"
                                        >
                                            <FormLabel>
                                                Is 8283 Required?
                                            </FormLabel>

                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby={`trustGIK.${index}.is8283Required`}
                                                    value={getValues(
                                                        `trustGIK.${index}.is8283Required`
                                                    )}
                                                    onChange={(event) => {
                                                        setValue(
                                                            `trustGIK.${index}.is8283Required`,
                                                            event.target.value
                                                        ); // set the rect hook array element appropriately
                                                        setaCheckboxChanged(
                                                            !aCheckboxChanged
                                                        ); // this will trigger a re-render of the page to hide/show elements
                                                    }}
                                                    name="iraDistribution"
                                                >
                                                    <FormControlLabel
                                                        value="Yes"
                                                        control={<Radio />}
                                                        label="Yes"
                                                    />
                                                    <FormControlLabel
                                                        value="No"
                                                        control={<Radio />}
                                                        label="No"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                    {/* the Add Gift in Kind button at the end */}
                    <Row>
                        <Col xs={6} md={3}>
                            <div>
                                <Button
                                    placeholder="Add Gift in Kind"
                                    label="Add Gift in Kind"
                                    className="addButtonIcon"
                                    onClick={() => {
                                        append({ ...newTrustGIK() });
                                    }}
                                >
                                    Add Gift in Kind <MdNoteAdd />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </ThemeProvider>
        </>
    );
}
