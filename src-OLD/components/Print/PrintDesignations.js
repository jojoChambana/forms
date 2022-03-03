import { Typography } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import PrintOneDesignation from "./PrintOneDesignation";

const PrintDesignations = ({ formValues }) => {
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
                                <PrintOneDesignation
                                    oneDesignation={item}
                                    index={index}
                                    key={"oneDesig" + key}
                                />
                            );
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
};
export default PrintDesignations;
