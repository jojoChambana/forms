import { Typography } from "@mui/material";
import { Row, Col } from "react-bootstrap";

const PrintContactAndDonorInfo = ({ formValues }) => {
    function DonorUnknownCheckBox() {
        const isChecked = formValues.donorUnknown;
        if (isChecked === true)
            return (
                <Row>
                    <Col className="rightLabel">Known donor:</Col>
                    <Col>
                        <span className="normal">This is an unknown donor</span>
                    </Col>
                </Row>
            );
        else return null;
    }

    function NewDonorCheckBox() {
        const isChecked = formValues.newDonor;
        if (isChecked === true)
            return (
                <Row>
                    <Col className="rightLabel">Is this a new donor? :</Col>
                    <Col>
                        <span className="normal">Yes</span>
                    </Col>
                </Row>
            );
        else return null;
    }

    function NewAddressCheckBox() {
        const isChecked = formValues.newAddress;
        if (isChecked === true)
            return (
                <Row>
                    <Col className="rightLabel">Is this a new address? :</Col>
                    <Col>
                        <span className="normal">Yes</span>
                    </Col>
                </Row>
            );
        else return null;
    }

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

    console.log("before return");
    // console.log(formValues);
    // console.log(formValues.campusLocation);
    // console.log(formValues.donorUnknown);

    return (
        <>
            <Row className="resultItems">
                <Col sm={12} md={6}>
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

                <Col sm={12} md={6}>
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
                    <DonorUnknownCheckBox />
                    <NewDonorCheckBox />
                    <NewAddressCheckBox />
                    <Row>
                        <Col className="rightLabel">Contact/Publicity:</Col>
                        <Col>
                            <span className="normal">
                                {formValues.publicityCode}
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default PrintContactAndDonorInfo;
