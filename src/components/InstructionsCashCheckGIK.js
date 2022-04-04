import { Container, Typography } from "@mui/material";
import { Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from "@mui/material";

export default function InstructionsCashCheckGIK() {
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

                <Typography variant="body1" gutterBottom>
                    Forward any unsigned checks, address changes, deceased
                    notices, replies without checks, etc. to the GPSSO with a
                    memo explaining the nature of the change or problem. The
                    GPSSO will coordinate the appropriate changes in CRM.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Instructions on how to complete this form are here. If you
                    have any questions when filling out your gift transmittal
                    contact Gift Administration at 217-333-0675
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Required fields are marked with an *.
                </Typography>
            </Container>
        </div>
    );
}
