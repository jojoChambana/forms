import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintUIFonlyContactInformation = ({ formValues }) => {
    const borderStyles = {
        border: "solid 1px rgba(0,0,0,.125)",
        borderRadius: "4px",
    };

    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Department Information
                    </Typography>
                </Col>
            </Row>
            <div style={borderStyles} className="mt-3">
                <div className="resultItems">
                    <div
                        id="contactPrint"
                        className="resultItems d-flex flex-wrap"
                    >
                        <div className="d-print-table-row">
                            <div className="col">
                                {formValues.dateOfGift != null ? (
                                    <div className="rightLabel">
                                        Date of Gift:
                                        <span className="normal">
                                            {formValues.dateOfGift}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="rightLabel">
                                Prepared By:
                                <span className="normal">
                                    {formValues.preparedBy}
                                </span>
                            </div>
                        </div>
                        <div className="d-print-table-row">
                            <div className="col">
                                {formValues.datePrepared != null ? (
                                    <div className="rightLabel">
                                        Date Prepared:
                                        <span className="normal">
                                            {formValues.datePrepared}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            {formValues.sourceCode.length ? (
                                <div className="col">
                                    <div className="rightLabel overFlowBreakWord">
                                        Source Code:
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
        </>
    );
};

export default PrintUIFonlyContactInformation;
