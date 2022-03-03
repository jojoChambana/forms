import { Typography } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import PrintOneSecurity from "./PrintOneSecurity";

const PrintSecurities = ({ formValues }) => {
    return (
        <>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Securities Information
                    </Typography>
                </Col>
            </Row>
            <ListGroup>
                {formValues.security.map((item, index) => {
                    return (
                        <>
                            <PrintOneSecurity
                                oneSecurity={item}
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
export default PrintSecurities;
