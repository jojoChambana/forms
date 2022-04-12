import { Container, Typography } from "@mui/material";
import { Row } from "react-bootstrap";

export default function InstructionsCash() {
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
                    The form, cash and all other supporting documentation,
                    should be hand-delivered to the Gift Processing and
                    Stewardship Office (GPSSO) noted below.
                </Typography>

                <Typography>
                    Forward any unsigned checks, address changes, deceased
                    notices, replies without checks, etc. to the GPSSO with a
                    memo explaining the nature of the change or problem. The
                    GPSSO will coordinate the appropriate changes in CRM.
                </Typography>
            </Container>
        </div>
    );
}
