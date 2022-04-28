import { Col, Row } from "react-bootstrap";
import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formType, formValues, showGIKTotal = false }) => {
    function GiftOverallTotal() {
        if (formType === "Gift in Kind") {
            console.log("GIK");
            return (
                <>
                    {/* <Col className="d-flex justify-content-start">
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
                    </Col> */}
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
                    <Col className="d-flex">
                        <div
                            className="gTlabels totals vCenter"
                            style={{ fontWeight: "bold" }}
                        >
                            Non-Gift Total:
                        </div>
                        <div className="vCenter" style={{ fontWeight: "bold" }}>
                            <span
                                className="normal"
                                style={{
                                    fontWeight: "bold",
                                    padding: "0em 0.5em",
                                }}
                            >
                                {formValues.nonGiftTotal}
                            </span>
                        </div>
                    </Col>
                    <Col className="d-flex">
                        <div
                            className="gTlabels totals vCenter"
                            style={{ fontWeight: "bold" }}
                        >
                            Total Amount: &nbsp;
                        </div>

                        <div className="vCenter">
                            <span
                                className="normal"
                                style={{
                                    fontWeight: "bold",
                                    padding: "0em 0.5em",
                                }}
                            >
                                {formValues.overallTotal}
                            </span>
                        </div>
                    </Col>
                </>
            );
        } else return <></>;
    }

    return (
        <>
            <div className=" row mt-3 border">
                <Col className="d-flex">
                    <div
                        className="totals gTlabels vCenter"
                        style={{ fontWeight: "bold" }}
                    >
                        Gift Total:
                    </div>
                    <div className="vCenter">
                        <span className="normal">{formValues.giftTotal}</span>
                    </div>
                </Col>
                {NonGiftAmount()}

                <>
                    {showGIKTotal && (
                        <Col>
                            <div className="d-flex">
                                <div
                                    className="gTlabels d-flex vCenter"
                                    style={{
                                        fontWeight: "bold",
                                        width: "auto",
                                    }}
                                >
                                    Gift in Kind Total: &nbsp;
                                </div>
                                <div className="vCenter">
                                    <span
                                        className="normal"
                                        style={{
                                            fontWeight: "bold",
                                            padding: "0em 0.5em",
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
