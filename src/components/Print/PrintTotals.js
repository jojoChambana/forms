import { Col, Row } from "react-bootstrap";

import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formValues, showGIKTotal = false }) => {
    function nonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <Col>
                        <div
                            className="d-print-table-row"
                            style={{ fontWeight: "bold" }}
                        >
                            <div className="rightLabel">Non-Gift Total:</div>
                            <div
                                className="d-print-table-cell"
                                style={{ fontWeight: "bold" }}
                            >
                                <span
                                    className="normal"
                                    style={{ fontWeight: "bold" }}
                                >
                                    {formValues.nonGiftTotal}
                                </span>
                            </div>

                            <div
                                className="rightLabel totals"
                                style={{ fontWeight: "bold" }}
                            >
                                Overall Total:
                            </div>
                            <div className="d-print-table-cell">
                                <span
                                    className="normal"
                                    style={{ fontWeight: "bold" }}
                                >
                                    {formValues.overallTotal}
                                </span>
                            </div>
                        </div>
                    </Col>
                </>
            );
        } else return <></>;
    }

    return (
        <>
            <div className="d-print-table-row mt-3">
                <>
                    <div
                        className="rightLabel totals"
                        style={{ fontWeight: "bold" }}
                    >
                        Gift Total:
                    </div>
                    <div className="d-print-table-cell">
                        <span className="normal">{formValues.giftTotal}</span>
                    </div>
                </>
                <Col>
                    <div>{nonGiftAmount()}</div>
                </Col>
                {showGIKTotal && (
                    <>
                        <div
                            className="rightLabel totals"
                            style={{ fontWeight: "bold" }}
                        >
                            Gift in Kind Total:
                        </div>
                        <div className="d-print-table-cell">
                            <span
                                className="normal"
                                style={{ fontWeight: "bold" }}
                            >
                                {formValues.gikTotal}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default PrintTotals;
