import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintUIFonlyContactInformation = ({ formValues }) => {
    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Department Information
                    </Typography>
                </Col>
            </Row>
            <div className="border mt-3">
                <div className="row">
                    <div className="col-6">
                        <div className="d-print-table-row">
                            <div className="rightLabel">Date of Gift:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.dateOfGift}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="d-print-table-row">
                                <div className="d-print-table-cell leftLabel">
                                    Prepared By:
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formValues.preparedBy}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        {formValues.datePrepared != null ? (
                            <div className="d-print-table-row">
                                <div className="rightLabel">Date Prepared:</div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formValues.datePrepared}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    {formValues.sourceCode > 0 ? (
                        <div className="col-6">
                            <div className="row">
                                <div className="d-print-table-row">
                                    <div className="d-print-table-cell leftLabel">
                                        Source Code:
                                    </div>
                                    <div className="d-print-table-cell">
                                        <span className="normal">
                                            {formValues.sourceCode}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
};

export default PrintUIFonlyContactInformation;
