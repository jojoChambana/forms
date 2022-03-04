import { Typography } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import PrintOneSecWireDesignation from "./PrintOneSecWireDesignation";

const PrintSecWireDesignations = ({ formValues }) => {
    return (
        <>
            <Row>
                <Col>
                    <Typography
                        variant="h5"
                        component="h3"
                        className="mt-3 mb-3"
                    >
                        Designation Information
                    </Typography>
                </Col>
            </Row>
            <ListGroup>
                {formValues.designation.map((item, index) => {
                    return (
                        <>
                            <PrintOneSecWireDesignation
                                oneDesignation={item}
                                index={index}
                                key={"oneDesig" + index}
                            />
                        </>
                    );
                })}
            </ListGroup>
        </>
    );
};
export default PrintSecWireDesignations;
