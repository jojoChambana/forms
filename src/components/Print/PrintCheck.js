import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import PrintOneCheck from "./PrintOneCheck";

// export default function PrintCheck({ formValues }) {
//     return (
//         <>
//             {
//                 <>
//                     <Row>
//                         <Col>
//                             <Typography
//                                 variant="h5"
//                                 component="h3"
//                                 className="mt-2"
//                             >
//                                 Check Information
//                             </Typography>
//                         </Col>
//                     </Row>
//                     <div className="printTable mt-3">
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>Check Numbers</TableCell>
//                                     <TableCell>Check Total</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {formValues.trustCheck.map((item, index) => {
//                                     return (
//                                         <>
//                                             <PrintOneCheck
//                                                 oneCheck={item}
//                                                 index={index}
//                                                 key={"oneCheck" + index}
//                                             />
//                                         </>
//                                     );
//                                 })}
//                             </TableBody>
//                         </Table>
//                     </div>
//                 </>
//             }
//         </>
//     );
// }

const PrintCheck = ({ formValues }, key) => {
    var checkCount = 0;
    if (formValues.trustCheck.length !== undefined)
        checkCount = formValues.trustCheck.length; // used to determine if we should show Delete security buttons
    return checkCount > 0 ? (
        <div key={key}>
            <Row>
                <Col>
                    <Typography variant="h5" component="h3" className="mt-2">
                        Check Information
                    </Typography>
                </Col>
            </Row>
            <div className="printTable mt-3 pb-3 border">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Check Numbers</TableCell>
                            <TableCell>Check Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formValues.trustCheck.map((item, index) => {
                            return (
                                <>
                                    <PrintOneCheck
                                        oneCheck={item}
                                        index={index}
                                        key={"oneCheck" + index}
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

export default PrintCheck;
