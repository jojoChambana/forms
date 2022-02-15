const PrintTribute = ({ formValues }) => {
    function IsTributeNewAddressChecked(props) {
        if (formValues.inMemoryNewAddress === true) {
            return (
                <div className="resultItems row">
                    <div className="col">
                        <div className="d-print-table-cell">
                            <div className="d-flex IsTributeNewAddressChecked">
                                <span className="normal">
                                    This is a new address
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
    const Domestic = () => {
        return (
            <>
                <div className="d-print-table-row">
                    <div className="rightLabel">Address:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeDomesticAddress}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">City:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeDomesticAddressCity}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">State:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeDomesticAddressState}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Zip:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeDomesticAddressZipCode}
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
                            {formValues.tributeForeignAddress}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">City:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeForeignAddressCity}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Province/Region:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeForeignAddressProvinceRegion}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Country:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeForeignAddressCountry}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">Postal Code:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.tributeForeignAddressPostalCode}
                        </span>
                    </div>
                </div>
            </>
        );
    };
    function AddressType(foreignAddress) {
        const isForeign = formValues.tributeForeignAddressCheckbox;
        if (!isForeign) return <Domestic />;
        else return <Foreign />;
    }

    if (formValues.tributeChecked) {
        return (
            <>
                <div className="resultItems row">
                    <div className="col">
                        <IsTributeNewAddressChecked />
                        <div className="d-print-table-cell">
                            <div className="d-flex justify-content-center">
                                <span className="normal justify-col-tribute">
                                    This is a tribute
                                </span>
                            </div>
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    {formValues.giftTribute}:
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {/* if the value is "In memory of", then show the deceasedFullName, otherwise show the honoreeFullName */}
                                        {formValues.giftTribute ===
                                        "In memory of"
                                            ? formValues.deceasedFullName
                                            : formValues.honoreeFullName}
                                    </span>
                                </div>
                            </div>
                            <AddressType />
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-print-table-cell">
                            <div className="d-print-table-row">
                                <div className="rightLabel">&nbsp;</div>
                                <div className="d-print-table-cell">
                                    <span className="normal"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};

export default PrintTribute;
