import {
    Container,
    createTheme,
    Grid,
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
                                {`@media print {.headerPrint{display: block; .addr{display:flex; justify-content:flex-end !important}}}`}
                            </style>

                            <Row>
                                <Col>
                                    <img
                                        src={process.env.PUBLIC_URL + "foundation-logo.png"}
                                        alt="Logo"
                                    />
                                </Col>
                                <Col>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="flex-start"
                                    >
                                        <Typography variant="subtitle2" component="div">
                                            Univesity of Illinois Foundation<br />
                                            Harker Hall, 1305 West Green Street<br />
                                            Urbana, IL 61801<br />
                                            217.244.2706<br />
                                            cashdesk@uif.uillinois.edu
                                        </Typography>
                                    </Grid>
                                </Col>
                            </Row>
                        </Row>
                        <Row className="resultItems">
                            <Col>
                                <Typography variant="h5" component="h1">
                                    Donor check transmittal
                                </Typography>
                            </Col>
                        </Row>

                        {/* {props.formValues.totalDonationAmount} */}
                        <Row>
                            <Col xs={12} md={6}>
                                <Row xs={12} className="resultItems">
                                    <Col>
                                        <Typography variant="h6" component="h2" className="lineUp">
                                            Campus:
                                        </Typography>
                                    </Col>
                                    <Col className="results">
                                        <span className="normal">{props.formValues.campusLocation}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col>
                                        <Typography variant="h6" component="h2" className="lineUp">
                                            Contact:
                                        </Typography>
                                    </Col>
                                    <Col className="results">
                                        <span className="normal">{props.formValues.contactFullName}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Address:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.address}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            City:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.city}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            State:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.state}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            State/Province/Region:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.provinceRegion}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Country:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.country}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Zip:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.zipCode}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Postal code:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.postalCode}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Phone:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.contactPhone}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Email: </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.contactEmail}</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            College name: </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.collegeName}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Department name:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.departmentName}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Date:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.donationDate}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Prepared by:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.preparedBy}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Unit reference number:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.unitReferenceNumber}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Donor unknown:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.donorUnknown}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            New donor:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.newDonor}</span>
                                    </Col>
                                </Row>

                            </Col>
                            <Col xs={12} md={6}>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            New address:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.newAddress}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            TED Constituent ID:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.tedConstituentId}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Organization donor name:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.organizationDonorName}</span>
                                    </Col>
                                </Row>
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
                                navigate("/cash");
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



