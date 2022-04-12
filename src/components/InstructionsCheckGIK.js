import { Container, Link, Typography } from "@mui/material";
import { Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from "@mui/material";
import Instructionslist from "./InstructionsList";

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
                    Forward any unsigned checks, address changes, deceased
                    notices, replies without checks, etc. to the GPSSO with a
                    memo explaining the nature of the change or problem. The
                    GPSSO will coordinate the appropriate changes in CRM.
                </Typography>
                <Instructionslist />
                <Typography variant="body1" gutterBottom>
                    Additional instructions on how to complete this form are{" "}
                    <Link
                        href="https://d1vy0qa05cdjr5.cloudfront.net/e75b2f22-8ebc-4f95-ad4a-f08ed296445e/Resources/How to Submit Gifts Using the Gift Transmittal Form.pdf"
                        target="_blank"
                        rel="noopener"
                    >
                        here
                    </Link>
                    . If you have any questions when filling out your gift
                    transmittal contact Gift Administration at 217-333-0675
                </Typography>
            </Container>
        </div>
    );
}
