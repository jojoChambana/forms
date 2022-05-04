import { Helmet } from "react-helmet";
import { Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import Instructionslist from "../components/InstructionsList";
export default function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Cash Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>

            <Container>
                <Row>
                    <Typography variant="h4" component="h1">
                        Gift Transmittal Forms
                    </Typography>
                </Row>
                <section>
                    <Row className="mb-0">
                        <Typography variant="p">
                            Gifts/non-gifts are to be submitted promptly once
                            received in your department. The form should be
                            mailed or hand-delivered (cash) to the address noted
                            on the form. Forward any unsigned checks, address
                            changes, deceased notices, or replies without
                            checks, etc. to the GPSSO with a memo explaining the
                            nature of the change or problem. The GPSSO will
                            coordinate the appropriate changes in CRM.
                        </Typography>
                    </Row>
                    <br />
                    <Row>
                        <Typography variant="p">
                            If you have any questions when filling out your gift
                            transmittal please contact Gift Administration at
                            217-333-0675.
                        </Typography>
                    </Row>
                </section>

                <section>
                    <Row className="mt-3">
                        <Col>
                            <Typography variant="h5" component="h3">
                                Cash, Check, Gift in Kind
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Instructionslist />
                        <Row className="mb-0">
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        <Link href="/cash">
                                            Cash Transmittal
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <Link href="/check">
                                            Check Transmittal
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <Link href="/giftinKind">
                                            Gift in Kind Transmittal
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <Link
                                            href="https://d1vy0qa05cdjr5.cloudfront.net/e75b2f22-8ebc-4f95-ad4a-f08ed296445e/Resources/How to Submit Gifts Using the Gift Transmittal Form.pdf"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            Transmittal Instructions
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Row>
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col>
                            <Typography variant="h5" component="h3">
                                Credit Card
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <div className="indent-list">
                            <List
                                sx={{
                                    listStylePosition: "outside",
                                }}
                                className="pt-0"
                            >
                                <ListItem
                                    sx={{
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >
                                    <ListItemText
                                        primary="Encourage donors to enter their own
                                        credit card gift transactions or
                                        recurring credit card commitments
                                        through your departmental or university
                                        online giving site"
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >
                                    <ListItemText
                                        primary="Process all credit card gift
                                        transactions or recurring credit card
                                        commitments through your departmental or
                                        university online giving site"
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >
                                    <ListItemText
                                        primary="The credit card transmittal form is only
                                        to be used for a transaction that has a
                                        portion or is all non-gift/non-tax
                                        deductible"
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >
                                    <ListItemText
                                        primary=" One donor and one fund/designation per
                                        transmittal"
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >
                                    <ListItemText
                                        primary="Please note: for security purposes,
                                        credit card information cannot be
                                        accepted via email or fax"
                                    />
                                </ListItem>
                            </List>
                        </div>

                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Link
                                        href="https://portal.uif.uillinois.edu/creditcardtransmittal"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Credit Card Transmittal
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link
                                        href="https://online.uif.uillinois.edu/system/files/2019-05/CreditCardTransmittalInstructions.pdf"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Credit Card Transmittal Instructions
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col>
                            <Typography variant="h5" component="h3">
                                Securities and Wire (UIF Only)
                            </Typography>
                        </Col>
                    </Row>

                    <Row>
                        <div className="indent-list">
                            <List
                                sx={{
                                    listStylePosition: "outside",
                                }}
                                className="pt-0"
                            >
                                <ListItem
                                    sx={{
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >
                                    <ListItemText
                                        primary="All security and wire transmittals are
                                    processed internally at UIF. If you have
                                    questions about security or wire gift types
                                    please contact the Director of Cash Receipts
                                    at 217-244-0352."
                                    />
                                </ListItem>
                            </List>
                        </div>
                    </Row>
                    <Row>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Link href="/securities">
                                        Securities Transmittal
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <Link href="/wire">Wire Transmittal</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Row>
                </section>
            </Container>
        </>
    );
}
