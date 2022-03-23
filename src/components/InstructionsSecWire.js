import { Container, Typography } from "@mui/material";
import { Row } from "react-bootstrap";
export default function InstructionsSecWire() {
    return (
        <div>
            <Container>
                <Row>
                    <Typography variant="h5" component="h2">
                        Instructions
                    </Typography>
                </Row>
                <Typography variant="body1" gutterBottom>
                    Gifts/non-gifts are to be submitted promptly once received
                    in your department. The form should be mailed or
                    hand-delivered (cash) to the address noted on the form.
                    Forward any unsigned checks, address changes, deceased
                    notices, or replies without checks, etc. to the GPSSO with a
                    memo explaining the nature of the change or problem. The
                    GPSSO will coordinate the appropriate changes in CRM.
                </Typography>
            </Container>
        </div>
    );
}
