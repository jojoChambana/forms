import { Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

// export default function PrintSpousalPartner({ formValues }) {

const PrintSpousalPartner = ({ formValues, spousalVal }, key) => {
    function DoNotAddSpousePartnerToReceipt() {
        if (formValues.doNotAddSpousePartnerToReceipt === true)
            return (
                <div className="d-print-table-row">
                    <div className="d-print-table-cell maxWidth">
                        <span className="normal">
                            Do not add spouse/partner to receipt.
                        </span>
                    </div>
                </div>
            );
        else return null;
    }

    function DoNotGiveAddSpousePartnerCredit() {
        if (formValues.doNotGiveSpousePartnerCredit === true)
            return (
                <div className="d-print-table-row">
                    <div className="d-print-table-cell maxWidth">
                        <span className="normal">
                            Do not give spouse/partner credit for donation.
                        </span>
                    </div>
                </div>
            );
        else return null;
    }

    return !spousalVal ? (
        <div key={key}>
            <div className="row mt-2">
                <div className="col">
                    <Typography variant="h5" component="h3">
                        Spousal/Partner Information
                    </Typography>
                </div>
            </div>
            <div className="row mt-3 border">
                <div className="col-6">
                    <div className="d-print-table-row">
                        <div className="rightLabel">
                            <span>Organization/Donor Name: </span>
                        </div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.spousePartnerOrganizationDonorName}
                            </span>
                        </div>
                    </div>
                    <div className="d-print-table-row">
                        <div className="rightLabel">
                            <span>TED Constituent ID: </span>
                        </div>
                        <div className="d-print-table-cell">
                            <span className="normal">
                                {formValues.spousePartnerTedConstituentId}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <DoNotAddSpousePartnerToReceipt />
                    <DoNotGiveAddSpousePartnerCredit />
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default PrintSpousalPartner;
