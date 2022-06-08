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
                        <Typography
                            variant="h5"
                            component="h3"
                            className="mt-3"
                        >
                            Gift Information
                        </Typography>
                    </div>
                </div>
            ) : (
                <></>
            )}

            <div className="row border">
                <div className="col-6">
                    <div className="d-print-table-row">
                        <div className="rightLabel">Busey Bank number: </div>
                        <div
                            className="d-print-table-cell"
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {" "}
                            <span className="normal">
                                {formValues.bankNumber}
                            </span>
                        </div>
                    </div>
                    {formValues.trustType === "Outright" ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">IRA Distribution: </div>
                            <div
                                className="d-print-table-cell"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {" "}
                                <span className="normal">
                                    {formValues.iraDistribution}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {!formValues.receiptToOther === false ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                Send Receipt To Other:
                            </div>
                            <div className="d-print-table-cell">
                                <span
                                    className="normal"
                                    style={{ wordBreak: "break-all" }}
                                >
                                    {formValues.receiptToOther}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="col-6">
                    {!formValues.receiptToTrustServices === false ? (
                        <div className="d-print-table-row">
                            <div className="d-print-table-cell leftLabel">
                                Receipt To:
                            </div>
                            <div className="maxWidth">
                                <span
                                    className="normal"
                                    style={{ paddingLeft: "0" }}
                                >
                                    Trust Services
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {!formValues.receiptToPlannedGiving === false ? (
                        <div className="d-print-table-row">
                            <div className="d-print-table-cell leftLabel">
                                Receipt To:
                            </div>
                            <div className="maxWidth">
                                <span
                                    className="normal"
                                    style={{ paddingLeft: "0" }}
                                >
                                    Planned Giving
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {!formValues.receiptToDevelopmentPrograms === false ? (
                        <div className="d-print-table-row">
                            <div className="d-print-table-cell leftLabel">
                                Receipt To:
                            </div>
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
            </div>
        </>
    );
}
