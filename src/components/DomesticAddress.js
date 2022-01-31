import { TextField } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
import { ErrorMessage } from '@hookform/error-message';

export default function DomesticAddress({ errors, register }) {

    return (
        <Row>
            <Col xs={12} md={3}>
                <TextField {...register("domesticAddress")} required placeholder='Address' className="maxWidth" label="Address" />
                {/* <ErrorMessage errors={errors} name="addressError" /> */}
            </Col>
            <Col xs={12} md={3}>
                <TextField
                    {...register("domesticCity")}
                    required
                    id="donorCity"
                    label="City"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("domesticState")}
                    required
                    id="donorState"
                    label="State"
                    className="maxWidth"
                />
            </Col>
            <Col xs={12} md={2}>
                <TextField
                    {...register("zipCode")}
                    required
                    id="donorPostalCode"
                    label="Zip Code"
                    className="maxWidth"
                />
            </Col>
        </Row>
    )
}
