import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function GiftAssociatedPledge({ errors, register }) {
    const [visible, setvisible] = useState(false);
    const handleChange = () => {
        setvisible(!visible);
    };
    return (
        <FormGroup>
            <Row className="mb-0">
                <Col>
                    <FormControlLabel
                        label="Check if this gift is associated with a pledge"
                        control={
                            <Checkbox
                                placeholder="Is this gift associated with a pledge?"
                                {...register("giftAssociatedWithPledge")}
                                onChange={handleChange}
                            />
                        }
                    />
                </Col>
            </Row>
            {visible && (
                <Row>
                    <Col xs={12} md={4}>
                        <TextField
                            {...register("pledgeRevenueId")}
                            placeholder="Pledge Revenue ID"
                            label="Pledge Revenue ID"
                            className="maxWidth"
                        />
                    </Col>
                </Row>
            )}
        </FormGroup>
    );
}
