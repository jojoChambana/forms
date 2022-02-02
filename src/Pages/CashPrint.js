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
                        <Row xs={12} className="resultItems">
                            <Col>
                                <Typography
                                    variant="formCat"
                                    className="lineUp"
                                >
                                    Campus:
                                </Typography>
                            </Col>
                            <Col className="results">
                                <span className="normal">
                                    {props.formValues.campusLocation}
                                </span>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col>
                                <Typography variant="h5" component="h3">
                                    Contact Information
                                </Typography>
                            </Col>
                        </Row> */}

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
