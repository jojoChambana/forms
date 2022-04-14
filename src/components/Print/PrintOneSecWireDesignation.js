import { ListGroupItem } from "react-bootstrap";
import { formatAmount } from "../HelperFunctions";

const PrintOneSecWireDesignation = ({ oneDesignation, index }) => {
    function NonGift() {
        if (oneDesignation.designationNonGiftAmount)
            return (
                <div key={"designation" + index}>
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
                </div>
            );
        else return null;
    }
    return (
        <>
            <div className="resultItems">
                <ListGroupItem
                    className="aDesignation mb-2"
                    key={"designation" + index}
                    style={{
                        borderRadius: "4px",
                    }}
                >
                    <div className="resultItems row">
                        <div className="col">
                            <div className="d-print-table-cell">
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
                                        Designation Comments:
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {
                                                oneDesignation.designationAdditionalComments
                                            }
                                        </span>
                                    </div>
                                </div>
                                <NonGift />
                            </div>
                        </div>
                    </div>
                </ListGroupItem>
            </div>
        </>
    );
};
export default PrintOneSecWireDesignation;
