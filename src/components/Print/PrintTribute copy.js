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

import { Typography } from "@mui/material";

const PrintTribute = ({ formValues }) => {
    function IsTributeNewAddressChecked(props) {
        if (formValues.inMemoryNewAddress === true) {
            return (
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>
                        <Typography>
                            <span className="normal">
                                This is a new tribute address
                            </span>
                        </Typography>
                    </Col>
                </Row>
            );
        } else {
            return null;
        }
    }
    const Domestic = () => {
        return (
            <>
                <Row>
                    <Col className="rightLabel">Address:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeDomesticAddress}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">City:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeDomesticAddressCity}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">State:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeDomesticAddressState}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Zip:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeDomesticAddressZipCode}
                        </span>
                    </Col>
                </Row>
            </>
        );
    };

    const Foreign = () => {
        return (
            <>
                <Row>
                    <Col className="rightLabel">Address:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeForeignAddress}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">City:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeForeignAddressCity}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Province/Region:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeForeignAddressProvinceRegion}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Country:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeForeignAddressCountry}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Postal Code:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.tributeDomesticAddressZipCode}
                        </span>
                    </Col>
                </Row>
            </>
        );
    };
    function AddressType(foreignAddress) {
        const isForeign = formValues.tributeForeignAddressCheckbox;
        if (!isForeign) return <Domestic />;
        else return <Foreign />;
    }

    if (formValues.tributeChecked) {
        return (
            <>
                <div className="resultItems">
                    <div className="resultItems d-print-table-row">
                        <div className="resultItems d-print-table-row">
                            <div className="d-print-table-cell">
                                <div className="rightLabel col">
                                    Tribute {formValues.giftTribute}:{" "}
                                    {/* inserts the phrases "In memory of" or "In tribute of" */}
                                </div>
                                <div className="col">
                                    <span className="normal">
                                        {/* if the value is "In memory of", then show the deceasedFullName, otherwise show the honoreeFullName */}
                                        {formValues.giftTribute ===
                                        "In memory of"
                                            ? formValues.deceasedFullName
                                            : formValues.honoreeFullName}
                                    </span>
                                </div>

                                <IsTributeNewAddressChecked />
                                <AddressType />
                            </div>
                            <div className="d-print-table-cell">
                                <div className="rightLabel col"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <Row className="resultItems">
                    <Col>
                        <IsTributeNewAddressChecked />
                        <AddressType />
                    </Col>
                </Row>
            </>
        );
    } else {
        return <></>;
    }
};

export default PrintTribute;
