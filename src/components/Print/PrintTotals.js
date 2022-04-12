import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formValues, showGIKTotal = false }) => {
    function NonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <div className="gTlabels totals">Non-Gift Total:</div>
                    <div style={{ fontWeight: "bold" }}>
                        <span className="normal" style={{ fontWeight: "bold" }}>
                            {formValues.nonGiftTotal}
                        </span>
                    </div>

                    <div
                        className="gTlabels totals"
                        style={{ fontWeight: "bold" }}
                    >
                        Overall Total:
                    </div>
                    <div>
                        <span className="normal" style={{ fontWeight: "bold" }}>
                            {formValues.overallTotal}
                        </span>
                    </div>
                </>
            );
        } else return <></>;
    }

    return (
        <>
            <div className="d-print-table-row mt-3">
                <>
                    <div
                        className="totals gTlabels"
                        style={{ fontWeight: "bold" }}
                    >
                        Gift Total:
                    </div>
                    <div>
                        <span className="normal">{formValues.giftTotal}</span>
                    </div>
                </>

                {NonGiftAmount()}

                {showGIKTotal && (
                    <>
                        <div
                            className="totals gTlabels"
                            style={{ fontWeight: "bold" }}
                        >
                            Gift in Kind Total:
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
            </div>
        </>
    );
};
export default PrintTotals;
