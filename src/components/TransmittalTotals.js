import { FormLabel, Input, Typography } from "@mui/material";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

// import { useFormContext } from "react-hook-form";
import { calcFinalTotals, calcGIKTotals, parseNum } from "./HelperFunctions";
// import TotalDonationAmount from "./TotalDonationAmount";

export default function TransmittalTotals({
    ignoreNonGiftChecked,
    showGIKTotal = false,
    setShowProblemMessage = undefined,
    isTrustMode = false,
    formType,
}) {
    const { register, setValue, watch, getValues } = useFormContext();

    useEffect(() => {
        const subscription = watch((values, { name, value }) => {
            let totalsChanged = false;
            if (name.startsWith("designation.")) {
                calcFinalTotals(
                    values.designation,
                    setValue,
                    ignoreNonGiftChecked
                );
                totalsChanged = true;
            }
            if (name.startsWith("giftInKind.")) {
                calcGIKTotals(values.giftInKind, setValue);
                totalsChanged = true;
            }
            if (totalsChanged && showGIKTotal) {
                if (
                    parseNum(getValues("gikTotal")) !==
                    parseNum(getValues("overallTotal"))
                ) {
                    setShowProblemMessage(true);
                } else {
                    setShowProblemMessage(false);
                }
            }
            var objectCount = 0;

            if (isTrustMode) {
                if (getValues("seeAttachedSecuritiesListCheckbox") === true)
                    objectCount += 1;
                else {
                    // if (getValues("security") !== undefined)
                    objectCount += getValues("security")?.length || 0; // used to determine if we should show Delete security buttons}
                }

                // console.log("I got here", getValues("trustWireX")?.length || 0);

                // if (getValues("trustWire") !== undefined)
                //     objectCount += getValues("trustWire").length; // used to determine if we should show Delete security buttons}
                // if (getValues("trustCheck") !== undefined)
                //     objectCount += getValues("trustCheck").length; // used to determine if we should show Delete security buttons}
                // if (getValues("giftInKind") !== undefined)
                //     objectCount += getValues("giftInKind").length; // used to determine if we should show Delete security buttons}

                objectCount += getValues("trustWire")?.length || 0; // used to determine if we should show Delete security buttons}

                objectCount += getValues("trustCheck")?.length || 0; // used to determine if we should show Delete security buttons}

                objectCount += getValues("giftInKind")?.length || 0; // used to determine if we should show Delete security buttons}

                if (objectCount === 0) {
                    setShowProblemMessage(true);
                } else {
                    setShowProblemMessage(false);
                }
            }
        });
        return () => subscription.unsubscribe();
    });

    return (
        <div>
            <Row className="pt-2 pb-2">
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
                {showGIKTotal && (
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
                )}
            </Row>
        </div>
    );
}
