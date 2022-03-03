import {
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdNoteAdd, MdDeleteForever } from "react-icons/md";
import {  useFieldArray, useFormContext } from "react-hook-form";
import { newTrustCheck} from "./HelperFunctions";

export default function TrustCheck() {
    
    const {
        register,
        control
    } = useFormContext();

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
            <Typography variant="h5" component="h3">
            Check Information
            </Typography>        
            <ListGroup className="list-group row">
                {fields.map((item, index) => {

                    return (
                        <ListGroupItem key={item.id}>

                            <FormGroup>
                                <Row className="mb-0">
                                    <Col>
                                        <div className="end-align">
                                            <Button
                                                placeholder="Delete Check"
                                                label="Delete Check"
                                                className="addButtonIcon mt-3"
                                                onClick={() => { remove(index); }}
                                            >
                                                Delete Check{" "}
                                                <MdDeleteForever />
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </FormGroup>

                                <Row>
                                    <Col xs={12} md={3} className="offset-md-2">
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
                                <Col xs={12} md={6} className="offset-md-2">
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
                            placeholder="Add Check"
                            label="Add Check"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newTrustCheck() });
                            }}
                        >
                            Add Check <MdNoteAdd />
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
