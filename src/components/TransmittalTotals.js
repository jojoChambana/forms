import { FormLabel, Input, Typography } from "@mui/material";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

// import { useFormContext } from "react-hook-form";
import { calcFinalTotals, calcGIKTotals } from "./HelperFunctions";
// import TotalDonationAmount from "./TotalDonationAmount";

export default function TransmittalTotals({ ignoreNonGiftChecked, showGIKTotal = false }) {
    const {
        register,
        setValue,
        watch
    } = useFormContext();

    useEffect(() => {
        const subscription = watch((values, { name, value }) => {
            if (name.startsWith("designation.")) {
                calcFinalTotals(
                    values.designation,
                    setValue,
                    ignoreNonGiftChecked
                );
            }
            if (name.startsWith("giftInKind.")) {
                calcGIKTotals(
                    values.giftInKind,
                    setValue);
            }            
        });
        return () => subscription.unsubscribe();
    });

    return (
        <div>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Transmittal Totals
                    </Typography>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={2}>
                    <FormLabel className="dollarAmountLabel">
                        Gift Total
                    </FormLabel>
                    <div className="dollarAmount">
                        <Input
                            disabled
                            defaultValue={0}
                            label="Gift Total"
                            {...register("giftTotal")}
                        />
                    </div>
                </Col>

                <Col xs={12} md={2}>
                    <FormLabel className="dollarAmountLabel">
                        Non-gift Total
                    </FormLabel>
                    <div className="dollarAmount">
                        <Input
                            disabled
                            htmlFor="Non-Gift Total"
                            label="Non-Gift"
                            {...register("nonGiftTotal")}
                        />
                    </div>
                </Col>
                <Col xs={12} md={2}>
                    <FormLabel className="dollarAmountLabel">
                        Total Amount
                    </FormLabel>
                    <div className="dollarAmount">
                        <Input
                            disabled
                            htmlFor="Total Amount"
                            label="Total Amount"
                            {...register("overallTotal")}
                        />
                    </div>
                </Col>
                {showGIKTotal && 
                    <Col xs={12} md={2}>
                        <FormLabel className="dollarAmountLabel">
                            Gift in Kind Total
                        </FormLabel>
                        <div className="dollarAmount">
                            <Input
                                disabled
                                htmlFor="Gift in Kind Total"
                                label="Gift in Kind Total"
                                {...register("gikTotal")}
                            />
                        </div>
                    </Col>
                }                
            </Row>
        </div>
    );
}
