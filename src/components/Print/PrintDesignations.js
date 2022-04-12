import { Typography } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import PrintOneDesignation from "./PrintOneDesignation";

const PrintDesignations = ({ formValues }) => {
    function OtherInformation() {
        if (formValues.otherInformation)
            return (
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
            );
        else return null;
    }

    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3">
                        Designation Information
                    </Typography>
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

            <OtherInformation />
        </>
    );
};
export default PrintDesignations;
