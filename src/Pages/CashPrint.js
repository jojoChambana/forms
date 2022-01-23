import {
    Container,
    createTheme,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useRef } from "react";

const CashPrint = (props) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    console.log("these are the", props)

    const theme = createTheme({
        typography: {
            formCat: {
                fontWeight: "bold",
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <div ref={componentRef}>
                    <Container>
                        <Row className="headerPrint">
                            <style>
                                {`@media print {.headerPrint{display: block;}}`}
                            </style>
                            <Col>
                                <img
                                    src={process.env.PUBLIC_URL + "foundation-logo.png"}
                                    alt="Logo"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="h4" component="h1">
                                    Donor check transmittal
                                </Typography>
                            </Col>
                        </Row>

                        {/* {props.formValues.totalDonationAmount} */}

                        <Row>
                            <Col>
                                <Typography variant="h6" component="h2">
                                    Campus: <span className="normal">{props.formValues.campusLocation}</span>

                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="h6" component="h2">
                                    Contact: {props.formValues.contactFullName}
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Phone: <span className="normal">{props.formValues.contactPhone}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    Email: <span className="normal">{props.formValues.contactEmail}</span></Typography>
                            </Col>


                            {/* <Row>
                            <Col>
                                <Typography variant="formCat">
                                    TED Constituent ID: <span className="normal">{props.formValues.tedConstId}</span>
                                </Typography>
                            </Col>
                        </Row> */}

                            <Col>
                                <Typography variant="formCat">
                                    College name: <span className="normal">{props.formValues.collegeName}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Department name: <span className="normal">{props.formValues.departmentName}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    Prepared by: <span className="normal">{props.formValues.preparedBy}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    Date prepared: <span className="normal">{props.formValues.donationDate}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Typography variant="h5" component="h3">Donor Information</Typography>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Donor is Unknown, Anonymous or various cash donors: <span className="normal">{props.formValues.donorUnknown}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    New donor: <span className="normal">{props.formValues.newDonor}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            {/* <Typography variant="h6" component="h4">
                                Address
                            </Typography> */}
                            <Col>
                                <Typography variant="formCat">
                                    <Col>
                                        <Typography variant="formCat">
                                            TED Constituent ID: <span className="normal">{props.formValues.tedConstituentId}</span>
                                        </Typography>
                                    </Col>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    <Col>
                                        <Typography variant="formCat">
                                            Organization/Donor Name : <span className="normal">{props.formValues.organizationDonorName}</span>
                                        </Typography>
                                    </Col>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    New address: <span className="normal">{props.formValues.newAddress}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Foriegn address: <span className="normal">{props.formValues.foreignAddress}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span className="normal">{props.formValues.address}</span>
                                <br />
                                <span className="normal">{props.formValues.city}, <span className="normal">{props.formValues.state}</span></span>
                                <br />
                                <span className="normal">{props.formValues.zipCode}</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ThemeProvider >
            <Container>
                <Row>
                    <Col>
                        <button
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            Back
                        </button>
                    </Col>
                    <Col>
                        <button onClick={handlePrint}>Print this out!</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CashPrint;



{/* <Col>
<Typography variant="formCat">
    Date: {props.formValues.date.toISOString().substring(0, 10)} Date widget
</Typography>
</Col> */}