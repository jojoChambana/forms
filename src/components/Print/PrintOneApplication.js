import { TableCell, TableRow, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PrintOneApplication = ({ oneApplication, index }) => {
    return (
        <>
            <TableRow key={"application" + index}>
                <TableCell>{oneApplication.applicationDate}</TableCell>
                <TableCell>{oneApplication.planGiftType}</TableCell>
                <TableCell>{oneApplication.planGiftAmount}</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography variant="p">This is a:</Typography>{" "}
                    <span className="normal">
                        {oneApplication.applicationType}
                    </span>
                </TableCell>
                <TableCell>
                    <div className="d-flex">
                        <Typography variant="p">
                            Is Donor different than Donor above?
                        </Typography>{" "}
                        <span className="normal">
                            {oneApplication.isApplicationDonorDifferent}
                        </span>
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <div className="d-flex">
                        <Typography variant="p">Application Date:</Typography>
                        <span className="normal d-flex align-items-center">
                            {oneApplication.applicationDate}
                        </span>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="d-flex">
                        <Typography variant="p">Plan Gift Type:</Typography>
                        <span className="normal d-flex align-items-center">
                            {oneApplication.planGiftType}
                        </span>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="d-flex">
                        <Typography variant="p">Amount:</Typography>
                        <span className="normal d-flex align-items-center">
                            {oneApplication.planGiftAmount}
                        </span>
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <div className="d-flex">
                        <Typography variant="p">Middle Name:</Typography>
                        <span className="normal d-flex align-items-center">
                            {oneApplication.dMiddleName}
                        </span>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="d-flex">
                        <Typography variant="p">Middle Name:</Typography>
                        <span className="normal d-flex align-items-center">
                            {oneApplication.dMiddleName}
                        </span>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="d-flex">
                        <Typography variant="p">Middle Name:</Typography>
                        <span className="normal d-flex align-items-center">
                            {oneApplication.dMiddleName}
                        </span>
                    </div>
                </TableCell>
            </TableRow>
            {/* <Row className="d-flex mt-2">
                <div className="d-print-table-row">
                    <div className="rightLabel">
                        <Typography variant="p">This is a:</Typography>
                    </div>
                    <div className="">
                        <span className="normal overFlowNoBreakWord d-flex">
                            {oneApplication.applicationType}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">
                        <Typography variant="p">
                            Is Donor different than Donor above?
                        </Typography>
                    </div>
                    <div className="d-print-table-cell">
                        <span className="normal d-flex align-items-center">
                            {oneApplication.isApplicationDonorDifferent}
                        </span>
                    </div>
                </div>
                <div className="d-print-table-row">
                    <div className="rightLabel">
                        <Typography variant="p">
                            Last/Organization Name:
                        </Typography>
                    </div>
                    <div className="d-print-table-cell">
                        <span className="normal d-flex align-items-center">
                            {oneApplication.dLastOrgName}
                        </span>
                    </div>
                </div>

                <div className="d-print-table-row">
                    <div className="rightLabel">
                        <Typography variant="p">First Name:</Typography>
                    </div>
                    <div className="d-print-table-cell">
                        <span className="normal d-flex align-items-center">
                            {oneApplication.dFirstName}
                        </span>
                    </div>
                </div>

                <div className="d-print-table-row">
                    <div className="rightLabel">
                        <Typography variant="p">Middle Name:</Typography>
                    </div>
                    <div className="d-print-table-cell">
                        <span className="normal d-flex align-items-center">
                            {oneApplication.dMiddleName}
                        </span>
                    </div>
                </div>
            </Row> */}

            {/* <Row>
                <Col className="col-4 mb-0 pb-0">
                    <div className="d-flex">
                        <div className="col">
                            <Typography variant="p">
                                Last/Organization Name:
                            </Typography>
                        </div>
                        <div className="col">
                            <span className="normal d-flex align-items-center">
                                {oneApplication.dLastOrgName}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col className="col-4 mb-0 pb-0">
                    <div className="d-flex">
                        <div className="col">
                            <Typography variant="p">First Name:</Typography>
                        </div>
                        <div className="col">{oneApplication.dFirstName}</div>
                    </div>
                </Col>
                {oneApplication.dMiddleName !== 0 ? (
                    <Col className="col-4 mb-0 pb-0">
                        <div className="d-flex">
                            <div className="col">
                                <Typography variant="p">
                                    Middle Name:
                                </Typography>
                            </div>
                            <div className="col">
                                {oneApplication.dMiddleName}
                            </div>
                        </div>
                    </Col>
                ) : (
                    <></>
                )}
            </Row> */}
        </>
    );
};
export default PrintOneApplication;
