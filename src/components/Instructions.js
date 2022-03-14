import { Container, Typography } from "@mui/material";
import React from "react";
import { Row } from "react-bootstrap";

export default function Instructions() {
    return (
        <div>
            <Container>
                <Row>
                    <Typography variant="h5" component="h2">
                        Instructions
                    </Typography>
                </Row>
                <Typography variant="body1" gutterBottom>
                    Gifts are to be submitted promptly once received by your
                    department.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    The form should be mailed or hand-delivered (cash) to the
                    Gift Processing and Stewardship Office (GPSSO). Forward any
                    unsigned checks, address changes, deceased notices, replies
                    without checks, etc. to the GPSSO with a memo explaining the
                    nature of the change or problem. The GPSSO will coordinate
                    the appropriate changes in CRM.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    If you have any questions when filling out your gift
                    transmittal contact Gift Administration at 217-333-0675
                </Typography>
                <Typography>
                    Required fields are marked with an asterisk (*).
                </Typography>
            </Container>
        </div>
    );
}
