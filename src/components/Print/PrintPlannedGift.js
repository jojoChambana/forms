import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import PrintOneApplication from "./PrintOneApplication";

const PrintPlannedGift = ({ formValues, index }, key) => {
    var applicationCount = 0;
    if (formValues.application !== undefined)
        applicationCount = formValues.application.length; // used to determine if we should show Delete application buttons
    return applicationCount > 0 ? (
        <div key={key} className="print-container">
            <Row className="mt-2">
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Planned Gift
                    </Typography>
                </Col>
            </Row>
            <div className="border">
                <div className="row">
                    <div className="col-6">
                        <div className="d-print-table-row mt-3">
                            <div
                                className="rightLabel"
                                style={{
                                    textAlign: "initial",
                                    paddingLeft: "1em",
                                }}
                            >
                                Is this gift associated with a Planned Gift
                                Application?
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.isGiftPlanned}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {formValues.isGiftPlanned === "Yes" ? (
                    <>
                        {formValues.application.map((item, index) => {
                            return (
                                <>
                                    <Row
                                        className="borderBtm"
                                        style={{
                                            paddingTop: "0",
                                            marginRight: "1em",
                                            paddingBottom: "0",
                                            marginLeft: "1em",
                                            marginBottom: "0",
                                            // borderBottom: "solid 1px",
                                        }}
                                    >
                                        <PrintOneApplication
                                            oneApplication={item}
                                            index={index}
                                            // key={"oneDesig" + index}
                                        />
                                    </Row>
                                </>
                            );
                        })}
                    </>
                ) : (
                    <></>
                )}

                <Row className="borderTop">
                    {!formValues.charitableRemainderAmount > 0 ? (
                        <></>
                    ) : (
                        <Col className="d-flex justify-content-center">
                            <div className="firstChild">
                                Charitable Remainder Amount:{" "}
                                <span className="normal">
                                    {formValues.charitableRemainderAmount}
                                </span>
                            </div>
                        </Col>
                    )}

                    {!formValues.annuityPayable > 0 ? (
                        <></>
                    ) : (
                        <Col className="d-flex justify-content-center">
                            <div className="firstChild">
                                Annuity Payable:{" "}
                                <span className="normal">
                                    {formValues.annuityPayable}
                                </span>
                            </div>
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col className="d-flex justify-content-start">
                        <div className="firstChild" style={{ display: "flex" }}>
                            <div className="spacer">
                                <Typography variant="p">Comments: </Typography>
                            </div>
                            <span className="normal">
                                {formValues.applicationAdditionalComments}
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    ) : (
        <></>
    );
};
export default PrintPlannedGift;
