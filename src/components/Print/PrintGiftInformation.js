import { Typography } from "@mui/material";
import React from "react";

export default function PrintGiftInformation({ formValues }) {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Typography variant="h5" component="h3">
                        Gift Information
                    </Typography>
                </div>
            </div>
            <div className="row border">
                <div className="col">
                    <div className="rightLabel">IRA Distribution:</div>
                </div>
                <div className="col">
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.iraDistribution}
                        </span>
                    </div>
                </div>
                {!formValues.receiptToTrustServices === false ||
                !formValues.receiptToTrustServices === false ||
                !formValues.receiptToPlannedGiving === false ? (
                    <>
                        <div className="col">
                            <div className="rightLabel">Send Receipt To:</div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                <div className="col">
                    {!formValues.receiptToTrustServices === false ? (
                        <div className="d-print-table-cell maxWidth">
                            <div>
                                <span className="normal">Trust Services</span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {!formValues.receiptToPlannedGiving === false ? (
                        <div className="d-print-table-cell maxWidth">
                            <div>
                                <span className="normal">Planned Giving</span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {!formValues.receiptToDevelopmentPrograms === false ? (
                        <div className="d-print-table-cell maxWidth">
                            <div>
                                <span className="normal">
                                    Development Programs
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                {!formValues.receiptToOther === false ? (
                    <>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div
                                        className="d-print-table-cell maxWidth justify-content-end"
                                        style={{ paddingRight: "7.5em" }}
                                    >
                                        <div className="rightLabel">
                                            Send Receipt To Other:
                                        </div>

                                        <span
                                            className="normal"
                                            style={{
                                                maxWidth: "200px",
                                                wordBreak: "break-word",
                                            }}
                                        >
                                            {formValues.receiptToOther}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}