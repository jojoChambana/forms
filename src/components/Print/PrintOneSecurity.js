import { Col, ListGroupItem, Row } from "react-bootstrap";
import { formatAmount3 } from "../HelperFunctions";
const PrintOneSecWireSecurity = ({ oneSecurity, index }) => {
    return (
        <>
            <ListGroupItem
                className="aDesignation mb-2"
                key={"security" + index}
            >
                <div className="resultItems row">
                    <Row>
                        <Col>
                            <Row>
                                <Col style={{ textAlign: "end" }}>Shares: </Col>
                                <Col className="heavyFont">
                                    {formatAmount3(oneSecurity.shares)}

                                    {/* {oneSecurity.shares} */}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col style={{ textAlign: "end" }}>Name:</Col>
                                <Col className="heavyFont">
                                    {oneSecurity.name}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col style={{ textAlign: "end" }}>Symbol:</Col>
                                <Col className="heavyFont">
                                    {oneSecurity.symbol}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </ListGroupItem>
        </>
    );
};
export default PrintOneSecWireSecurity;
