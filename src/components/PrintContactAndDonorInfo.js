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

const PrintContactAndDonorInfo = ({ formValues }) => {
    const Domestic = () => {
        return (
            <>
                <Row>
                    <Col className="rightLabel">Address:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorDomesticAddress}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">City:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorDomesticAddressCity}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">State:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorDomesticAddressState}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Zip:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorDomesticAddressZipCode}
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
                            {formValues.donorForeignAddress}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">City:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorForeignAddressCity}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Province/Region:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorForeignAddressProvinceRegion}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Country:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorForeignAddressCountry}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Postal Code:</Col>
                    <Col>
                        <span className="normal">
                            {formValues.donorDomesticAddressZipCode}
                        </span>
                    </Col>
                </Row>
            </>
        );
    };
    function AddressType(foreignAddress) {
        const isForeign = formValues.donorForeignAddressCheckbox;
        if (!isForeign) return <Domestic />;
        else return <Foreign />;
    }
    //   ReactDOM.render(
    //     <AddressType isLoggedIn={false} />,
    //     document.getElementById('root')
    //   );

    console.log("before return");
    console.log(formValues);
    console.log(formValues.campusLocation);
    return (
        <>
            <Row className="resultItems">
                <Col>
                    <Row>
                        <Col className="rightLabel">Campus: </Col>
                        <Col>
                            <span className="normal">
                                {formValues.campusLocation}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="rightLabel">Contact full name:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.contactFullName}
                            </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="rightLabel">Phone:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.contactPhone}
                            </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="rightLabel">Contact email:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.contactEmail}
                            </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="rightLabel">College name:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.collegeName}
                            </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="rightLabel">
                            Contact department name:
                        </Col>
                        <Col>
                            <span className="normal">
                                {formValues.departmentName}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="rightLabel">Donation date:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.donationDate}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="rightLabel">Prepared by:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.preparedBy}
                            </span>
                        </Col>
                    </Row>

                    {formValues.unitReferenceNumber ? (
                        <Row>
                            <Col className="rightLabel">
                                Unit reference number:
                            </Col>
                            <Col>
                                <span className="normal">
                                    {formValues.unitReferenceNumber}
                                </span>
                            </Col>
                        </Row>
                    ) : null}
                </Col>
                <Col>
                    <Row>
                        <Col className="rightLabel">TED constituent ID:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.tedConstituentId}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="rightLabel">
                            Organization/Donor name:
                        </Col>
                        <Col>
                            <span className="normal">
                                {formValues.organizationDonorName}
                            </span>
                        </Col>
                    </Row>
                    <AddressType />
                </Col>
            </Row>
        </>
    );
};

export default PrintContactAndDonorInfo;
