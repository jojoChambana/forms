import { Typography } from "@mui/material";
import React from "react";

export default function PrintGiftInformation({ formValues, trustType }) {
    return (
        <>
            {formValues.receiptToOther === false ||
            formValues.receiptToTrustServices ||
            formValues.iraDistribution === false ||
            formValues.iraDistribution === false ||
            formValues.iraDistribution === false ||
            formValues.receiptToPlannedGiving === false ||
            formValues.bankNumber === false ||
            formValues.noReceiptNecessary ||
            formValues.receiptToDevelopmentPrograms === false ? (
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

            <div className="border">
                <div
                    className="row"
                    style={{ padding: "2em 0em 1em 0em", marginBottom: "0" }}
                >
                    <div className="col-6">
                        {formValues.trustType === "Outright" ||
                        formValues.trustType === "Life Income" ? (
                            <>
                                {formValues.receiptToOther ? (
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Receipt To Other:{" "}
                                        </div>
                                        <div
                                            className="d-print-table-cell"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {" "}
                                            <span className="normal">
                                                {formValues.receiptToOther}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (
                            <></>
                        )}

                        {formValues.trustType === "Life Income" &&
                        formValues.bankNumber > 0 ? (
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    Busey Bank number:{" "}
                                </div>
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
                        ) : (
                            <></>
                        )}
                        {formValues.trustType === "Outright" ? (
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    IRA Distribution:{" "}
                                </div>
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
                        <div className="col-12">
                            {formValues.receiptToTrustServices ? (
                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        Receipt To:{" "}
                                    </div>
                                    <div
                                        className="d-print-table-cell"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {" "}
                                        <span className="normal">
                                            Trust Services
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        {formValues.receiptToDevelopmentPrograms === true &&
                        (formValues.trustType === "Outright" ||
                            formValues.trustType === "Life Income") ? (
                            <div className="d-print-table-row">
                                <div className="d-print-table-cell leftLabel">
                                    Receipt To:
                                </div>
                                <div className="maxWidth">
                                    <span
                                        className="normal"
                                        style={{ paddingLeft: "0" }}
                                    >
                                        Development Programs
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        {formValues.receiptToPlannedGiving === true ? (
                            formValues.trustType === "Outright" ||
                            formValues.trustType === "LifeIncome" ? (
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
                            )
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {formValues.trustType === "Estate" ? (
                                formValues.noReceiptNecessary === true ? (
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            <span>Receipt To: </span>
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                No Receipt Necessary Per Trust
                                                Services
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )
                            ) : (
                                <></>
                            )}
                        </div>
                        {/* <div className="col-6">
                            <div className="d-print-table-row"></div>
                            <div className="d-print-table-row"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
