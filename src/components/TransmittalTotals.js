import { FormLabel, TextField, Typography } from "@mui/material";
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
                    <div className="dollarAmount">
                        <TextField disabled {...register("giftTotals")} />
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <div className="dollarAmount">
                        <TextField disabled placeholder="Non-Gift" label="Non-Gift" {...register("Non-gift totals")} />
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <div className="dollarAmount">
                        <TextField disabled placeholder="Total Donations" label="Total Donations" {...register("Total donations")} />
                    </div>
                </Col>
            </Row>
        </div>
    )

}
