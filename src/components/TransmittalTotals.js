import { FormLabel, Input, InputLabel, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
// import TotalDonationAmount from "./TotalDonationAmount";

export default function TransmittalTotals({ register, setValue, watch }) {

    const parseNum = (num) => {
        let newValue = parseFloat(num)

        if (isNaN(newValue))
            newValue = 0;

        return (newValue)
    }

    useEffect(() => {

        const subscription = watch((values, { name, value }) => {

            if (name === "totalDonationAmount" || name === "totalDesignationAmount") {

                setValue("giftTotals", parseNum(values.totalDonationAmount) + parseNum(values.totalDesignationAmount));

            }

        })

        return () => subscription.unsubscribe();

    });


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
                        <Input disabled htmlFor="Non-Gift" label="Non-Gift" {...register("nonGiftTotals")} />
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <FormLabel>Total donations</FormLabel>
                    <div className="dollarAmount">
                        <Input disabled htmlFor="Total Donations" label="Total Donations" {...register("totaldonations")} />
                    </div>
                </Col>
            </Row>
        </div>
    )

}
