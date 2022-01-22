import { FormLabel, Input, InputLabel, TextField, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
// import TotalDonationAmount from "./TotalDonationAmount";

export default function TransmittalTotals() {
    const { register } = useFormContext(); // retrieve all hook methods
    return (
        <div>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">Transmittal Totals</Typography>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={2}>
                    <FormLabel>Total donation amount</FormLabel>
                    <div className="dollarAmount">
                        <Input disabled label="Total donation amount" {...register("giftTotals")} />
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <FormLabel>Non-gift total</FormLabel>
                    <div className="dollarAmount">
                        <Input disabled htmlFor="Non-Gift" label="Non-Gift" {...register("Non-gift totals")} />
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <FormLabel>Total donations</FormLabel>
                    <div className="dollarAmount">
                        <Input disabled htmlFor="Total Donations" label="Total Donations" {...register("Total donations")} />
                    </div>
                </Col>
            </Row>
        </div>
    )

}
