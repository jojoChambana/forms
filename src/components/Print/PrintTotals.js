import { Col } from "react-bootstrap";
import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formType, formValues, showGIKTotal = false }) => {
    function NonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <Col className="d-flex justify-content-start">
                        <div
                            className="totals gTlabels vCenter"
                            style={{
                                fontWeight: "bold",
                                margin: "0em 0.5em",
                                width: "auto",
                            }}
                        >
                            Gift Total:
                        </div>
                        <div className="vCenter">
                            <span className="normal" style={{ padding: "0" }}>
                                {formValues.giftTotal}
                            </span>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div
                            className="gTlabels vCenter"
                            style={{
                                fontWeight: "bold",
                                margin: "0em 0.5em",
                                width: "auto",
                            }}
                        >
                            Non-Gift Total:
                        </div>
                        <div className="vCenter" style={{ fontWeight: "bold" }}>
                            <span
                                className="normal"
                                style={{
                                    fontWeight: "bold",
                                    margin: "0em 0.5em",
                                }}
                            >
                                {formValues.nonGiftTotal}
                            </span>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <div
                            className="gTlabels totals vCenter"
                            style={{
                                fontWeight: "bold",
                                margin: "0em 0.5em",
                                width: "max-content",
                            }}
                        >
                            Total Amount:
                        </div>

                        <div className="vCenter">
                            <span
                                className="normal"
                                style={{
                                    fontWeight: "bold",
                                    margin: "0em 0.5em",
                                }}
                            >
                                {formValues.overallTotal}
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
                            className="totals gTlabels vCenter"
                            style={{
                                fontWeight: "bold",
                                margin: "0em 0.5em",
                                width: "auto",
                            }}
                        >
                            Gift Total!:
                        </div>
                        <div className="vCenter">
                            <span className="normal" style={{ padding: "0" }}>
                                {formValues.giftTotal}
                            </span>
                        </div>
                    </Col>
                </>
            );
    }

    return (
        <>
            <div className="row mt-3 border" style={{ padding: "0 1em" }}>
                {/* <Col className="d-flex">
                    <div
                        className="totals gTlabels vCenter"
                        style={{
                            fontWeight: "bold",
                            margin: "0em 0.5em",
                            width: "auto",
                        }}
                    >
                        Gift Total:
                    </div>
                    <div className="vCenter">
                        <span className="normal" style={{ padding: "0" }}>
                            {formValues.giftTotal}
                        </span>
                    </div>
                </Col> */}

                {formType === "Cash" || formType === "Check" ? (
                    <Col className="d-flex">
                        <div
                            className="totals gTlabels vCenter"
                            style={{
                                fontWeight: "bold",
                                margin: "0em 0.5em",
                                width: "auto",
                            }}
                        >
                            Gift Total:
                        </div>
                        <div className="vCenter">
                            <span className="normal" style={{ padding: "0" }}>
                                {formValues.giftTotal}
                            </span>
                        </div>
                    </Col>
                ) : (
                    <></>
                )}

                {NonGiftAmount()}

                <>
                    {showGIKTotal && (
                        <Col>
                            <div className="d-flex">
                                <div
                                    className="gTlabels d-flex vCenter"
                                    style={{
                                        fontWeight: "bold",
                                        width: "max-content",
                                    }}
                                >
                                    Gift in Kind Total:
                                </div>
                                <div className="vCenter">
                                    <span
                                        className="normal gikTotalSpacing"
                                        style={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {formValues.gikTotal}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    )}
                </>
            </div>
        </>
    );
};
export default PrintTotals;
