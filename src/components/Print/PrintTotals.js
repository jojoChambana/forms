import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formType, formValues, showGIKTotal = false }) => {
    return (
        <>
            <div className="totalTable">
                <div className="total">
                    Gift Total:{" "}
                    <span className="normal">{formValues.giftTotal}</span>
                </div>

                {parseNum(formValues.nonGiftTotal) > 0 ? (
                    <>
                        <div className="total">
                            Non-Gift-Total:{" "}
                            <span className="normal">
                                {formValues.nonGiftTotal}
                            </span>
                        </div>
                        <div className="total">
                            Total Amount:{" "}
                            <span className="normal">
                                {formValues.overallTotal}
                            </span>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};
export default PrintTotals;
