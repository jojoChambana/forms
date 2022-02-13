// import {
//     Container,
//     createTheme,
//     Grid,
//     ThemeProvider,
//     Typography,
// } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
// import { useNavigate } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
// import { useRef } from "react";
// import PrintForeign from "../components/PrintForeign";
// import AddressPrint from "../components/AddressPrint";

import { Typography } from "@mui/material";
import PrintOneDesignation from "./PrintOneDesignation";

const PrintDesignations = ({ formValues }) => {
    return (
        <>
            <ListGroup>
                {formValues.designation.map((item, index) => {
                    return (
                        <>
                            <PrintOneDesignation
                                oneDesignation={item}
                                index={index}
                                key={"oneDesig" + index}
                            />
                        </>
                    );
                })}
            </ListGroup>
        </>
    );
};
export default PrintDesignations;
