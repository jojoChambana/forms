import { Typography } from "@mui/material";
import React from "react";

export default function PrintGiftInformation({ formValues, trustType }) {
    return (
        <>
            {!formValues.receiptToOther === false ||
            !formValues.receiptToOther === false ||
            !formValues.receiptToTrustServices === false ||
            !formValues.iraDistribution === false ||
            !formValues.receiptToPlannedGiving === false ||
            !formValues.receiptToDevelopmentPrograms === false ? (
                <div className="row">
                    <div className="col">
                        <Typography variant="h5" component="h3">
                            Gift Information
                        </Typography>
                    </div>
                </div>
            ) : (
                <></>
            )}

            <div className="row border">
                <div className="col-6">
                    {!formValues.receiptToTrustServices === false ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">Receipt To:</div>
                            <div className="maxWidth">
                                <span className="normal">Trust Services</span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {!formValues.noReceiptNecessary === false ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                Receipt to Trust Services:
                            </div>
                            <div className="maxWidth">
                                <span className="normal">No</span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {!formValues.receiptToPlannedGiving === false ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">Receipt To:</div>
                            <div className="maxWidth">
                                <span className="normal">Planned Giving</span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {!formValues.receiptToDevelopmentPrograms === false ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">Receipt To:</div>
                            <div className="maxWidth">
                                <span className="normal">
                                    Development Programs
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="col-6">
                    {!trustType === "Life Income" ? (
                        <></>
                    ) : (
                        <div className="d-print-table-row">
                            <div
                                className="leftLabel"
                                style={{ maxWidth: "none" }}
                            >
                                IRA Distribution:
                            </div>
                            <div
                                className="d-print-table-cell"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <span className="normal">
                                    {formValues.iraDistribution}
                                </span>
                            </div>
                        </div>
                    )}

                    {!formValues.receiptToOther === false ? (
                        <div className="row">
                            <div className="col">
                                <div className="d-print-table-row">
                                    <div className="col leftLabel">
                                        Send Receipt To Other:
                                    </div>
                                    <div className="d-print-table-cell d-flex align-items-center">
                                        <span className="normal">
                                            {formValues.receiptToOther}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
}
