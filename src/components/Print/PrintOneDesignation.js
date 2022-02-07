// import {
//     Container,
//     createTheme,
//     Grid,
//     ThemeProvider,
//     Typography,
// } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
// import { useNavigate } from "react-router-dom";
import { Row, Col, ListGroupItem } from "react-bootstrap";
// import { useRef } from "react";
// import PrintForeign from "../components/PrintForeign";
// import AddressPrint from "../components/AddressPrint";

import { Typography } from "@mui/material";
import PrintOneOpportunity from "./PrintOneOpportunity";
import { formatAmount } from "../HelperFunctions";

const PrintOneDesignation = ({ oneDesignation, index }) => {
    return (
        <ListGroupItem
            className="aDesignation"
            key={"designation" + index}
            // className="col-sm-12 col-md-6"
        >
            <>
                <div className="designationNumber">
                    Designation# {index + 1}{" "}
                </div>
                <div className="designationId">
                    {oneDesignation.newDesignationRequestedChecked
                        ? "New Designation Requested.  Contact: " +
                          oneDesignation.departmentContact +
                          "   " +
                          oneDesignation.departmentContactEmail
                        : "Designation ID: " + oneDesignation.tedDesignationId}
                </div>
                <div className="designationTitle">
                    Designation Title: {oneDesignation.tedDesignationTitle}
                </div>
                <div className="designationGiftAmount">
                    Gift Amount:{" "}
                    {formatAmount(oneDesignation.designationGiftAmount)}
                </div>
                <div className="designationNonGiftAmount">
                    {oneDesignation.nonGiftPortionChecked
                        ? "Non-Gift Amount: " +
                          formatAmount(
                              oneDesignation.designationNonGiftAmount
                          ) +
                          "   Total: " +
                          formatAmount(oneDesignation.designationTotalAmount)
                        : " "}
                </div>
                <div className="designationPledgeId">
                    {oneDesignation.pledgeRevenueId !== ""
                        ? "Pledge Revenue ID: " + oneDesignation.pledgeRevenueId
                        : " "}
                </div>
                <div className="designationOpportunity">
                    {oneDesignation.associatedOpportunityChecked ? (
                        <PrintOneOpportunity
                            oneDesignation={oneDesignation}
                            index={index}
                        />
                    ) : (
                        " "
                    )}
                </div>
                <div className="designationComments">
                    {oneDesignation.designationAdditionalComments !== ""
                        ? "Comments: " +
                          oneDesignation.designationAdditionalComments
                        : " "}
                </div>
            </>
        </ListGroupItem>
    );
};
export default PrintOneDesignation;
