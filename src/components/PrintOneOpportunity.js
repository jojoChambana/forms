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

import {    Typography} from "@mui/material";
import { formatAmount} from '../HelperFunctions'


const PrintOneOpportunity = ({oneDesignation,  index}) => {
    return (
        <>
        <div>TED Household ID: {oneDesignation.tedHouseholdId}</div>
        <div>TED Household Name: {oneDesignation.tedHouseholdName}</div>
        <div>Plan Name: {oneDesignation.tedHouseholdName}</div>
        <div>Opportunity Amount: {formatAmount(oneDesignation.tedOpportunityAmount)}</div>
        <div>Actual Ask Date: {oneDesignation.actualAskDate}</div>
        <div>Primary Plan Manager: {oneDesignation.primaryPlanManager}</div>
        </>
    );            
}
export default PrintOneOpportunity;