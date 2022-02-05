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
import PrintForeign from "../components/PrintForeign";
import AddressPrint from "../components/AddressPrint";

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
}

const CashPrint = (props) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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
                                        src={
                                            process.env.PUBLIC_URL +
                                            "foundation-logo.png"
                                        }
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
                                        <Typography
                                            variant="subtitle2"
                                            component="div"
                                        >
                                            Univesity of Illinois Foundation
                                            <br />
                                            Harker Hall, 1305 West Green Street
                                            <br />
                                            Urbana, IL 61801
                                            <br />
                                            217.244.2706
                                            <br />
                                            cashdesk@uif.uillinois.edu
                                        </Typography>
                                    </Grid>
                                </Col>
                            </Row>
                        </Row>
                        <Row className="resultItems">
                            <Col>
                                <Typography variant="h4" component="h1">
                                    Donor cash transmittal
                                </Typography>
                            </Col>
                        </Row>

                        <Row className="resultItems">
                            <Col md={6}>
                                <Row>
                                    <Col className="rightLabel">Campus: </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.campusLocation}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Contact full name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.contactFullName}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">Phone:</Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.contactPhone}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">
                                        {" "}
                                        Contact email:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.contactEmail}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">
                                        College name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.collegeName}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">
                                        Contact department name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.departmentName}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Donation date:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.donationDate}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Prepared by:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.preparedBy}
                                        </span>
                                    </Col>
                                </Row>
                                {/* <Row>
                                    <Col className="rightLabel">
                                        Donor Unknown Checkbox:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.donorUnknown}
                                        </span>
                                    </Col>
                                </Row> */}

                                {props.formValues.unitReferenceNumber ? (
                                    <Row>
                                        <Col className="rightLabel">
                                            Unit reference number:
                                        </Col>
                                        <Col>
                                            <span className="normal">
                                                {
                                                    props.formValues
                                                        .unitReferenceNumber
                                                }
                                            </span>
                                        </Col>
                                    </Row>
                                ) : null}
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col className="rightLabel">
                                        TED constituent ID:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.tedConstituentId}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Organization/Donor name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {
                                                props.formValues
                                                    .organizationDonorName
                                            }
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">Address:</Col>
                                    <Col>
                                        <span className="normal">
                                            {
                                                props.formValues
                                                    .donorDomesticAddress
                                            }
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">City:</Col>
                                    <Col>
                                        <span className="normal">
                                            {
                                                props.formValues
                                                    .donorDomesticAddressCity
                                            }
                                        </span>

                                        {/* <span className="normal">
                                            ,&nbsp;
                                            {
                                                props.formValues
                                                    .donorDomesticAddressZipCode
                                            }
                                        </span> */}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">Zip:</Col>
                                    <Col>
                                        <span className="normal">
                                            {
                                                props.formValues
                                                    .donorDomesticAddressZipCode
                                            }
                                        </span>

                                        {/* <span className="normal">
                                            ,&nbsp;
                                            {
                                                props.formValues
                                                    .donorDomesticAddressZipCode
                                            }
                                        </span> */}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* <Row>
                            <Col>
                                <Typography variant="h6" component="h3">
                                    Donor Information
                                </Typography>
                            </Col>
                        </Row> */}
                    </Container>
                </div>
            </ThemeProvider>
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
