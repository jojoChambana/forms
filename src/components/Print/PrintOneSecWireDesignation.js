import { ListGroupItem } from "react-bootstrap";
import { formatAmount } from "../HelperFunctions";

const PrintOneSecWireDesignation = ({ oneDesignation, index }) => {
    return (
        <>
            <div className="resultItems">
                <ListGroupItem
                    className="aDesignation mb-2"
                    key={"designation" + index}
                >
                    <div className="resultItems row">
                        <div className="col">
                            <div className="d-print-table-cell">
                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        Designation#:{" "}
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {index + 1}{" "}
                                        </span>
                                    </div>
                                </div>
                                <br />

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
                                    <div className="rightLabel">
                                        Gift Amount
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formatAmount(
                                                oneDesignation.designationGiftAmount
                                            )}
                                        </span>
                                    </div>
                                </div>

                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        Non-Gift Amount:
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formatAmount(
                                                oneDesignation.designationNonGiftAmount
                                            )}
                                        </span>
                                    </div>
                                </div>
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
                                {oneDesignation.designationAdditionalComments !==
                                "" ? (
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Comments:
                                        </div>
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
                        </div>
                    </div>
                </ListGroupItem>
            </div>
        </>
    );
};
export default PrintOneSecWireDesignation;
