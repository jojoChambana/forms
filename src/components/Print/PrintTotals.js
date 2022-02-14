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
        if (parseNum(formValues.nonGiftTotal) > 0) {
            return (
                <>
                    <div className="d-print-table-row">
                        <div class="rightLabel totals">Non-Gift Total:</div>
                        <div class="d-print-table-cell">
                            <span class="normal">
                                {formValues.nonGiftTotal}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div class="rightLabel totals">Overall Total:</div>
                        <div class="d-print-table-cell">
                            <span class="normal">
                                {formValues.overallGiftTotal}
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
                <div class="rightLabel totals">Gift Total:</div>
                <div class="d-print-table-cell">
                    <span class="normal">{formValues.giftTotal}</span>
                </div>
            </div>
            <Row>
                <div>{nonGiftAmount()}</div>
            </Row>
        </>
    );
};
export default PrintTotals;
