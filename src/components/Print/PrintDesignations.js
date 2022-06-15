import { Typography } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import PrintOneDesignation from "./PrintOneDesignation";

const PrintDesignations = ({ formValues, trustMode = false }) => {
    return (
        <>
            <div className="theDesignationResults">
                <Col className="p-0">
                    <div className="resultItems">
                        <Row className="mt-3">
                            <Col>
                                <Typography variant="h5" component="h3">
                                    Designation Information
                                </Typography>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <ListGroup style={{ paddingLeft: "0.7em" }}>
                                {formValues.designation.map(
                                    (item, index, key) => {
                                        return (
                                            <PrintOneDesignation
                                                oneDesignation={item}
                                                index={index}
                                                key={"oneDesig" + key}
                                                trustMode={trustMode}
                                            />
                                        );
                                    }
                                )}
                            </ListGroup>
                        </Row>

                        {formValues.isGiftPlanned ? <></> : <></>}
                    </div>
                </Col>
            </div>
        </>
    );
};
export default PrintDesignations;
