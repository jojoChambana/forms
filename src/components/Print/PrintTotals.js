import { Col, Row } from "react-bootstrap";
import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formValues, showGIKTotal = false }) => {
    function NonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
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

                    <Col className="d-flex justify-content-end">
                        <div
                            className="gTlabels totals"
                            style={{ fontWeight: "bold" }}
                        >
                            Overall Total:
                        </div>
                        <div>
                            <span
                                className="normal"
                                style={{ fontWeight: "bold" }}
                            >
                                {formValues.overallTotal}
                            </span>
                        </div>
                    </Col>
                </>
            );
        } else return <></>;
    }

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

    return (
        <>
            <div className="d-print-table-row mt-3 justify-content-end">
                {/* {showGIKTotal && (
                    <>
                        <div
                            className="totals gTlabels"
                            style={{ fontWeight: "bold" }}
                        >
                            Gift in Kind Total!:
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
                )} */}

                {NonGiftAmount()}

                <Col className="d-flex justify-content-end">
                    <div
                        className="totals gTlabels"
                        style={{ fontWeight: "bold" }}
                    >
                        Gift Total:
                    </div>
                    <div>
                        <span className="normal">{formValues.giftTotal}</span>
                    </div>
                </Col>
            </div>
        </>
    );
};
export default PrintTotals;
