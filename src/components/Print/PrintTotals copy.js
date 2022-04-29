import { parseNum } from "../HelperFunctions";
const PrintTotals = ({ formType, formValues, showGIKTotal = false }) => {
    function NonGiftAmount() {
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <div className="totals">
                        Gift Total:
                        <span className="normal">{formValues.giftTotal}</span>
                    </div>
                    <div className="totals">
                        Non-Gift Total:
                        <span className="normal">
                            {formValues.nonGiftTotal}
                        </span>
                    </div>
                    <div className="totals">
                        Total Amount:
                        <span className="normal">
                            {formValues.overallTotal}
                        </span>
                    </div>
                </>
            );
        } else <></>;
    }

    return (
        <>
            {!showGIKTotal ? (
                <div className="totalTable border mt-3">
                    {NonGiftAmount()}
                    {/* <div className="totals">
                        Gift Total:
                        <span className="normal">{formValues.giftTotal}</span>
                    </div> */}
                </div>
            ) : (
                <div className="totalTable border mt-3 justify-content-end">
                    {NonGiftAmount()}
                    <div className="totals ">
                        Gift In Kind:
                        <span className="normal">{formValues.gikTotal}</span>
                    </div>
                </div>
            )}
            <>
                {formType !== "Gift in Kind" && (
                    <div className="totalTable border mt-3 justify-content-end">
                        <div className="totals">
                            Gift Total:
                            <span className="normal">
                                {formValues.giftTotal}
                            </span>
                        </div>
                    </div>
                )}
            </>
        </>
    );
};
export default PrintTotals;
