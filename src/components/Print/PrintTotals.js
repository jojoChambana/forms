// import {
//     Container,
//     createTheme,
//     Grid,
//     ThemeProvider,
//     Typography,
// } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
// import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import { useRef } from "react";
// import PrintForeign from "../components/PrintForeign";
// import AddressPrint from "../components/AddressPrint";

import { parseNum } from "../HelperFunctions";

const PrintTotals = ({ formValues }) => {
    function nonGiftAmount() {
        console.log(formValues.nonGiftTotal);
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    {/* <div>Non-Gift Total: {formValues.nonGiftTotal}</div> */}
                    {/* <div>Overall Total: {formValues.overallTotal}</div> */}

                    <Row>
                        <div className="singular-offset">
                            <div className="colOne rightLabel">
                                Non-Gift Total:
                            </div>
                            <div className="colOne">
                                <span className="normal">
                                    {formValues.nonGiftTotal}
                                </span>
                            </div>
                        </div>

                        <div className="singular-offset">
                            <div className="colOne rightLabel">
                                Overall Total:
                            </div>
                            <div className="colOne">
                                <span className="normal">
                                    {formValues.nonGiftTotal}
                                </span>
                            </div>
                        </div>
                    </Row>
                </>
            );
        } else return <></>;
    }

    return (
        <>
            <Row>
                <div className="singular-offset">
                    <div className="colOne rightLabel giftTotal">
                        <span className="giftTotal">Gift Total:</span>
                    </div>
                    <div className="colOne">
                        <span className="normal">{formValues.giftTotal}</span>
                    </div>
                </div>

                <div>{nonGiftAmount()}</div>
            </Row>
        </>
    );
};
export default PrintTotals;
