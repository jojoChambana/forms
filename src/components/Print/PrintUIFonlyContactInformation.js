import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintUIFonlyContactInformation = ({ formValues }) => {
    return (
        <div className="resultItems">
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
                        <div className="d-print-table-row">
                            <div className="rightLabel">Date Prepared:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.datePrepared}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-print-table-row">
                            <div className="leftLabel">Prepared By:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.preparedBy}
                                </span>
                            </div>
                        </div>

                        {formValues.sourceCode > 0 ? (
                            <div className="d-print-table-row">
                                <div className="leftLabel">Source Code:</div>
                                <div className="d-print-table-cell">
                                    <span className="normal">
                                        {formValues.sourceCode}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintUIFonlyContactInformation;
