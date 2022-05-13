import { Container, Link, Typography } from "@mui/material";
import { Row } from "react-bootstrap";
import Instructionslist from "./InstructionsList";
import EnvironmentSwitchLink from "./UI/EnvironmentSwitchLink";

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
                    <EnvironmentSwitchLink />. If you have any questions when
                    filling out your gift transmittal contact Gift
                    Administration at 217-333-0675
                </Typography>
            </Container>
        </div>
    );
}
