import {
    FormGroup,
    TextField,
    Typography,
    createTheme,
} from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdNoteAdd, MdDeleteForever } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { newGiftInKind, calcGIKTotals} from "./HelperFunctions";
import { ThemeProvider } from "@emotion/react";
import { useRef } from "react";

export default function GiftInKindInformation({ alwaysShowDeleteButtons = true }) {

    const { register, control, setValue, getValues } = useFormContext();

    // used in building the repeating giftInKind section.  Get the array of object from the 'giftInKind' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "giftInKind",
    });

    const componentRef = useRef();

    const theme = createTheme({
        typography: {
            formCat: {
                fontWeight: "bold",
            },
        },
    });

    var gikCount = 0;
    if (getValues("giftInKind") !== undefined)
        gikCount = getValues("giftInKind").length; // used to determine if we should show Delete security buttons

        console.log('gikCount',gikCount)
        console.log('alwaysShowDeleteButtons',alwaysShowDeleteButtons)
    return (
        <>
            <ThemeProvider theme={theme}>
                <div ref={componentRef}>
                    <Typography variant="h5" component="h3">
                        Gift in Kind Information
                    </Typography>
                    <ListGroup className="list-group row">
                        {fields.map((item, index) => {
                            return (
                                <ListGroupItem key={item.id}>
                                    <FormGroup>
                                        <Row className="mb-0">
                                            <Col>
                                            {gikCount > 1 ||
                                                alwaysShowDeleteButtons ? (                                            
                                                <div className="end-align">
                                                    <Button
                                                        placeholder="Delete Gift in Kind"
                                                        label="Delete Gift in Kind"
                                                        className="addButtonIcon mt-3"
                                                        onClick={() => {
                                                            remove(index);
                                                            calcGIKTotals(getValues("giftInKind"), setValue);
                                                        }}
                                                    >
                                                        Delete Gift in Kind{" "}
                                                        <MdDeleteForever />
                                                    </Button>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
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
                                                    `giftInKind.${index}.descriptionOfGift`
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
                                                    `giftInKind.${index}.giftValue`
                                                )}
                                                required
                                                inputProps={{
                                                    inputMode: "numeric",
                                                    pattern:
                                                        "[0-9]+(.[0-9][0-9])?",
                                                }}
                                                placeholder="0"
                                                label="Gift Value (Use $1 if Unknown)"
                                                className="maxWidth"
                                            />
                                        </Col>
                                        <Col
                                            xs={12}
                                            md={6}
                                            className="offset-md-2"
                                        >
                                            
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
                                        append({ ...newGiftInKind() });
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
