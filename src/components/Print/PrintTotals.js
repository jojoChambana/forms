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

import {    Typography} from "@mui/material";
import { formatAmount} from '../HelperFunctions'


const PrintTotals = ({formValues}) => {
    function nonGiftAmount() {
        if (formValues.nonGiftTotal > 0) { 
            return <><div>Non-Gift Total: {formatAmount(formValues.nonGiftTotal)}</div><div>Overall Total: {formatAmount(formValues.overallTotal)}</div></>
        }
        else
            return <></>
    }

    return (
        <>
        <div>Gift Total: {formatAmount(formValues.giftTotal)}</div>
        {nonGiftAmount()}
        </>
    );            
}
export default PrintTotals;