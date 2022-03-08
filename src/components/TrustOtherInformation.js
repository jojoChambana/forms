import { TextField, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

import "react-phone-number-input/style.css";

export default function TrustOtherInformation() {
    const { register } = useFormContext();

    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Other Information
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <TextField
                        {...register("otherInformation")}
                        placeholder="Other information"
                        className="maxWidth"
                        label="Other information"
                    />
                </Col>
            </Row>
        </>
    );
}
