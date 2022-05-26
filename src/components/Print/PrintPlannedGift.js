import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
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
                {formValues.isGiftPlanned === "Yes" ? (
                    <>
                        {formValues.application.map((item, index) => {
                            return (
                                <>
                                    <Row
                                        style={{
                                            paddingBottom: "0",
                                            marginBottom: "0",
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

                <Row>
                    {!formValues.charitableRemainderAmount > 0 ? (
                        <></>
                    ) : (
                        <Col className="d-flex justify-content-center">
                            <div
                                className="firstChild"
                                style={{ display: "flex" }}
                            >
                                <div className="spacer">
                                    <Typography variant="p">
                                        Charitable Remainder Amount:
                                    </Typography>
                                </div>
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
                            <div
                                className="firstChild"
                                style={{ display: "flex" }}
                            >
                                <Typography variant="p">
                                    Annuity Payable:
                                </Typography>
                                <span className="normal">
                                    {formValues.annuityPayable}
                                </span>
                            </div>
                        </Col>
                    )}
                </Row>
                {!formValues.applicationAdditionalComments > 0 ? (
                    <></>
                ) : (
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
                )}
            </div>
        </div>
    ) : (
        <></>
    );
};
export default PrintPlannedGift;
