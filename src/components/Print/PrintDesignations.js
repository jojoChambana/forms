import { Typography } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import PrintOneDesignation from "./PrintOneDesignation";

const PrintDesignations = ({ formValues }) => {
    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Designation Information
                    </Typography>
                </Col>
            </Row>

            <Row>
                <Col style={{ position: "relative", left: "0.5em" }}>
                    <div className="d-print-table-cell col centerColContent mt-2">
                        <div className="d-print-table-row">
                            <div className="rightLabel">Trust Type: </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.trustType}
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <ListGroup>
                        {formValues.designation.map((item, index, key) => {
                            return (
                                <>
                                    <PrintOneDesignation
                                        oneDesignation={item}
                                        index={index}
                                        key={"oneDesig" + key}
                                    />
                                </>
                            );
                        })}
                    </ListGroup>
                </Col>
            </Row>

            <Row>
                <Col style={{ position: "relative", left: "0.5em" }}>
                    <div className="d-print-table-cell col centerColContent mt-2">
                        <div className="d-print-table-row">
                            <div className="rightLabel">8283 Required? : </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.is8283Required}
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col style={{ position: "relative", left: "0.5em" }}>
                    <div className="d-print-table-cell col centerColContent mt-2">
                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                Other Information:{" "}
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formValues.otherInformation}
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default PrintDesignations;
