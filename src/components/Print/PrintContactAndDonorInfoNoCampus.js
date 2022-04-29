import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintContactAndDonorInfoNoCampus = ({ formValues }) => {
    function DonorUnknownCheckBox() {
        if (formValues.donorUnknownCheckBox === false)
            return (
                <div className="d-print-table-cell">
                    <span
                        className="normal justify-content-center"
                        style={{ paddingLeft: "0" }}
                    >
                        Donor is unknown, anonymous or various cash donors
                    </span>
                </div>
            );
        else return null;
    }
    function CampusShow() {
        if (formValues.campusLocation !== null)
            return (
                <div className="d-print-table-row">
                    <div className="rightLabel">
                        University:
                        <span className="normal">
                            {formValues.campusLocation}
                        </span>
                    </div>
                </div>
            );
        else return null;
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

    function NewDonorCheckBox() {
        if (formValues.newDonorCheckBox === true)
            return (
                <Row
                    style={{
                        justifyContent: "flex-end",
                    }}
                >
                    <div className="d-print-table-cell d-flex" s>
                        <span className="normal" style={{ width: "300px" }}>
                            <strong>This is a new donor</strong>
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
                    <div className="d-print-table-cell d-flex justify-content-center">
                        <span className="normal" style={{ width: "300px" }}>
                            <strong>This is a new address</strong>
                        </span>
                    </div>
                </Row>
            );
        else return null;
    }

    function UnitReferenceNumber() {
        // if (!formValues.unitReferenceNumber === undefined)
        if (formValues.unitReferenceNumber.length === 0)
            return (
                <div className="col rightLabel">
                    <span className="normal">&nbsp;</span>
                </div>
            );
        else
            return (
                <div className="col rightLabel">
                    Unit reference number:
                    <span className="normal">
                        {formValues.unitReferenceNumber}
                    </span>
                </div>
            );
    }

    // function DateOfGift() {
    //     if (formValues.dateOfGift != null)
    //         return (
    //             <div className="col rightLabel">
    //                 Date of Gift:
    //                 <span className="normal">{formValues.dateOfGift}</span>
    //             </div>
    //         );
    //     else return null;
    // }

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
        if (formValues.sourceCode.length > 0)
            return (
                <>
                    <div className="rightLabel">
                        Source Code:
                        <span className="normal overFlowBreakWord">
                            {formValues.sourceCode}
                        </span>
                    </div>
                </>
            );
        else
            return (
                <div className="col rightLabel">
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
                <div
                    className="resultItems d-flex"
                    style={{ padding: "0 1em" }}
                >
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

                        <DatePrepared />
                        <div id="donationDate" className="col rightLabel">
                            Date Received by Department:
                            <span className="normal">
                                {formValues.donationDate}
                            </span>
                        </div>

                        <Col className="rightLabel">
                            <div>
                                Prepared By:
                                <span className="normal">
                                    {formValues.preparedBy}
                                </span>
                            </div>
                        </Col>

                        <UnitReferenceNumber />
                    </div>
                </div>

                <div className="resultItems d-flex">
                    <div
                        className="resultItems d-flex flex-wrap"
                        style={{ padding: "0 1em" }}
                    >
                        <SourceCode />
                    </div>
                </div>
            </div>

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
                                    Contact Email:
                                    <span className="normal">
                                        {formValues.contactEmail}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="d-print-table-row">
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
                                <DateOfGift />
                            </div>
                            <div className="col">
                                <DatePrepared />
                            </div>
                        </div>
                        <div className="d-print-table-row">
                            <div className="rightLabel" id="donationDate">
                                Date Received by Department:
                                <span
                                    className="normal"
                                    style={{ textAlign: "left" }}
                                >
                                    {formValues.donationDate}
                                </span>
                            </div>
                            <div className="rightLabel">
                                Prepared By:
                                <span className="normal">
                                    {formValues.preparedBy}
                                </span>
                            </div>
                        </div>
                        <div className="d-print-table-row">
                            <UnitReferenceNumber />
                            <SourceCode />
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

                                <DonorUnknownCheckBox />
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
                    </div>
                </div>
            </Row>
        </>
    );
};

export default PrintContactAndDonorInfoNoCampus;
