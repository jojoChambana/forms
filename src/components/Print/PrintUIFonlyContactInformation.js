import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintUIFonlyContactInformation = ({ formValues }) => {
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
                        className="resultItems d-flex flex-wrap justify-content-center"
                    >
                        <div className="d-print-table-row">
                            <div className="col">
                                <DateOfGift />
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
                                <DatePrepared />
                            </div>
                        </div>
                        <div className="d-print-table-row">
                            <SourceCode />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrintUIFonlyContactInformation;
