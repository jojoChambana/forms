import PrintOneOpportunity from "./PrintOneOpportunity";
import { formatAmount } from "../HelperFunctions";
import { Row, Col, ListGroupItem } from "react-bootstrap";

const PrintOneDesignation = ({ oneDesignation, index }) => {
    function NonGift() {
        if (oneDesignation.designationNonGiftAmount)
            return (
                <div className="d-print-table-row">
                    <div className="rightLabel">Non-Gift Amount:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formatAmount(
                                oneDesignation.designationNonGiftAmount
                            )}
                        </span>
                    </div>
                </div>
            );
        else return null;
    }
    return (
        <div className="resultItems" key={"designation" + index}>
            <ListGroupItem
                className="aDesignation mb-2"
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "4px",
                }}
            >
                <div style={{ paddingLeft: "0em" }}>
                    <Row>
                        <div className="col">
                            <div className="d-print-table-row">
                                <div className="rightLabel">Gift Amount: </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formatAmount(
                                            oneDesignation.designationGiftAmount
                                        )}
                                    </span>
                                </div>
                            </div>
                            {oneDesignation.newDesignationRequestedChecked ? (
                                <>
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Contact Requested:
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {
                                                    oneDesignation.departmentContact
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-print-table-row">
                                        <div className="rightLabel">Email:</div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {
                                                    oneDesignation.departmentContactEmail
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        Designation ID:
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {oneDesignation.tedDesignationId}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    Designation Title:
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {oneDesignation.tedDesignationTitle}
                                    </span>
                                </div>
                            </div>

                            {oneDesignation.nonGiftPortionChecked ? (
                                <>
                                    <NonGift />

                                    <div className="d-print-table-row">
                                        <div className="rightLabel">Total:</div>
                                        <div className="d-print-table-cell">
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
                                    <div className="rightLabel">
                                        Pledge Revenue ID:
                                    </div>
                                    <div className="d-print-table-cell">
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
                                    <div className="rightLabel">Comments:</div>
                                    <div className="d-print-table-cell">
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
                        </div>

                        <Col>
                            {oneDesignation.associatedOpportunityChecked ? (
                                <PrintOneOpportunity
                                    oneDesignation={oneDesignation}
                                    index={index}
                                />
                            ) : (
                                " "
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {oneDesignation.designationAdditionalComments}
                        </Col>
                    </Row>
                </div>
            </ListGroupItem>
        </div>
    );
};
export default PrintOneDesignation;
