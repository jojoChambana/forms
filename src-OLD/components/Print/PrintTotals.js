import { Row } from "react-bootstrap";

import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formValues }) => {
    function nonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <div className="d-print-table-row">
                        <div className="rightLabel totals">Non-Gift Total:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.nonGiftTotal}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel totals">Overall Total:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.overallTotal}
                            </span>
                        </div>
                    </div>
                </>
            );
        } else return <></>;
    }

    return (
        <>
            <div className="d-print-table-row">
                <div className="rightLabel totals">Gift Total:</div>
                <div className="d-print-table-cell">
                    <span className="normal">{formValues.giftTotal}</span>
                </div>
            </div>
            <Row>
                <div>{nonGiftAmount()}</div>
            </Row>
        </>
    );
};
export default PrintTotals;
