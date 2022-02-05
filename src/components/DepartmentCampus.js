import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function DepartmentCampus({ register }) {
    return (
        <>
            <FormControl>
                <RadioGroup
                    aria-labelledby="campus-Location"
                    defaultValue="Urbana"
                >
                    <Row>
                        <Col>
                            <FormControlLabel
                                value="Urbana"
                                control={
                                    <Radio {...register("campusLocation")} />
                                }
                                label="Urbana"
                            />
                        </Col>
                        <Col>
                            <FormControlLabel
                                value="Chicago"
                                control={
                                    <Radio {...register("campusLocation")} />
                                }
                                label="Chicago"
                            />
                        </Col>
                        <Col>
                            <FormControlLabel
                                value="Springfield"
                                control={
                                    <Radio {...register("campusLocation")} />
                                }
                                label="Springfield"
                            />
                        </Col>
                    </Row>
                </RadioGroup>
            </FormControl>
        </>
    );
}
