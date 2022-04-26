import { Col, Row } from "react-bootstrap";
import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formValues, showGIKTotal = false }) => {
    function GiftOverallTotal() {
        if (parseNum(formValues.nonGiftTotal) === 0) {
            return (
                <>
                    <Col className="d-flex justify-content-start">
                        <div
                            className="totals gTlabels"
                            style={{ fontWeight: "bold" }}
                        >
                            Gift Total:
                        </div>
                        <div>
                            <span className="normal">
                                {formValues.giftTotal}
                            </span>
                        </div>
                    </Col>
                </>
            );
        } else
            return (
                <>
                    <Col className="d-flex justify-content-end">
                        <div
                            className="totals gTlabels"
                            style={{ fontWeight: "bold" }}
                        >
                            Gift Total:
                        </div>
                        <div>
                            <span className="normal">
                                {formValues.giftTotal}
                            </span>
                        </div>
                    </Col>

                    {NonGiftAmount()}
                </>
            );
    }

    function NonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <Col className="d-flex justify-content-end">
                        <div
                            className="totals gTlabels"
                            style={{ fontWeight: "bold" }}
                        >
                            Gift Total:
                        </div>
                        <div>
                            <span className="normal">
                                {formValues.giftTotal}
                            </span>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div
                            className="gTlabels totals"
                            style={{ fontWeight: "bold" }}
                        >
                            Non-Gift Total:
                        </div>
                        <div style={{ fontWeight: "bold" }}>
                            <span
                                className="normal"
                                style={{ fontWeight: "bold" }}
                            >
                                {formValues.nonGiftTotal}
                            </span>
                        </div>
                    </Col>
                </>
            );
        } else return <></>;
    }

    return (
        <>
            <div className="d-print-table-row mt-3">
                {showGIKTotal && (
                    <>
                        <div
                            className="totals gTlabels"
                            style={{ fontWeight: "bold", width: "auto" }}
                        >
                            Gift in Kind Total: &nbsp;
                        </div>
                        <div>
                            <span
                                className="normal"
                                style={{ fontWeight: "bold" }}
                            >
                                {formValues.gikTotal}
                            </span>
                        </div>
                    </>
                )}

                {NonGiftAmount()}
                <Col className="d-flex justify-content-end">
                    <div className="d-flex" style={{ border: "solid 2px" }}>
                        <div
                            className="gTlabels totals"
                            style={{ fontWeight: "bold" }}
                        >
                            Overall Total: &nbsp;
                        </div>
                        <div>
                            <span
                                className="normal"
                                style={{ fontWeight: "bold" }}
                            >
                                {formValues.overallTotal}
                            </span>
                        </div>
                    </div>
                </Col>
            </div>
        </>
    );
};
export default PrintTotals;
