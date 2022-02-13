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
        <ListGroupItem className="aDesignation row" key={"designation" + index}>
            <Col>
                <Row style={rowStyle} className="resultItems">
                    <Col
                        sm={2}
                        md={2}
                        className="designationNumber rightLabel desigColTitle"
                    >
                        Designation#:
                    </Col>
                    <Col sm={2} md={2}>
                        <span className="normal">{index + 1} </span>
                    </Col>
                </Row>

                <Row style={rowStyle} className="resultItems">
                    {oneDesignation.newDesignationRequestedChecked ? (
                        <>
                            <Col
                                sm={12}
                                md={2}
                                className="designationNumber rightLabel desigColTitle"
                            >
                                {"New Designation Requested. Contact: "}
                            </Col>
                            <Col>
                                <span className="normal">
                                    {oneDesignation.departmentContact +
                                        " " +
                                        oneDesignation.departmentContactEmail}
                                </span>
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col
                                sm={12}
                                md={2}
                                className="designationNumber rightLabel desigColTitle"
                            >
                                {"Designation ID: "}
                            </Col>
                            <Col>
                                <span className="normal">
                                    {oneDesignation.tedDesignationId}
                                </span>
                            </Col>
                        </>
                    )}
                </Row>

                {/* <div className="designationId col">
                <span className="normal">
                    {oneDesignation.newDesignationRequestedChecked
                        ? "New Designation Requested.  Contact: " +
                          oneDesignation.departmentContact +
                          "   " +
                          oneDesignation.departmentContactEmail
                        : "Designation ID: " + oneDesignation.tedDesignationId}
                </span>
            </div> */}
                <Row style={rowStyle}>
                    <Col
                        sm={12}
                        md={2}
                        className="designationTitle rightLabel desigColTitle"
                    >
                        Designation Title:
                    </Col>
                    <Col>
                        <span className="normal">
                            {oneDesignation.tedDesignationTitle}
                        </span>
                    </Col>
                </Row>
                <Row style={rowStyle}>
                    <Col
                        sm={12}
                        md={2}
                        className="designationGiftAmount rightLabel desigColTitle"
                    >
                        Gift Amount:{" "}
                    </Col>
                    <Col>
                        <span className="normal">
                            {formatAmount(oneDesignation.designationGiftAmount)}
                        </span>
                    </Col>
                </Row>

                {oneDesignation.nonGiftPortionChecked ? (
                    <>
                        <Row style={rowStyle}>
                            <Col
                                sm={12}
                                md={2}
                                className="designationNonGiftAmount rightLabel desigColTitle"
                            >
                                Non-Gift Amount:{" "}
                            </Col>
                            <Col>
                                <span className="normal">
                                    {formatAmount(
                                        oneDesignation.designationNonGiftAmount
                                    )}
                                </span>
                            </Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col className="designationNonGiftAmount rightLabel desigColTitle">
                                Total:{" "}
                            </Col>
                            <Col>
                                <span className="normal">
                                    {formatAmount(
                                        oneDesignation.designationTotalAmount
                                    )}
                                </span>
                            </Col>
                        </Row>
                    </>
                ) : (
                    " "
                )}
                {/* <Col className="designationNonGiftAmount">
                {oneDesignation.nonGiftPortionChecked
                    ? "Non-Gift Amount: " +
                      formatAmount(oneDesignation.designationNonGiftAmount) +
                      "   Total: " +
                      formatAmount(oneDesignation.designationTotalAmount)
                    : " "}
            </Col> */}
                {oneDesignation.pledgeRevenueId !== "" ? (
                    <>
                        <Row style={rowStyle}>
                            <Col
                                sm={12}
                                md={2}
                                className="designationPledgeId rightLabel desigColTitle"
                            >
                                Pledge Revenue ID:
                            </Col>
                            <Col>
                                <span className="normal">
                                    {oneDesignation.pledgeRevenueId}
                                </span>
                            </Col>
                        </Row>
                    </>
                ) : (
                    " "
                )}

                <>
                    {oneDesignation.associatedOpportunityChecked ? (
                        <Row style={rowStyle}>
                            <Col
                                sm={12}
                                md={2}
                                className="designationOpportunity rightLabel desigColTitle"
                            >
                                <PrintOneOpportunity
                                    oneDesignation={oneDesignation}
                                    index={index}
                                />
                            </Col>
                            <Col>
                                <span className="normal"></span>
                            </Col>
                        </Row>
                    ) : (
                        " "
                    )}
                </>

                {oneDesignation.designationAdditionalComments !== "" ? (
                    <>
                        <Row style={rowStyle}>
                            <Col
                                sm={12}
                                md={2}
                                className="designationComments rightLabel desigColTitle"
                            >
                                Comments:
                            </Col>
                            <Col>
                                <span className="normal">
                                    {
                                        oneDesignation.designationAdditionalComments
                                    }
                                </span>
                            </Col>
                        </Row>
                    </>
                ) : (
                    " "
                )}
            </Col>
            <Col className="hideForscreen">&nbsp;</Col>
        </ListGroupItem>
    );
};
export default PrintOneDesignation;
