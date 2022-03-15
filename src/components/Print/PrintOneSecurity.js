import { ListGroupItem } from "react-bootstrap";
import { formatAmount3 } from "../HelperFunctions";
const PrintOneSecWireSecurity = ({ oneSecurity, index }) => {
    return (
        <>
            <ListGroupItem
                className="aDesignation mb-2"
                key={"security" + index}
            >
                <div className="resultItems row">
                    <div className="col">
                        <div className="d-print-table-cell">
                            <div className="d-print-table-row">
                                <div className="rightLabel">Security#: </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">{index + 1} </span>
                                </div>
                            </div>
                            <br />

                            <div className="d-print-table-row">
                                <div className="rightLabel">Shares:</div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formatAmount3(oneSecurity.shares)}

                                        {/* {oneSecurity.shares} */}
                                    </span>
                                </div>
                            </div>
                            <div className="d-print-table-row">
                                <div className="rightLabel">Name:</div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {oneSecurity.name}
                                    </span>
                                </div>
                            </div>

                            <div className="d-print-table-row">
                                <div className="rightLabel">Symbol</div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {oneSecurity.symbol}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ListGroupItem>
        </>
    );
};
export default PrintOneSecWireSecurity;
