import { ListGroupItem } from "react-bootstrap";
import { formatAmount } from "../HelperFunctions";

const PrintOneSecWireSecurity = ({ oneSecurity, index }) => {
    return (
        <div>
            <div className="resultItems">
                <ListGroupItem
                    className="aDesignation mb-2"
                    key={"security" + index}
                >
                    <div className="resultItems row">
                        <div className="col">
                            <div className="d-print-table-cell">
                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        Security#:{" "}
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
                                            Shares:
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {
                                                    oneSecurity.shares
                                                }
                                            </span>
                                        </div>
                                    </div>
                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                       Name:
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {oneSecurity.name}
                                        </span>
                                    </div>
                                </div>

                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        Symbol
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formatAmount(
                                                oneSecurity.symbol
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </ListGroupItem>
            </div>
        </div>
    );
};
export default PrintOneSecWireSecurity;