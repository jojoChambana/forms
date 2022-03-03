import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export default function DomesticAddress({ prefix }) {

    const { register } = useFormContext();

    return (
        <>
            <Row>
                <Col xs={12} md={3}>
                    <TextField
                        {...register(`${prefix}DomesticAddress`)}
                        required
                        placeholder="Address"
                        className="maxWidth"
                        label="Address"
                    />
                    {/* <ErrorMessage errors={errors} name="addressError" /> */}
                </Col>
                <Col xs={12} md={3}>
                    <TextField
                        {...register(`${prefix}DomesticAddressCity`)}
                        required
                        id={`${prefix}DomesticAddressCity`}
                        label="City"
                        className="maxWidth"
                    />
                </Col>
                <Col xs={12} md={2}>
                    <TextField
                        {...register(`${prefix}DomesticAddressState`)}
                        required
                        id={`${prefix}DomesticAddressState`}
                        label="State"
                        className="maxWidth"
                    />
                </Col>
                <Col xs={12} md={2}>
                    <TextField
                        {...register(`${prefix}DomesticAddressZipCode`)}
                        required
                        id={`${prefix}DomesticAddressZipCode`}
                        label="Zip Code"
                        className="maxWidth"
                    />
                </Col>
            </Row>
        </>
    );
}
