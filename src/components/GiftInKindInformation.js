import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";
import { newGiftInKind, calcGIKTotals } from "./HelperFunctions";
import { IconContext } from "react-icons";
import { MdAdd, MdDelete } from "react-icons/md";

export default function GiftInKindInformation({
    alwaysShowDeleteButtons = true,
}) {
    const { register, control, setValue, getValues } = useFormContext();

    // used in building the repeating giftInKind section.  Get the array of object from the 'giftInKind' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "giftInKind",
    });

    var gikCount = 0;
    if (getValues("giftInKind") !== undefined)
        gikCount = getValues("giftInKind").length; // used to determine if we should show Delete security buttons

    // console.log("gikCount", gikCount);
    // console.log("alwaysShowDeleteButtons", alwaysShowDeleteButtons);
    return (
        <>
            <Typography
                variant="h5"
                component="h3"
                className="mt-2 mr-0 mb-2 ml-0"
            >
                Gift in Kind Information
            </Typography>
            <ListGroup className="list-group row">
                {fields.map((item, index) => {
                    return (
                        <ListGroupItem key={item.id} className="mt-3">
                            <FormGroup>
                                <Row className="mt-2 mr-0 mb-2 ml-0">
                                    <Col xs={12} md={3}>
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
                                    <Col xs={12} md={3}>
                                        <TextField
                                            {...register(
                                                `giftInKind.${index}.giftValue`
                                            )}
                                            required
                                            inputProps={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]+(.[0-9][0-9])?",
                                            }}
                                            placeholder="0"
                                            label="Gift Value (Use $1 if Unknown)"
                                            className="maxWidth"
                                        />
                                    </Col>

                                    {gikCount > 1 || alwaysShowDeleteButtons ? (
                                        <Col>
                                            <div
                                                className="end-align"
                                                id="gikDelete"
                                            >
                                                <Button
                                                    placeholder="Delete Gift in Kind"
                                                    label="Delete Gift in Kind"
                                                    className="addButtonIcon mt-1"
                                                    onClick={() => {
                                                        remove(index);
                                                        calcGIKTotals(
                                                            getValues(
                                                                "giftInKind"
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
                                        </Col>
                                    ) : (
                                        <></>
                                    )}
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
                            placeholder="Add Gift in Kind"
                            label="Add Gift in Kind"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newGiftInKind() });
                            }}
                        >
                            <IconContext.Provider
                                value={{
                                    size: "2em",
                                    title: "Add Gift in Kind",
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
