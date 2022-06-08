import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintDonorInformation = ({ formValues }) => {
    function NewDonorCheckBox() {
        if (formValues.newDonorCheckBox === true)
            return (
                <>
                    <div className="d-print-table-row">
                        <div className="d-leftLabel">New Donor:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">Yes</span>
                        </div>
                    </div>
                </>
            );
        else return null;
    }

    function NewAddressCheckBox() {
        if (formValues.newDonorAddressCheckBox === true)
            return (
                <>
                    <div className="d-print-table-row">
                        <div className="d-leftLabel">New Address:</div>
                        <div className="d-print-table-cell ">
                            <span className="normal">Yes</span>
                        </div>
                    </div>
                </>
            );
        else return null;
    }

    const Domestic = () => {
        return (
            <div className="resultItems">
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
            </div>
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

            <div className="mt-3 border">
                <div class="row mt-3">
                    <div class="col-6">
                        <div class="d-print-table-row">
                            <div class="rightLabel">TED Constituent ID:</div>
                            <div class="d-print-table-cell">
                                <span class="normal">
                                    {formValues.tedConstituentId}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-print-table-row">
                            <div class="leftLabel">Contact/Publicity:</div>
                            <div class="d-print-table-cell">
                                <span class="normal">
                                    {formValues.publicityCode}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrintDonorInformation;
