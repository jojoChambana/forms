import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintContactAndDonorInfo = ({ formValues }) => {
    function DonorUnknownCheckBox() {
        if (formValues.donorUnknownCheckBox === true)
            return (
                <div className="d-print-table-row">
                    <div className="col-6">
                        <div className="rightLabel">
                            <span className="normal">
                                Donor is unknown, anonymous or various cash
                                donors
                            </span>
                        </div>
                    </div>
                </div>
            );
        else return null;
    }

    function NewDonorCheckBox() {
        if (formValues.newDonorCheckBox === true)
            return (
                <div class="d-print-table-row">
                    <div class="rightLabel">New Donor:</div>
                    <div class="d-print-table-cell">
                        <span class="normal">Yes</span>
                    </div>
                </div>
            );
        else return null;
    }

    function NewDonorAddressCheckBox() {
        if (formValues.newDonorAddressCheckBox === true)
            return (
                <div class="d-print-table-row">
                    <div class="rightLabel">New Donor Address:</div>
                    <div class="d-print-table-cell">
                        <span class="normal">Yes</span>
                    </div>
                </div>
            );
        else return null;
    }

    function UnitReferenceNumber() {
        if (
            !formValues.unitReferenceNumber === undefined ||
            formValues.unitReferenceNumber.length === 0
        )
            return null;
        else
            return (
                <div className="rightLabel">
                    Unit reference number:
                    <span className="normal">
                        {formValues.unitReferenceNumber}
                    </span>
                </div>
            );
    }

    function SourceCode() {
        if (formValues.sourceCode.length > 0)
            return (
                <>
                    <div className="rightLabel overFlowBreakWord">
                        Source Code:
                        <span className="normal">{formValues.sourceCode}</span>
                    </div>
                </>
            );
        else return null;
    }

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
            <div className="mt-3 border">
                {/* <DoNotProcessUntilContacted /> */}
                <div className="resultItems">
                    <div
                        id="contactPrint"
                        className="resultItems d-flex flex-wrap justify-content-center"
                    >
                        <div className="d-print-table-row">
                            <div className="col-6">
                                <div className="rightLabel">
                                    Contact Full Name:
                                    <span className="normal">
                                        {formValues.contactFullName}
                                    </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rightLabel">
                                    College Name:
                                    <span
                                        className="normal"
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {formValues.collegeName}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-print-table-row">
                            <div className="col-6">
                                <div className="rightLabel">
                                    Contact Phone:
                                    <span className="normal">
                                        {formValues.contactPhone}
                                    </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rightLabel">
                                    Department Name:
                                    <span
                                        className="normal"
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {formValues.departmentName}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div className="col-6">
                                <div className="rightLabel">
                                    Contact Email:
                                    <span className="normal">
                                        {formValues.contactEmail}
                                    </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rightLabel">
                                    Prepared By:
                                    <span className="normal">
                                        {formValues.preparedBy}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div className="col-6">
                                <div className="rightLabel">
                                    <div style={{ textAlign: "end" }}>
                                        Date Prepared:
                                    </div>
                                    <span className="normal d-flex align-items-center">
                                        {formValues.datePrepared}
                                    </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rightLabel">
                                    <div style={{ textAlign: "end" }}>
                                        Date Received:
                                    </div>
                                    <span className="normal d-flex align-items-center">
                                        {formValues.donationDate}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <SourceCode />
                            <UnitReferenceNumber />
                        </div>
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
                <div className="resultItems">
                    {/* ==================== left column at the top for campus/contact info ===================== */}

                    {/* ============ right column at the top for donor info ============== */}
                    <div className="row border ">
                        <div className="col-6">
                            <DonorUnknownCheckBox />
                            {formValues.donorUnknownCheckBox === false ? (
                                <div className="row mt-2">
                                    <div className="d-print-table-row donorPrintStuff">
                                        <div className="rightLabel">
                                            TED Constituent ID:
                                        </div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {formValues.tedConstituentId}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-print-table-row donorPrintStuff">
                                        <div className="rightLabel min-cell">
                                            Organization/ Donor Name:
                                        </div>
                                        <div className="d-print-table-cell d-flex align-items-center">
                                            <span className="normal">
                                                {
                                                    formValues.organizationDonorName
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {!formValues.donorUnknownCheckBox ? (
                                <AddressType />
                            ) : (
                                " "
                            )}
                        </div>
                        <div className="col-6 mt-2">
                            {formValues.donorUnknownCheckBox === false ? (
                                <div className="rightOffset">
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">
                                            Contact/Publicity:
                                        </div>
                                        <div className="d-print-table-cell d-flex align-items-center">
                                            <span className="normal">
                                                {formValues.publicityCode}
                                            </span>
                                        </div>
                                    </div>
                                    <NewDonorCheckBox />
                                    <NewDonorAddressCheckBox />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Row>
        </>
    );
};

export default PrintContactAndDonorInfo;
