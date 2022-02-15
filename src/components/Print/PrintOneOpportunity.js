// import {
//     Container,
//     createTheme,
//     Grid,
//     ThemeProvider,
//     Typography,
// } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
// import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import { useRef } from "react";
// import PrintForeign from "../components/PrintForeign";
// import AddressPrint from "../components/AddressPrint";

import { Typography } from "@mui/material";
import { formatAmount } from "../HelperFunctions";

const rowStyle = {
    marginBottom: 0,
};
const PrintOneOpportunity = ({ oneDesignation, index }) => {
    return (
        <>
            <div className="resultItems row">
                <div className="d-print-table-row">
                    <div className="d-print-table-cell d-flex justify-content-center">
                        <span className="normal">
                            <strong>Opportunity Details</strong>
                        </span>
                    </div>
                </div>
                <div className="col">
                    <div className="d-print-table-row">
                        <div className="rightLabel">TED Household ID:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {oneDesignation.tedHouseholdId}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">TED Household Name:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {oneDesignation.tedHouseholdName}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Plan Name:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {oneDesignation.tedPlanName}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Opportunity Amount:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formatAmount(
                                    oneDesignation.tedOpportunityAmount
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Actual Ask Date:</div>
                        <div className="d-print-table-cell">
                            <span className="normal longName">
                                {oneDesignation.actualAskDate}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Primary Plan Manager:</div>
                        <div className="d-print-table-cell">
                            <span className="normal longName">
                                {oneDesignation.primaryPlanManager}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PrintOneOpportunity;