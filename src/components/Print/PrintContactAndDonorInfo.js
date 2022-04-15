import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintContactAndDonorInfo = ({ formValues }) => {
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
                    className="d-print-table-cell d-flex"
                    style={{ width: "auto" }}
                >
                    <span className="normal">
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
                    className="d-print-table-cell d-flex"
                    style={{ width: "auto" }}
                >
                    <span className="normal">
                        <strong>This is a new address</strong>
                    </span>
                </div>
            );
        else return null;
    }

    function UnitReferenceNumber() {
        if (
            !formValues.unitReferenceNumber === undefined ||
            formValues.unitReferenceNumber.length === 0
        )
            return (
                <div className="rightLabel">
                    <span className="normal">&nbsp;</span>
                </div>
            );
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

    function DateOfGift() {
        if (formValues.dateOfGift != null)
            return (
                <div className="rightLabel">
                    Date of Gift:
                    <span className="normal">{formValues.dateOfGift}</span>
                </div>
            );
        else return null;
    }

    function DatePrepared() {
        if (formValues.datePrepared != null)
            return (
                <div className="rightLabel">
                    Date Prepared:
                    <span className="normal">{formValues.datePrepared}</span>
                </div>
            );
        else return null;
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
        else
            return (
                <div className="rightLabel">
                    &nbsp;
                    <span className="normal">&nbsp;</span>
                </div>
            );
    }

    // const correctPadding = {
    //     padding: "1em 0.5em",
    // };

    // function DoNotProcessUntilContacted() {
    //     if (formValues.doNotProcessUntilContactedByTrustServices !== false)
    //         return (
    //             <>
    //                 <div className="row mt-1">
    //                     <Col style={{ textAlign: "center" }}>
    //                         <span className="normal" style={correctPadding}>
    //                             Do not process until until donor is contacted by
    //                             Trust Services
    //                         </span>
    //                     </Col>
    //                 </div>
    //             </>
    //         );
    //     else return null;
    // }

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

    // console.log("donorUnknownCheckBox", formValues.donorUnknownCheckBox);

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
                {/* <DoNotProcessUntilContacted /> */}
                <div className="resultItems">
                    <div
                        id="contactPrint"
                        className="resultItems d-flex flex-wrap justify-content-center"
                    >
                        <div className="d-print-table-row">
                            <div className="col">
                                <div className="rightLabel">
                                    Contact Full Name:
                                    <span className="normal">
                                        {formValues.contactFullName}
                                    </span>
                                </div>
                            </div>
                            <div className="col">
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
                            <div className="col">
                                <div className="rightLabel">
                                    Contact Phone:
                                    <span className="normal">
                                        {formValues.contactPhone}
                                    </span>
                                </div>
                            </div>
                            <div className="col">
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
                            <div className="col">
                                <div className="rightLabel">
                                    Contact Email:
                                    <span className="normal">
                                        {formValues.contactEmail}
                                    </span>
                                </div>
                            </div>

                            <div className="d-print-table-row">
                                <div className="rightLabel" id="donationDate">
                                    Date Received by Department:
                                    <span className="normal">
                                        {formValues.donationDate}
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                <DatePrepared />
                            </div>
                        </div>
                        <div className="d-print-table-row">
                            <UnitReferenceNumber />
                            <SourceCode />
                        </div>
                        <div className="d-print-table-row">
                            <div className="col">
                                <div className="rightLabel">
                                    Prepared By:
                                    <span className="normal">
                                        {formValues.preparedBy}
                                    </span>
                                </div>
                            </div>
                            <div className="rightLabel">&nbsp;</div>
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
                <div className="resultItems d-flex">
                    {/* ==================== left column at the top for campus/contact info ===================== */}

                    {/* ============ right column at the top for donor info ============== */}
                    <div
                        className="d-print-table-cell col centerColContent mt-3"
                        style={borderStyles}
                    >
                        <DonorUnknownCheckBox />
                        {formValues.donorUnknownCheckBox === false ? (
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
                            </Row>
                        ) : (
                            ""
                        )}
                        {!formValues.donorUnknownCheckBox ? (
                            <Row>
                                <Col>
                                    <AddressType />

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
                                </Col>

                                <div class="col">
                                    <div className="resultItems row">
                                        <div class="d-flex justify-content-center">
                                            <strong>
                                                <NewDonorCheckBox />
                                            </strong>
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <strong>
                                                <NewAddressCheckBox />
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        ) : (
                            " "
                        )}
                    </div>
                </div>
            </Row>
        </>
    );
};

export default PrintContactAndDonorInfo;
