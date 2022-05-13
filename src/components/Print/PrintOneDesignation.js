import PrintOneOpportunity from "./PrintOneOpportunity";
import { formatAmount } from "../HelperFunctions";
import { Row, Col, ListGroupItem } from "react-bootstrap";

const PrintOneDesignation = ({
    formValues,
    oneDesignation,
    index,
    trustMode,
}) => {
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
    const pledgeRevLabel =
        trustMode === true
            ? "Planned Gift" || "Pledge Revenue ID:"
            : "Pledge Revenue ID:";
    return (
        <div className="resultItems" key={"designation" + index}>
            <ListGroupItem className="aDesignation mb-2 border">
                <div>
                    <Row>
                        <Col xs={6}>
                            {oneDesignation.newDesignationRequestedChecked ? (
                                <>
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Department Contact:
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
                                <>
                                    {/* <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Trust Type:
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {formValues.trustType}
                                            </span>
                                        </div>
                                    </div> */}
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Designation ID:
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {
                                                    oneDesignation.tedDesignationId
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </>
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
                                        {pledgeRevLabel}
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
                        </Col>
                        <Col xs={6}>
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
                </div>
            </ListGroupItem>
        </div>
    );
};
export default PrintOneDesignation;
