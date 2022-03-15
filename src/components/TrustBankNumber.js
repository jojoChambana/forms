import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

import "react-phone-number-input/style.css";

export default function TrustBankNumber() {
    const { register } = useFormContext();

    return (
        <Row>
            <Col xs={12} md={3} className="mt-4">
                <TextField
                    {...register("bankNumber")}
                    placeholder="Busey Bank Number"
                    className="maxWidth"
                    label="Busey Bank Number"
                />
            </Col>
        </Row>
    );
}
