import { Col, Row } from "react-bootstrap";

import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formValues }) => {
    function nonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <Col>
                        <div className="d-print-table-row">
                            <div className="rightLabel">Non-Gift Total:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.nonGiftTotal}
                                </span>
                            </div>

                            <div className="rightLabel totals">
                                Overall Total:
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
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
            <div className="d-print-table-row">
                <>
                    <div className="rightLabel totals">Gift Total:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">{formValues.giftTotal}</span>
                    </div>
                </>
                <Col>
                    <div>{nonGiftAmount()}</div>
                </Col>
            </div>
        </>
    );
};
export default PrintTotals;
