import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintDonorInformation = ({ formValues }) => {
    function DonorUnknownCheckBox() {
        if (formValues.donorUnknownCheckBox === false)
            return (
                <div className="d-print-table-cell">
                    <span className="normal" style={{ paddingLeft: "0" }}>
                        Donor is unknown, anonymous or various cash donors
                    </span>
                </div>
            );
        else return null;
    }

    function NewDonorCheckBox() {
        if (formValues.newDonorCheckBox === true)
            return (
                <Row
                    style={{
                        justifyContent: "flex-end",
                    }}
                >
                    <div className="d-print-table-cell d-flex">
                        <span className="normal maxWidth justify-content-end">
                            This is a new donor
                        </span>
                    </div>
                </Row>
            );
        else return null;
    }

    function NewAddressCheckBox() {
        if (formValues.newDonorAddressCheckBox === true)
            return (
                <Row
                    style={{
                        justifyContent: "flex-end",
                    }}
                >
                    <div className="d-print-table-cell d-flex">
                        <span className="normal maxWidth justify-content-end">
                            This is a new address
                        </span>
                    </div>
                </Row>
            );
        else return null;
    }

    const borderStyles = {
        border: "solid 1px rgba(0,0,0,.125)",
        borderRadius: "4px",
    };

    const Domestic = () => {
        return (
            <>
                <div className="d-print-table-row">
                    <div className="rightLabel">Address:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorDomesticAddress}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">City:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorDomesticAddressCity}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">State:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorDomesticAddressState}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Zip:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorDomesticAddressZipCode}
                        </span>
                    </div>
                </div>
            </>
        );
    };

    const Foreign = () => {
        return (
            <>
                <div className="d-print-table-row">
                    <div className="rightLabel">Address:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorForeignAddress}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">City:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorForeignAddressCity}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Province/Region:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorForeignAddressProvinceRegion}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Country:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorForeignAddressCountry}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Postal Code:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.donorDomesticAddressZipCode}
                        </span>
                    </div>
                </div>
            </>
        );
    };
    function AddressType(foreignAddress) {
        const isForeign = formValues.donorForeignAddressCheckbox;
        if (!isForeign) return <Domestic />;
        else return <Foreign />;
    }

    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Typography variant="h5" component="h3">
                        Donor Information
                    </Typography>
                </Col>
            </Row>

            <Row>
                <div className="resultItems d-flex">
                    {/* ==================== left column at the top for campus/contact info ===================== */}

                    {/* ============ right column at the top for donor info ============== */}
                    <div
                        className="d-print-table-cell col centerColContent mt-3"
                        style={borderStyles}
                    >
                        <Row className="mt-2 mb-2">
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    TED Constituent ID:
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formValues.tedConstituentId}
                                    </span>
                                </div>
                            </div>
                            <div className="d-print-table-row">
                                <div className="rightLabel min-cell">
                                    Organization/Donor Name:
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formValues.organizationDonorName}
                                    </span>
                                </div>
                            </div>

                            {!formValues.donorUnknownCheckBox ? (
                                <>
                                    <Row>
                                        <Col>
                                            <AddressType />
                                        </Col>
                                        <Col>
                                            <Row>
                                                <NewDonorCheckBox />
                                                <NewAddressCheckBox />
                                                {/* <DonorUnknownCheckBox /> */}
                                            </Row>
                                        </Col>
                                    </Row>

                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Contact/Publicity:
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {formValues.publicityCode}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                " "
                            )}
                        </Row>
                        <Row>
                            {!formValues.doNotProcessUntilContactedByTrustServices ? (
                                ""
                            ) : (
                                <>
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Donor Contact:
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                Do Not Process Until Contacted
                                                By Trust Services
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Row>
                    </div>
                </div>
            </Row>
        </>
    );
};

export default PrintDonorInformation;
