import { Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function PrintSpousalPartner({ formValues }) {
    function DoNotAddSpousePartnerToReceipt() {
        if (formValues.doNotAddSpousePartnerToReceipt === true)
            return (
                <div className="d-print-table-row">
                    <div className="d-print-table-cell">
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
                    <div className="d-print-table-cell">
                        <span className="normal">
                            Do not give spouse/partner credit for donation.
                        </span>
                    </div>
                </div>
            );
        else return null;
    }

    function SpousePartnerTedConstituentId() {
        if (formValues.spousePartnerTedConstituentId > 0)
            return (
                <div className="d-print-table-row">
                    <div className="d-print-table-cell">
                        <span>TED Constituent ID:</span>
                    </div>
                    <div className="d-print-table-cell">
                        <span className="normal">
                            {formValues.spousePartnerTedConstituentId}
                        </span>
                    </div>
                </div>
            );
        else return null;
    }
    return (
        <>
            <Row className="mt-2">
                <Col>
                    <Typography variant="h5" component="h3">
                        Spousal/Partner Information
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-print-table-row mt-2">
                        <Col>
                            <div className="d-print-table-cell">
                                <span>Organization/Donor Name: </span>
                                <span className="normal">
                                    {
                                        formValues.spousePartnerOrganizationDonorName
                                    }
                                </span>
                            </div>
                        </Col>
                        <Col>
                            <SpousePartnerTedConstituentId />
                        </Col>
                    </div>
                </Col>
                <Col>
                    <DoNotAddSpousePartnerToReceipt />
                    <DoNotGiveAddSpousePartnerCredit />
                </Col>
            </Row>
        </>
    );
}
