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
    const rowStyle = {
        marginBottom: 0,
    };
    return (
        <div>
            <div className="resultItems">
                <ListGroupItem
                    className="aDesignation"
                    key={"designation" + index}
                >
                    <div className="resultItems row">
                        <div className="col">
                            <div class="d-print-table-cell">
                                <div className="d-print-table-row">
                                    <div class="rightLabel">Designation#:</div>
                                    <div class="d-print-table-cell">
                                        <span className="normal">
                                            {index + 1}{" "}
                                        </span>
                                    </div>
                                </div>
                                <br />
                                {oneDesignation.newDesignationRequestedChecked ? (
                                    <>
                                        <div className="d-print-table-row">
                                            <div class="rightLabel">
                                                Contact Requested:
                                            </div>
                                            <div class="d-print-table-cell">
                                                <span class="normal">
                                                    {
                                                        oneDesignation.departmentContact
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div className="d-print-table-row">
                                            <div class="rightLabel">Email:</div>
                                            <div class="d-print-table-cell">
                                                <span class="normal">
                                                    {
                                                        oneDesignation.departmentContactEmail
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="d-print-table-row">
                                        <div class="rightLabel">
                                            Designation ID:
                                        </div>
                                        <div class="d-print-table-cell">
                                            <span class="normal">
                                                {
                                                    oneDesignation.tedDesignationId
                                                }
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="d-print-table-row">
                                    <div class="rightLabel">
                                        Designation Title:
                                    </div>
                                    <div class="d-print-table-cell">
                                        <span class="normal">
                                            {oneDesignation.tedDesignationTitle}
                                        </span>
                                    </div>
                                </div>

                                <div className="d-print-table-row">
                                    <div class="rightLabel">Gift Amount</div>
                                    <div class="d-print-table-cell">
                                        <span className="normal">
                                            {formatAmount(
                                                oneDesignation.designationGiftAmount
                                            )}
                                        </span>
                                    </div>
                                </div>
                                {oneDesignation.nonGiftPortionChecked ? (
                                    <>
                                        <div className="d-print-table-row">
                                            <div class="rightLabel">
                                                Non-Gift Amount:
                                            </div>
                                            <div class="d-print-table-cell">
                                                <span className="normal">
                                                    {formatAmount(
                                                        oneDesignation.designationNonGiftAmount
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-print-table-row">
                                            <div class="rightLabel">Total:</div>
                                            <div class="d-print-table-cell">
                                                <span className="normal">
                                                    {formatAmount(
                                                        oneDesignation.designationTotalAmount
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    ""
                                )}

                                {oneDesignation.pledgeRevenueId !== "" ? (
                                    <div className="d-print-table-row">
                                        <div class="rightLabel">
                                            Pledge Revenue ID:
                                        </div>
                                        <div class="d-print-table-cell">
                                            <span className="normal">
                                                {oneDesignation.pledgeRevenueId}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}

                                {oneDesignation.designationAdditionalComments !==
                                "" ? (
                                    <div className="d-print-table-row">
                                        <div class="rightLabel">Comments:</div>
                                        <div class="d-print-table-cell">
                                            <div className="wrapCellContent">
                                                <span className="normal longName">
                                                    {
                                                        oneDesignation.designationAdditionalComments
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}

                                {/* <div className="d-print-table-row">
                                    <div class="rightLabel">On the Left</div>
                                    <div class="d-print-table-cell">
                                        <span class="normal"></span>
                                    </div>
                                </div>

                                <div className="d-print-table-row">
                                    <div class="rightLabel">On the Left</div>
                                    <div class="d-print-table-cell">
                                        <span class="normal"></span>
                                    </div>
                                </div>

                                <div className="d-print-table-row">
                                    <div class="rightLabel">On the Left</div>
                                    <div class="d-print-table-cell">
                                        <span class="normal"></span>
                                    </div>
                                </div>

                                <div className="d-print-table-row">
                                    <div class="rightLabel">On the Left</div>
                                    <div class="d-print-table-cell">
                                        <span class="normal"></span>
                                    </div>
                                </div>

                                <div className="d-print-table-row">
                                    <div class="rightLabel">On the Left</div>
                                    <div class="d-print-table-cell">
                                        <span class="normal"></span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col">
                            <div class="d-print-table-cell">
                                {oneDesignation.associatedOpportunityChecked ? (
                                    <PrintOneOpportunity
                                        oneDesignation={oneDesignation}
                                        index={index}
                                    />
                                ) : (
                                    " "
                                )}
                            </div>
                        </div>
                    </div>
                </ListGroupItem>
            </div>
        </div>
    );
};
export default PrintOneDesignation;
