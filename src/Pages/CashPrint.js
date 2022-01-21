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
        <div ref={componentRef}>
            <ThemeProvider theme={theme}>
                <Container>
                    <Row>
                        <Col>
                            <Typography variant="h2" component="h1">
                                Check Transmittal Form
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Typography variant="h3" component="h2">
                                Campus: {props.formValues.campusLocation}
                                {/* {props.formValues.totalDonationAmount} */}
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Typography variant="h3" component="h2">
                                Contact: {props.contactFullName}
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Typography variant="formCat">
                                Phone: <span className="normal">{props.phone}</span>
                            </Typography>
                        </Col>
                        <Col>
                            <Typography>Email: {props.email}</Typography>
                        </Col>
                        <Col>
                            <Typography>
                                {/* Date: {props.formValues.date.toISOString().substring(0, 10)} */} Date widget
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Typography>
                                TED Constituent ID: {props.tedConstId}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
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
            </ThemeProvider>
        </div>
    );
};

export default CashPrint;
