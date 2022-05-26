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
                <Row className="mb-0">
                    <Col className="col-6 mb-0 pb-0">
                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                <Typography variant="p">
                                    Is this associated with
                                    <br /> a Planned Gift Application?
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
                                <div style={{ width: "maxContent" }}>
                                    <span className="normal d-flex">
                                        {formValues.charitableRemainderAmount}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    )}

                    {!formValues.applicationAdditionalComments > 0 ? (
                        <></>
                    ) : (
                        <Col className="col-6 mb-0">
                            <div className="d-print-table-row">
                                <div className="rightLabel">
                                    <Typography variant="p">
                                        Comments:
                                    </Typography>
                                </div>
                                <div style={{ width: "maxContent" }}>
                                    <span
                                        className="normal d-flex"
                                        style={{ wordBreak: "break-word" }}
                                    >
                                        {
                                            formValues.applicationAdditionalComments
                                        }
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
                                        Annuity Payable:
                                    </Typography>
                                </div>
                                <div style={{ width: "maxContent" }}>
                                    <span className="normal d-flex">
                                        {formValues.annuityPayable}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>

                {formValues.isGiftPlanned === "Yes" ? (
                    <>
                        {formValues.application.map((item, index) => {
                            return (
                                <>
                                    <Row>
                                        <div className="col pb-3">
                                            <Table className="pGiftTable">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            style={{
                                                                width: "20%",
                                                            }}
                                                        >
                                                            Date
                                                        </TableCell>
                                                        <TableCell>
                                                            Type
                                                        </TableCell>
                                                        <TableCell>
                                                            Amount
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    <PrintOneApplication
                                                        oneApplication={item}
                                                        index={index}
                                                        // key={"oneDesig" + index}
                                                    />
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </Row>
                                </>
                            );
                        })}
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
