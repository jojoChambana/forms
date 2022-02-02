import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

export default function AddressPrint({ props, prefix, formValues }) {
    return (
        <>
            <Row>
                {(() => {
                    // if (formValues.formAddress) {
                    if (eval(`formValues.${prefix}ForeignAddressCheckbox`)) {
                        console.log("ForeignAddress");
                        console.log(eval(`formValues.${prefix}ForeignAddress`));
                        return (
                            <>
                                <Row className="addressSpace">
                                    <Col>
                                        <Typography
                                            variant="formCat"
                                            className="lineUp"
                                        >
                                            Address:
                                        </Typography>
                                    </Col>
                                    <Col className="results">
                                        <span className="normal">
                                            {eval(
                                                `formValues.${prefix}ForeignAddress`
                                            )}
                                        </span>
                                        <br />
                                        <span className="normal">
                                            {eval(
                                                `formValues.${prefix}ForeignAddressCity`
                                            )}
                                            ,{" "}
                                            {eval(
                                                `formValues.${prefix}ForeignAddressProvinceRegion`
                                            )}
                                            <br />
                                            {eval(
                                                `formValues.${prefix}ForeignAddressCountry`
                                            )}
                                        </span>
                                    </Col>
                                </Row>
                            </>
                        );
                    } else {
                        return (
                            <>
                                <Row className="addressSpace">
                                    <Col>
                                        <Typography
                                            variant="formCat"
                                            className="lineUp"
                                        >
                                            Address:
                                        </Typography>
                                    </Col>
                                    <Col className="results">
                                        <span className="normal">
                                            {eval(
                                                `formValues.${prefix}DomesticAddress`
                                            )}
                                        </span>
                                        <br />
                                        <span className="normal">
                                            {eval(
                                                `formValues.${prefix}DomesticAddressCity`
                                            )}
                                            ,{" "}
                                            {eval(
                                                `formValues.${prefix}DomesticAddressState`
                                            )}
                                            <br />
                                            {eval(
                                                `formValues.${prefix}DomesticAddressZipCode`
                                            )}
                                        </span>
                                    </Col>
                                </Row>
                            </>
                        );
                    }
                })()}
            </Row>

            <Row xs={12} className="resultItems">
                {(() => {
                    if (formValues.domesticCity) {
                        return (
                            <>
                                <Col>
                                    <Typography
                                        variant="formCat"
                                        className="lineUp"
                                    >
                                        Domestic city:
                                    </Typography>
                                </Col>
                                <Col className="results">
                                    <span className="normal">
                                        {formValues.domesticCity}
                                    </span>
                                </Col>
                            </>
                        );
                    }
                })()}
            </Row>

            <Row xs={12} className="resultItems">
                {(() => {
                    if (formValues.domesticState) {
                        return (
                            <>
                                <Col>
                                    <Typography
                                        variant="formCat"
                                        className="lineUp"
                                    >
                                        Domestic state:
                                    </Typography>
                                </Col>
                                <Col className="results">
                                    <span className="normal">
                                        {formValues.domesticState}
                                    </span>
                                </Col>
                            </>
                        );
                    }
                })()}
            </Row>

            <Row xs={12} className="resultItems">
                {(() => {
                    if (formValues.zipCode) {
                        return (
                            <>
                                <Col>
                                    <Typography
                                        variant="formCat"
                                        className="lineUp"
                                    >
                                        Zip:
                                    </Typography>
                                </Col>
                                <Col className="results">
                                    <span className="normal">
                                        {formValues.zipCode}
                                    </span>
                                </Col>
                            </>
                        );
                    }
                })()}
            </Row>
        </>
    );
}
