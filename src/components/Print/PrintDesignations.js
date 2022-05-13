import { Typography } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import PrintOneDesignation from "./PrintOneDesignation";

const PrintDesignations = ({ formValues, trustMode = false }) => {
    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Typography variant="h5" component="h3">
                        Designation Information
                    </Typography>
                </Col>
            </Row>

            <Row className="mt-3">
                <ListGroup style={{ paddingLeft: "0.7em" }}>
                    {formValues.designation.map((item, index, key) => {
                        return (
                            <PrintOneDesignation
                                oneDesignation={item}
                                index={index}
                                key={"oneDesig" + key}
                                trustMode={trustMode}
                            />
                        );
                    })}
                </ListGroup>
            </Row>
            {formValues.otherInformation ? (
                <>
                    <Typography variant="h5" component="h3" className="mt-3">
                        Other Information
                    </Typography>
                    <Row className="border mt-3">
                        <Col style={{ position: "relative", left: "0.5em" }}>
                            <div className="d-print-table-cell col centerColContent">
                                <div className="d-print-table-row">
                                    <div className="rightLabel">Note: </div>
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
            ) : (
                <></>
            )}
        </>
    );
};
export default PrintDesignations;
