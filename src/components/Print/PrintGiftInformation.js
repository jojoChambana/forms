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
            <div className="row">
                <div className="col">
                    <div className="d-print-table-row">
                        <div className="col rightLabel">IRA Distribution:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.iraDistribution}
                            </span>
                        </div>
                    </div>

                    {!formValues.receiptToOther === false ? (
                        <div className="row">
                            <div className="col">
                                <div className="d-print-table-row">
                                    <div className="col rightLabel">
                                        Send Receipt To Other:
                                    </div>
                                    <div className="d-print-table-cell">
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
                <div className="col">
                    <div className="d-print-table-row">
                        {!formValues.receiptToTrustServices === false ? (
                            <div className="col">
                                <div className="d-print-table-row">
                                    <div className="col rightLabel">
                                        Receipt To:
                                    </div>
                                    <div className="maxWidth">
                                        <span className="normal">
                                            Trust Services
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>

                    {!formValues.receiptToPlannedGiving === false ? (
                        <div className="col">
                            <div className="d-print-table-row">
                                <div className="col rightLabel">
                                    Receipt To:
                                </div>
                                <div className="maxWidth">
                                    <span className="normal">
                                        Planned Giving
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {!formValues.receiptToDevelopmentPrograms === false ? (
                        <div className="d-print-table-row">
                            <div className="col rightLabel">Receipt To:</div>
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
