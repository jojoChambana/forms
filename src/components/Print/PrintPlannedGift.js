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
    var charitableRemainderAmount = 0;
    var annuityPayable = 0;
    if (formValues.application !== undefined)
        applicationCount = formValues.application.length; // used to determine if we should show Delete application buttons
    return applicationCount > 0 ? (
        <div key={key}>
            <Row className="mt-2">
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Planned Gift
                    </Typography>
                </Col>
            </Row>
            <div className="border">
                <Row className="mb-0">
                    <Col className="col-6 mb-0 pb-0">
                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                <Typography variant="p">
                                    Is this associated with <br />a Planned Gift
                                    Application?
                                </Typography>
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal d-flex align-items-center">
                                    {formValues.isGiftPlanned}
                                </span>
                            </div>
                        </div>
                    </Col>

                    {!formValues.charitableRemainderAmount > 0 ? (
                        <></>
                    ) : (
                        <Col className="col-6 mb-0">
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    <Typography variant="p">
                                        Charitable Remainder Amount:
                                    </Typography>
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal d-flex align-items-center">
                                        {formValues.charitableRemainderAmount}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    )}

                    {!formValues.annuityPayable > 0 ? (
                        <></>
                    ) : (
                        <Col className="col-6 mb-0">
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    <Typography variant="p">
                                        Charitable Remainder Amount:
                                    </Typography>
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal d-flex align-items-center">
                                        {formValues.annuityPayable}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    )}

                    <Col className="col-6 mb-0 pb-0">
                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                <Typography variant="p">
                                    Last/Organization Name
                                </Typography>
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal d-flex align-items-center">
                                    {formValues.dLastOrgName}
                                </span>
                            </div>
                        </div>
                    </Col>
                    {!formValues.applicationAdditionalComments > 0 ? (
                        <></>
                    ) : (
                        <Col
                            className="col-6  mb-0"
                            style={{ padding: "0 1em", display: "flex" }}
                        >
                            <div className="d-print-table-row">
                                <div className="rightLabel">Comment:</div>
                                <div
                                    className="d-print-table-cell"
                                    style={{ width: "maxContent" }}
                                >
                                    <span className="normal d-flex align-items-center">
                                        {
                                            formValues.applicationAdditionalComments
                                        }
                                    </span>
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>

                {formValues.isGiftPlanned === "Yes" ? (
                    <>
                        <Col className="col-6 mb-0 ">
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    <Typography variant="p">
                                        This is a:
                                    </Typography>
                                </div>
                                <div className="d-print-table-cell">
                                    <span className="normal d-flex align-items-center">
                                        {formValues.applicationType}
                                    </span>
                                </div>
                            </div>
                        </Col>

                        <Row>
                            <div className="printTable pb-3">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {formValues.application.map(
                                            (item, index) => {
                                                return (
                                                    <>
                                                        <PrintOneApplication
                                                            oneApplication={
                                                                item
                                                            }
                                                            index={index}
                                                            // key={"oneDesig" + index}
                                                        />
                                                    </>
                                                );
                                            }
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </Row>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    ) : (
        <></>
    );
};
export default PrintPlannedGift;
