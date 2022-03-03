
import {
    RadioGroup, Radio,  FormControlLabel,FormLabel , FormGroup, TextField, Typography,Checkbox} from "@mui/material";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdNoteAdd, MdDeleteForever } from "react-icons/md";
import {  useFieldArray, useFormContext } from "react-hook-form";
import { newTrustGIK} from "./HelperFunctions";
import { Controller } from 'react-hook-form';


export default function TrustGIK() {

    const {
        register,
        control
    } = useFormContext();

    // used in building the repeating trustGIK section.  Get the array of object from the 'trustGIK' object in cashValues
    const { fields, append, remove } = useFieldArray({
        control,
        name: "trustGIK",
    });


    return (
        <>
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
                                        <div className="end-align">
                                            <Button
                                                placeholder="Delete Gift in Kind"
                                                label="Delete Gift in Kind"
                                                className="addButtonIcon mt-3"
                                                onClick={() => { remove(index); }}
                                            >
                                                Delete Gift in Kind{" "}
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
                                                `trustGIK.${index}.descriptionOfGift`
                                            )}
                                            required
                                            placeholder="Description of Gift"
                                            label="Description of Gift"
                                            className="maxWidth"
                                        />
                                    </Col>
                                    <Col xs={12} md={3} className="offset-md-2">
                                        <TextField
                                            {...register(
                                                `trustGIK.${index}.giftAmount`
                                            )}
                                            required
                                            inputProps={{
                                                inputMode: "numeric",
                                                pattern: "[0-9]+(.[0-9][0-9])?",
                                            }}                                            
                                            placeholder="0"
                                            label="Gift Amount"
                                            className="maxWidth"
                                        />                                      
                                    </Col>                                    
                                <Col xs={12} md={6} className="offset-md-2">
                                   <FormLabel> Is 8283 Required?</FormLabel>

                                <Controller
                                    rules={{ required: true }}
                                    control={control}
                                    name={`trustGIK.${index}.is8283Required`}
                                    render={({ field }) => (
                                    <RadioGroup {...field}>
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
                                    )}
                                />                                
                                     </Col>
                                     <Col>
                                     <Controller
                                            rules={{ required: true }}
                                            control={control}
                                            name={`trustGIK.${index}.testCheckBox`}
                                            render={({ field }) => (
                                            <Checkbox
                                            {...field}
                                            checked={field.value}
                                            onChange={(e) => field.onChange(e.target.checked)}
                                        />
                                            )}
                                        />
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
        </>
    );
}
