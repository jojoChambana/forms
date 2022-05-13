import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintTribute = ({ formValues }) => {
    function IsTributeNewAddressChecked(props) {
        if (formValues.inMemoryNewAddress === true) {
            return (
                <>
                    <div className="d-print-table-row justify-content-center">
                        <div>New Address:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">Yes</span>
                        </div>
                    </div>
                </>
            );
        } else {
            return null;
        }
    }

    function IsAcknowledgeeForeignAddressCheckboxChecked(props) {
        if (formValues.acknowledgeeForeignAddressCheckbox === true) {
            return (
                <>
                    <div className="d-print-table-row">
                        <div>Location:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                This is a Foreign Address
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">Address:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.acknowledgeeForeignAddress}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">City:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.acknowledgeeForeignAddressCity}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">Province/Region:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {
                                    formValues.acknowledgeeForeignAddressProvinceRegion
                                }
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">Province/Region:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {
                                    formValues.acknowledgeeForeignAddressPostalCode
                                }
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Email:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.notifyIndividualOrFamilyEmail}
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div className="rightLabel">Phone:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tedTributeAcknowledgedPhone}
                            </span>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="d-print-table-row">
                        <div>Address:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.acknowledgeeDomesticAddress}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">City:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.acknowledgeeDomesticAddressCity}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">State:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.acknowledgeeDomesticAddressState}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">Zip Code:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.acknowledgeeDomesticAddressZipCode}
                            </span>
                        </div>
                    </div>

                    {formValues.notifyIndividualOrFamilyEmail && (
                        <div className="d-print-table-row">
                            <div className="rightLabel">Email:</div>
                            <div
                                className="d-print-table-cell"
                                id="tributePrint"
                            >
                                <span className="normal">
                                    {formValues.notifyIndividualOrFamilyEmail}
                                </span>
                            </div>
                        </div>
                    )}

                    {formValues.tedTributeAcknowledgedPhone && (
                        <div className="d-print-table-row">
                            <div className="rightLabel">Phone:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.tedTributeAcknowledgedPhone}
                                </span>
                            </div>
                        </div>
                    )}
                </>
            );
        }
    }

    function NotifyIndividualOrFamily(props) {
        if (
            formValues.notifyIndividualOrFamily ===
            "Please Notify the Individual/Family Below"
        ) {
            return (
                <>
                    <div className="d-print-table-row justify-content-center">
                        <div>Notification:</div>
                        <div className="d-print-table-cell maxWidth">
                            <span className="normal">
                                Please Notify Acknowledgee
                            </span>
                        </div>
                    </div>

                    <div className="d-print-table-row">
                        <div>Acknowledgee:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tedTributeAcknowledgedFirstName}{" "}
                                {formValues.tedTributeAcknowledgedLastName}
                            </span>
                        </div>
                    </div>
                    <IsAcknowledgeeForeignAddressCheckboxChecked />
                </>
            );
        } else if (
            formValues.notifyIndividualOrFamily === "Do Not Send a Notification"
        ) {
            return (
                <div className="d-print-table-row">
                    <div className="rightLabel">Notification:</div>
                    <div className="d-print-table-cell">
                        <span className="normal">Please Do Not Notify</span>
                    </div>
                </div>
            );
        } else if (
            formValues.notifyIndividualOrFamily === "Please Notify the Honoree"
        ) {
            return (
                <>
                    <div className="resultItems row mt-2">
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <strong className="normal justify-col-tribute">
                                    <Typography>
                                        <strong>
                                            Please Notify the Honoree
                                        </strong>
                                    </Typography>
                                </strong>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return <></>;
        }
    }

    function TedTributeConstituentId() {
        if (formValues.tedTributeConstituentId.length > 0)
            return (
                <>
                    <div className="d-print-table-row">
                        <div className="rightLabel min-cell">
                            TED Constituent ID:
                        </div>

                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tedTributeConstituentId}
                            </span>
                        </div>
                    </div>
                </>
            );
        else return null;
    }

    const Domestic = () => {
        return (
            <>
                <>
                    {formValues.tributeDomesticAddress ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">Address:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.tributeDomesticAddress}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {formValues.tributeDomesticAddressCity ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">City:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.tributeDomesticAddressCity}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {formValues.tributeDomesticAddressState ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">State:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.tributeDomesticAddressState}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {formValues.tributeDomesticAddressZipCode ? (
                        <div className="d-print-table-row">
                            <div className="rightLabel">Zip:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.tributeDomesticAddressZipCode}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </>
            </>
        );
    };

    const Foreign = () => {
        return (
            <>
                {formValues.tributeForeignAddress ? (
                    <div className="d-print-table-row">
                        <div className="rightLabel">Address:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tributeForeignAddress}
                            </span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {formValues.tributeForeignAddressCity ? (
                    <div className="d-print-table-row">
                        <div className="rightLabel">City:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tributeForeignAddressCity}
                            </span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {formValues.tributeForeignAddressProvinceRegion ? (
                    <div className="d-print-table-row">
                        <div className="rightLabel">Province/Region:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tributeForeignAddressProvinceRegion}
                            </span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {formValues.tributeForeignAddressCountry ? (
                    <div className="d-print-table-row">
                        <div className="rightLabel">Country:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tributeForeignAddressCountry}
                            </span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {formValues.tributeForeignAddressPostalCode ? (
                    <div className="d-print-table-row">
                        <div className="rightLabel">Postal Code:</div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.tributeForeignAddressPostalCode}
                            </span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </>
        );
    };
    function AddressType(foreignAddress) {
        const isForeign = formValues.tributeForeignAddressCheckbox;
        if (!isForeign) return <Domestic />;
        else return <Foreign />;
    }

    function HonorOrDeceased() {
        if (formValues.giftTribute === "In Memory Of") {
            return formValues.deceasedFullName;
        } else return formValues.honoreeFullName;
    }

    if (formValues.tributeChecked) {
        return (
            <>
                <Row className="mt-3">
                    <Col>
                        <Typography variant="h5" component="h3">
                            Tribute Information
                        </Typography>
                    </Col>
                </Row>
                <Col className="border">
                    <div>
                        <div className="d-print-table-row mt-1">
                            <Col className="d-print-table-cell">
                                <div className="d-print-table-row mt-2">
                                    <TedTributeConstituentId />
                                </div>
                                <div className="d-print-table-row">
                                    <div className="rightLabel">
                                        {formValues.giftTribute}:
                                    </div>

                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            <HonorOrDeceased />
                                        </span>
                                    </div>
                                </div>
                                <AddressType />
                                {formValues.designationPhoneNumber && (
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">Phone:</div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {
                                                    formValues.designationPhoneNumber
                                                }
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {formValues.designationEmail && (
                                    <div className="d-print-table-row">
                                        <div className="rightLabel">Email:</div>
                                        <div className="d-print-table-cell">
                                            <span className="normal">
                                                {formValues.designationEmail}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Col>
                            <Col className="d-print-table-cell mt-2 mb-2">
                                <IsTributeNewAddressChecked />
                                <NotifyIndividualOrFamily />
                            </Col>
                        </div>
                    </div>
                </Col>
            </>
        );
    } else {
        return <></>;
    }
};

export default PrintTribute;
