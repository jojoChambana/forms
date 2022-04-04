import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintContactAndDonorInfoNoCampus = ({ formValues }) => {
    function DonorUnknownCheckBox() {
        if (formValues.donorUnknownCheckBox === true)
            return (
                <div className="d-print-table-row">
                    <div className="d-print-table-cell">
                        <span className="normal">
                            Donor is unknown, anonymous or various cash donors
                        </span>
                    </div>
                </div>
            );
        else return null;
    }

    function NewDonorCheckBox() {
        if (formValues.newDonorCheckBox === true)
            return (
                <div
                    class="d-print-table-cell d-flex justify-content-center"
                    style={{ textAlign: "center" }}
                >
                    <span class="normal" style={{ width: "300px" }}>
                        <strong>This is a new donor</strong>
                    </span>
                </div>
            );
        else return null;
    }

    function NewAddressCheckBox() {
        if (formValues.newDonorAddressCheckBox === true)
            return (
                <div
                    class="d-print-table-cell d-flex justify-content-center"
                    style={{ textAlign: "center" }}
                >
                    <span class="normal" style={{ width: "300px" }}>
                        <strong>This is a new address</strong>
                    </span>
                </div>
            );
        else return null;
    }

    function UnitReferenceNumber() {
        if (formValues.unitReferenceNumber > 0)
            return (
                <div className="col rightLabel">
                    Unit reference number:
                    <span className="normal">
                        {formValues.unitReferenceNumber}
                    </span>
                </div>
            );
        else
            return (
                <div className="col rightLabel">
                    &nbsp;
                    <span className="normal">&nbsp;</span>
                </div>
            );
    }

    function DateOfGift() {
        if (formValues.dateOfGift != null)
            return (
                <div className="col rightLabel">
                    Date of Gift:
                    <span className="normal">{formValues.dateOfGift}</span>
                </div>
            );
        else return null;
    }

    function DatePrepared() {
        if (formValues.datePrepared != null)
            return (
                <div className="col rightLabel">
                    Date Prepared:
                    <span className="normal">{formValues.datePrepared}</span>
                </div>
            );
        else return null;
    }

    function SourceCode() {
        if (formValues.unitReferenceNumber > 0)
            return (
                <div className="col rightLabel">
                    Source Code:
                    <span className="normal">{formValues.sourceCode}</span>
                </div>
            );
        else
            return (
                <div className="col rightLabel">
                    &nbsp;
                    <span className="normal">&nbsp;</span>
                </div>
            );
    }

    const correctPadding = {
        padding: "1em 0.5em",
    };

    function DoNotProcessUntilContacted() {
        if (formValues.doNotProcessUntilContactedByTrustServices !== false)
            return (
                <>
                    <div className="row mt-1">
                        <Col style={{ textAlign: "center" }}>
                            <span className="normal" style={correctPadding}>
                                Do not process until until donor is contacted by
                                Trust Services
                            </span>
                        </Col>
                    </div>
                </>
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
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Contact Information
                    </Typography>
                </Col>
            </Row>
            <div style={borderStyles} className="mt-3">
                <DoNotProcessUntilContacted />
                <div className="resultItems d-flex">
                    <div
                        id="contactPrint"
                        className="resultItems d-flex flex-wrap"
                    >
                        <div className="col rightLabel">
                            Contact Full Name:
                            <span className="normal">
                                {formValues.contactFullName}
                            </span>
                        </div>
                        <div className="col rightLabel">
                            Contact Phone:
                            <span className="normal">
                                {formValues.contactPhone}
                            </span>
                        </div>

                        <div className="col rightLabel">
                            Contact Email:
                            <span className="normal">
                                {formValues.contactEmail}
                            </span>
                        </div>
                        <div className="col rightLabel">
                            College Name:
                            <span className="normal">
                                {formValues.collegeName}
                            </span>
                        </div>
                        <div className="col rightLabel">
                            Department Name:
                            <span className="normal">
                                {formValues.departmentName}
                            </span>
                        </div>
                        <DateOfGift />
                        <DatePrepared />
                        <div id="donationDate" className="col rightLabel">
                            Date Received by Department:
                            <span className="normal">
                                {formValues.donationDate}
                            </span>
                        </div>
                        <div className="col rightLabel">
                            Prepared By:
                            <span className="normal">
                                {formValues.preparedBy}
                            </span>
                        </div>
                        <UnitReferenceNumber />
                        <SourceCode />
                    </div>
                </div>
            </div>
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
                        className="d-print-table-cell col centerColContent mt-2"
                        style={borderStyles}
                    >
                        <DonorUnknownCheckBox />
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
                                            <NewDonorCheckBox />
                                            <NewAddressCheckBox />
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
                    </div>
                </div>
            </Row>
        </>
    );
};

export default PrintContactAndDonorInfoNoCampus;
