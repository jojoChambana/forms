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
        <>
            <div className="resultItems">
                <ListGroupItem
                    className="aDesignation"
                    key={"designation" + index}
                >
                    <Row>
                        <Col>
                            <div className="singular-offset">
                                <div className="colOne rightLabel">
                                    <span>Designation#:</span>
                                </div>
                                <div className="colOne">
                                    <span className="normal">{index + 1} </span>
                                </div>
                            </div>
                            <Row style={rowStyle} className="resultItems">
                                {oneDesignation.newDesignationRequestedChecked ? (
                                    <div className="singular-offset">
                                        <div className="colOne rightLabel">
                                            {
                                                "New Designation Requested. Contact: "
                                            }
                                        </div>
                                        <div className="colOne">
                                            <span className="normal">
                                                {oneDesignation.departmentContact +
                                                    " " +
                                                    oneDesignation.departmentContactEmail}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="singular-offset">
                                        <div className="colOne rightLabel">
                                            {"Designation ID: "}
                                        </div>
                                        <div className="colOne">
                                            <span className="normal">
                                                {
                                                    oneDesignation.tedDesignationId
                                                }
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="singular-offset">
                            <div className="colOne rightLabel">
                                Designation Title:
                            </div>
                            <div className="colOne ">
                                <span className="normal">
                                    {oneDesignation.tedDesignationTitle}
                                </span>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="singular-offset">
                            <div className="colOne rightLabel">
                                Gift Amount:
                            </div>
                            <div className="colOne ">
                                <span className="normal">
                                    {formatAmount(
                                        oneDesignation.designationGiftAmount
                                    )}
                                </span>
                            </div>
                        </div>
                    </Row>

                    {oneDesignation.nonGiftPortionChecked ? (
                        <>
                            <Row>
                                <div className="singular-offset">
                                    <div className="colOne rightLabel">
                                        Non-Gift Amount:{" "}
                                    </div>
                                    <div className="colOne ">
                                        <span className="normal">
                                            {formatAmount(
                                                oneDesignation.designationNonGiftAmount
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className="singular-offset">
                                    <div className="colOne rightLabel">
                                        Total:{" "}
                                    </div>
                                    <div className="colOne ">
                                        <span className="normal">
                                            {formatAmount(
                                                oneDesignation.designationTotalAmount
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </Row>
                        </>
                    ) : (
                        " "
                    )}

                    {oneDesignation.pledgeRevenueId !== "" ? (
                        <>
                            <Row>
                                <div className="singular-offset">
                                    <div className="colOne rightLabel">
                                        Pledge Revenue ID:
                                    </div>
                                    <div className="colOne ">
                                        <span className="normal">
                                            {oneDesignation.pledgeRevenueId}
                                        </span>
                                    </div>
                                </div>
                            </Row>
                        </>
                    ) : (
                        " "
                    )}

                    <>
                        {oneDesignation.associatedOpportunityChecked ? (
                            <PrintOneOpportunity
                                oneDesignation={oneDesignation}
                                index={index}
                            />
                        ) : (
                            " "
                        )}
                    </>
                    <>
                        {oneDesignation.designationAdditionalComments !== "" ? (
                            <Row>
                                <div className="singular-offset">
                                    <div className="colOne rightLabel">
                                        Comments:
                                    </div>
                                    <div className="colOne ">
                                        <span className="normal">
                                            <span className="normal">
                                                {
                                                    oneDesignation.designationAdditionalComments
                                                }
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Row>
                        ) : (
                            " "
                        )}
                    </>
                </ListGroupItem>
            </div>
        </>
    );
};
export default PrintOneDesignation;
