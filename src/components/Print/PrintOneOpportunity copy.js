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
            <>
                <Row>
                    <div className="colOne rightLabel">TED Household ID:</div>
                    <div className="colOne ">
                        <span className="normal">
                            {oneDesignation.tedHouseholdId}
                        </span>
                    </div>
                </Row>
            </>
            <Row style={rowStyle}>
                <Col className="designationOpportunity rightLabel">
                    TED Household Name:
                </Col>
                <Col>
                    <span className="normal">
                        {oneDesignation.tedHouseholdName}
                    </span>
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col className="designationOpportunity rightLabel">
                    Plan Name:
                </Col>
                <Col>
                    <span className="normal">
                        {oneDesignation.tedHouseholdName}{" "}
                        {/* This needs changed to "designation.0.tedPlanName" */}
                    </span>
                </Col>
            </Row>
            {/* <div>TED Household ID: {oneDesignation.tedHouseholdId}</div> */}
            {/* <div>
                        TED Household Name: {oneDesignation.tedHouseholdName}
                    </div> */}
            {/* <div>Plan Name: {oneDesignation.tedHouseholdName}</div> */}
            <Row style={rowStyle}>
                <Col className="designationOpportunity rightLabel">
                    Opportunity Amount:
                </Col>
                <Col>
                    <span className="normal">
                        {formatAmount(oneDesignation.tedOpportunityAmount)}
                    </span>
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col className="designationOpportunity rightLabel">
                    Actual Ask Date:{" "}
                </Col>
                <Col>
                    <span className="normal">
                        {oneDesignation.actualAskDate}
                    </span>
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col className="designationOpportunity rightLabel">
                    Primary Plan Manager:
                </Col>
                <Col>
                    <span className="normal">
                        {" "}
                        {oneDesignation.primaryPlanManager}
                    </span>
                </Col>
            </Row>
        </>
    );
};
export default PrintOneOpportunity;
