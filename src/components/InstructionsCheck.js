import { Container, Link, Typography } from "@mui/material";
import { Row } from "react-bootstrap";
import InstructionsList from "./InstructionsList";

export default function InstructionsCheck() {
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
                    The form, check and all other supporting documentation,
                    should be mailed to the lockbox of the University of
                    Illinois Foundation.
                </Typography>

                <Typography>
                    Forward any unsigned checks, address changes, deceased
                    notices, replies without checks, etc, separately, to the
                    GPSSO with a memo explaining the nature of the change or
                    problem. The GPSSO will coordinate the appropriate changes
                    in CRM.
                </Typography>

                <Typography>
                    Instructions on how to complete this form are{" "}
                    <Link
                        href="https://app.sharebase.com/#/document/14467/share/375-LTTbeCrSrwC8PDZjyD7--ynG1A6E"
                        underline="always"
                        rel="noreferrer"
                        target="_blank"
                    >
                        here
                    </Link>
                    . If you have any questions when filling out your gift
                    transmittal contact Gift Administration at 217-333-0675.
                </Typography>

                <InstructionsList />
            </Container>
        </div>
    );
}
