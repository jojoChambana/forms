import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import PrintOneSecurity from "./PrintOneSecurity";

const PrintSecurities = ({ formValues }, key) => {
    var securityCount = 0;
    if (formValues.security !== undefined)
        securityCount = formValues.security.length; // used to determine if we should show Delete security buttons
    return securityCount > 0 ? (
        <div key={key}>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Securities Information
                    </Typography>
                </Col>
            </Row>
            <div
                className="printTable mt-3 pb-3"
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.125)",
                    borderRadius: "4px",
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Shares</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Symbol</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formValues.security.map((item, index) => {
                            return (
                                <>
                                    <PrintOneSecurity
                                        oneSecurity={item}
                                        index={index}
                                        // key={"oneDesig" + index}
                                    />
                                </>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    ) : null;
};
export default PrintSecurities;
