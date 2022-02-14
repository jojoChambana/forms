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
                <div className="col">
                    <div class="d-print-table-cell"></div>

                    <div className="d-print-table-row">
                        <div class="rightLabel">
                            <strong>Opportunity Details</strong>
                        </div>
                    </div>
                    <br />
                    <div className="d-print-table-row">
                        <div class="rightLabel">TED Household ID:</div>
                        <div class="d-print-table-cell">
                            <span class="normal">
                                <span className="normal">
                                    {oneDesignation.tedHouseholdId}
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div class="rightLabel">TED Household Name:</div>
                        <div class="d-print-table-cell">
                            <span className="normal">
                                {oneDesignation.tedHouseholdName}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div class="rightLabel">Plan Name:</div>
                        <div class="d-print-table-cell">
                            <span className="normal">
                                {/* {oneDesignation.designation.index.tedPlanName} */}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div class="rightLabel">Opportunity Amount:</div>
                        <div class="d-print-table-cell">
                            <span className="normal">
                                {formatAmount(
                                    oneDesignation.tedOpportunityAmount
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div class="rightLabel">Actual Ask Date:</div>
                        <div class="d-print-table-cell">
                            <span className="normal longName">
                                {oneDesignation.actualAskDate}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div class="rightLabel">Primary Plan Manager:</div>
                        <div class="d-print-table-cell">
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
