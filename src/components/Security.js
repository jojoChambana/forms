import {
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdNoteAdd, MdDeleteForever } from "react-icons/md";
import {  useFieldArray } from "react-hook-form";
import { newSecurity} from "./HelperFunctions";

export default function Security({
    register,
    control,
    getValues,
}) {
    // used in building the repeating security section.  Get the array of object from the 'security' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "security",
    });

 
    var securityCount = getValues("security").length; // used to determine if we should show Delete security buttons

    return (
        <>
            <Typography variant="h5" component="h3">
            Security Information
            </Typography>        
            <ListGroup className="list-group row">
                {fields.map((item, index) => {

                    return (
                        <ListGroupItem key={item.id}>

                            <FormGroup>
                                <Row className="mb-0">
                                    <Col>
                                        {/* only show the 'delete Security' button if there is more than one item being shown */}
                                        {securityCount > 1 ? (
                                            <div className="end-align">
                                                <Button
                                                    placeholder="Delete Security"
                                                    label="Delete Security"
                                                    className="addButtonIcon mt-3"
                                                    onClick={() => { remove(index); }}
                                                >
                                                    Delete Security{" "}
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
                                    <Col xs={12} md={3} className="offset-md-2">
                                        <TextField
                                            {...register(
                                                `security.${index}.shares`
                                            )}
                                            required
                                            placeholder="Shares"
                                            label="Shares"
                                            className="maxWidth"
                                        />
                                    </Col>
                                <Col xs={12} md={6} className="offset-md-2">
                                    <TextField
                                        {...register(
                                            `security.${index}.name`
                                        )}
                                        required
                                        placeholder="Name"
                                        label="Name"
                                        className="maxWidth"
                                    />
                                     </Col>
                                     <Col xs={12} md={6} className="offset-md-2">
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
                            placeholder="Add Security"
                            label="Add Security"
                            className="addButtonIcon"
                            onClick={() => {
                                append({ ...newSecurity() });
                            }}
                        >
                            Add Security <MdNoteAdd />
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
