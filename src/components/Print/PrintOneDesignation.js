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
import PrintOneOpportunity from './PrintOneOpportunity'
import { formatAmount } from '../HelperFunctions'


const PrintOneDesignation = ({oneDesignation,  index}) => {
    return (
           <li key={oneDesignation.id}>
               <div>Designation# {index + 1} </div>
               <div>{oneDesignation.newDesignationRequestedChecked 
                    ? "New Designation Requested.  Contact: " + oneDesignation.departmentContact + "   " + oneDesignation.departmentContactEmail 
                    : "Designation ID: " + oneDesignation.tedDesignationId }                           
                </div>
                <div>
                    Designation Title: {oneDesignation.tedDesignationTitle}
                </div>
                <div>
                    Gift Amount: {formatAmount(oneDesignation.designationGiftAmount)}
                </div>
                <div>
                    {oneDesignation.nonGiftPortionChecked
                    ? "Non-Gift Amount: " + formatAmount(oneDesignation.designationNonGiftAmount) + "   Total: " + formatAmount(oneDesignation.designationTotalAmount)
                    : " " }
                </div>
                <div>
                    {oneDesignation.pledgeRevenueId !== ""
                    ? "Pledge Revenue ID: " + oneDesignation.pledgeRevenueId
                    : " " }
                </div>
                <div>
                    {oneDesignation.associatedOpportunityChecked
                    ? <PrintOneOpportunity oneDesignation={oneDesignation} index={index} />
                    : " " }
                </div>                
                <div>
                    {oneDesignation.designationAdditionalComments !== ""
                    ? "Comments: " + oneDesignation.designationAdditionalComments
                    : " " }
                </div>
           </li>
    );            
}
export default PrintOneDesignation;