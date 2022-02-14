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
            <Row>
                <div className="singular-offset">
                    <div className="colOne rightLabel">TED Household ID:</div>
                    <div className="colOne ">
                        <span className="normal">
                            {oneDesignation.tedHouseholdId}
                        </span>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="singular-offset">
                    <div className="colOne rightLabel">TED Household Name:</div>
                    <div className="colOne">
                        <span className="normal">
                            {oneDesignation.tedHouseholdName}
                        </span>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="singular-offset">
                    <div className="colOne rightLabel">
                        Plan Name: <strong> FIX! </strong>
                    </div>
                    <div className="colOne">
                        <span className="normal">
                            {/* {oneDesignation.designation.{index}.tedPlanName} */}
                        </span>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="singular-offset">
                    <div className="colOne rightLabel">Opportunity Amount:</div>
                    <div className="colOne">
                        <span className="normal">
                            {formatAmount(oneDesignation.tedOpportunityAmount)}
                        </span>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="singular-offset">
                    <div className="colOne rightLabel">Actual Ask Date:</div>
                    <div className="colOne">
                        <span className="normal">
                            {oneDesignation.actualAskDate}
                        </span>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="singular-offset">
                    <div className="colOne rightLabel">
                        Primary Plan Manager:
                    </div>
                    <div className="colOne">
                        <span className="normal">
                            {oneDesignation.primaryPlanManager}
                        </span>
                    </div>
                </div>
            </Row>
        </>
    );
};
export default PrintOneOpportunity;
