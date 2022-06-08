import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintContactAndDonorInfo = ({ formValues }) => {
    function DonorUnknownCheckBox() {
        if (formValues.donorUnknownCheckBox === true)
            return (
                <span className="normal">
                    Donor is unknown, anonymous or various cash donors
                </span>
            );
        else return null;
    }

    function NewDonorCheckBox() {
        if (formValues.newDonorCheckBox === true)
            return (
                <>
                    {/* <div className="rightLabel"> New Donor:</div>
                    <div className="d-print-table-cell">
                        <span class="normal">Yes</span>
                    </div> */}
                    <div className="leftLabel">New Donor:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">Yes</span>
                    </div>
                </>
            );
        else return null;
    }

    function NewDonorAddressCheckBox() {
        if (formValues.newDonorAddressCheckBox === true)
            return (
                <>
                    {/* <div>
                        New Donor Address:
                        <span class="normal">Yes</span>
                    </div> */}

                    {/* <div class="d-print-table-row justify-content-cente">
                        <div class="leftLabel">New Donor Address:</div>
                        <div class="d-print-table-cell">
                            <span class="normal">Yes</span>
                        </div>
                    </div> */}
                </>
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
            <div className="d-print-table-row">
                <div
                    className="d-print-table-cell col"
                    style={{ padding: "0" }}
                >
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
            </div>
        );
    };

    const Foreign = () => {
        return (
            <div className="d-table-print-row">
                <div className="d-table-cell">
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
                </div>
            </div>
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
                    <div className="resultItems d-flex flex-wrap justify-content-center contactPrint">
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

            <Row className="border">
                <>
                    {/* ==================== left column at the top for campus/contact info ===================== */}
                    <div className="col-6">
                        <DonorUnknownCheckBox />
                        {/* {formValues.donorUnknownCheckBox === false ? (
                            <>
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
                                    <div className="rightLabel">
                                        Organization/Donor Name:
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formValues.organizationDonorName}
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            ""
                        )} */}
                        <div className="d-print-table-row mt-2">
                            <div
                                className="d-print-table-cell col"
                                style={{ padding: "0em" }}
                            >
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
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div
                                className="d-print-table-cell col"
                                style={{ padding: "0em" }}
                            >
                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        Organization/Donor Name:
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formValues.organizationDonorName}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AddressType />
                    </div>
                    {/* ============ right column at the top for donor info ============== */}
                    <div className="col-6">
                        <div className="d-print-table-row justify-content-center">
                            <div className="leftLabel">Contact/Publicity:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.publicityCode}
                                </span>
                            </div>
                        </div>
                        <div className="d-print-table-row justify-content-center">
                            <div className="rightOffset">
                                <NewDonorCheckBox />
                            </div>
                        </div>
                        <div className="d-print-table-row justify-content-center">
                            <NewDonorAddressCheckBox />
                        </div>
                    </div>
                </>
            </Row>
        </>
    );
};

export default PrintContactAndDonorInfo;
