import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { Tab } from "bootstrap";
import { Col, ListGroupItem, Row } from "react-bootstrap";
import { formatAmount3 } from "../HelperFunctions";
const PrintOneSecWireSecurity = ({ oneSecurity, index }) => {
    return (
        <>
            {/* <div className="resultItems">
                <Row>
                    <Col>
                        <Row>
                            <Col style={{ textAlign: "end" }}>Shares: </Col>
                            <Col className="heavyFont">
                                {formatAmount3(oneSecurity.shares)}
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col style={{ textAlign: "end" }}>Name:</Col>
                            <Col className="heavyFont">{oneSecurity.name}</Col>
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
            </div> */}

            <TableRow key={"security" + index}>
                <TableCell>
                    {/* {formatAmount3(oneSecurity.shares)} */}
                    {oneSecurity.shares}
                </TableCell>
                <TableCell>{oneSecurity.name}</TableCell>
                <TableCell>{oneSecurity.symbol}</TableCell>
            </TableRow>
        </>
    );
};
export default PrintOneSecWireSecurity;
