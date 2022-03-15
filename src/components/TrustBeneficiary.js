import { FormGroup, TextField, Typography } from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdAdd, MdDelete } from "react-icons/md";
import { useFieldArray, useFormContext } from "react-hook-form";
import { newTrustBeneficiary } from "./HelperFunctions";
import { IconContext } from "react-icons";

export default function TrustBeneficiary() {
    const { register, control, getValues } = useFormContext();

    // used in building the repeating trustCheck section.  Get the array of object from the 'trustCheck' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "trustBeneficiary",
    });

    var trustBeneficiaryCount = 0;
    if (getValues("trustBeneficiary") !== undefined)
        trustBeneficiaryCount = getValues("trustBeneficiary").length; // used to determine if we should show Delete Check buttons

    return (
        <>
            <Typography variant="h5" component="h3" className="mt-4">
                Beneficiary Information
            </Typography>
            <ListGroup className="list-group row">
                {fields.map((item, index) => {
                    return (
                        <ListGroupItem key={index} className="mt-4">
                            <Row className="pt-3">
                                <Col xs={12} md={3}>
                                    <TextField
                                        {...register(
                                            `trustBeneficiary.${index}.lastName`
                                        )}
                                        placeholder="Last Name, if other than Donor"
                                        label="Last Name, if other than Donor"
                                        className="maxWidth"
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField
                                        {...register(
                                            `trustBeneficiary.${index}.firstName`
                                        )}
                                        placeholder="First Name"
                                        label="First Name"
                                        required
                                    />
                                </Col>
                                <Col>
                                    {/* only show the 'delete Designation' button if there is more than one item being shown */}
                                    {trustBeneficiaryCount > 1 ? (
                                        <FormGroup>
                                            <Row className="mb-0">
                                                <Col>
                                                    <div className="end-align">
                                                        <Button
                                                            placeholder="Delete Beneficiary"
                                                            label="Delete Beneficiary"
                                                            className="addButtonIcon mt-3"
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
                                    ) : (
                                        <></>
                                    )}
                                </Col>
                            </Row>
                            <Row className="pt-1">
                                <Col xs={12} md={3}>
                                    <TextField
                                        {...register(
                                            `trustBeneficiary.${index}.tedConstituentID`
                                        )}
                                        placeholder="TED Constituent ID"
                                        label="TED Constituent ID"
                                        required
                                        className="maxWidth"
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField
                                        {...register(
                                            `trustBeneficiary.${index}.dateOfBirth`
                                        )}
                                        placeholder="Date of Birth"
                                        label="Date of Birth"
                                        required
                                    />
                                </Col>
                            </Row>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            {/* the Add Check button at the end */}
            <Row>
                <Col xs={6} md={3}>
                    <div>
                        <Button
                            placeholder="Add Beneficiary"
                            label="Add Beneficiary"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newTrustBeneficiary() });
                            }}
                        >
                            <IconContext.Provider
                                value={{
                                    size: "2em",
                                    title: "Add Beneficiary",
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
