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
                <div className="d-print-table-row">
                    <div className="rightLabel">Is this a new donor? :</div>
                    <div className="d-print-table-cell">
                        <span className="normal">Yes</span>
                    </div>
                </div>
            );
        else return null;
    }

    function NewAddressCheckBox() {
        if (formValues.newDonorAddressCheckBox === true)
            return (
                <div className="d-print-table-row">
                    <div className="rightLabel">Is this a new address? :</div>
                    <div className="d-print-table-cell">
                        <span className="normal">Yes</span>
                    </div>
                </div>
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

    console.log("donorUnknownCheckBox", formValues.donorUnknownCheckBox);

    return (
        <>
            <div className="resultItems d-flex">
                {/* ==================== left column at the top for campus/contact info ===================== */}
                <div className="d-print-table-cell col">
                    <div className="d-print-table-row">
                        <div className="rightLabel">Campus:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.campusLocation}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">Contact full name:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.contactFullName}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Phone:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.contactPhone}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Contact email:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.contactEmail}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">College name:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.collegeName}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">
                            Contact department name:
                        </div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.departmentName}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">Donation date:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.donationDate}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">Prepared by:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.preparedBy}
                            </span>
                        </div>
                    </div>

                    {formValues.unitReferenceNumber ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                Unit reference number:
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.unitReferenceNumber}
                                </span>
                            </div>
                        </div>
                    ) : null}
                </div>

                {/* ============ right column at the top for donor info ============== */}
                <div className="d-print-table-cell col centerColContent">
                    <DonorUnknownCheckBox />
                    {!formValues.donorUnknownCheckBox ? (
                        <>
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    TED constituent ID:
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formValues.tedConstituentId}
                                    </span>
                                </div>
                            </div>
                            <div className="d-print-table-row">
                                <div className="rightLabel min-cell">
                                    Organization/Donor name:
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formValues.organizationDonorName}
                                    </span>
                                </div>
                            </div>
                            <AddressType />

                            <NewDonorCheckBox />
                            <NewAddressCheckBox />
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
                </div>
            </div>
        </>
    );
};

export default PrintContactAndDonorInfo;
