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
import PrintContactAndDonorInfo from "../components/Print/PrintContactAndDonorInfo";
import PrintTribute from "../components/Print/PrintTribute";
import PrintDesignations from "../components/Print/PrintDesignations";
import PrintTotals from "../components/Print/PrintTotals";
import {
    UrbanaAddress,
    ChicagoAddress,
    SpringfieldAddress,
} from "../components/HelperFunctions";

const TrustPrint = (props) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    // console.log(props.formValues.inMemoryNewAddress);

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
                                {`@media print {.headerPrint{display: block; padding-top:2em !important; .addr{display:flex; justify-content:flex-end !important}}}`}
                            </style>

                            <Row>
                                <Col>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + "/logo.svg"
                                        }
                                        alt="U of I Foundation Logo"
                                        className="logo"
                                    />
                                </Col>
                                <Col>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="flex-start"
                                    >
                                        {props.formValues.campusLocation ===
                                        "Urbana" ? (
                                            <UrbanaAddress required />
                                        ) : props.formValues.campusLocation ===
                                          "Chicago" ? (
                                            <ChicagoAddress />
                                        ) : props.formValues.campusLocation ===
                                          "Springfield" ? (
                                            <SpringfieldAddress />
                                        ) : null}
                                    </Grid>
                                </Col>
                            </Row>
                        </Row>
                        <Row className="resultItems ">
                            <Col>
                                <Typography variant="h4" component="h1">
                                    Donor cash transmittal
                                </Typography>
                            </Col>
                        </Row>
                        <Container>
                            <Row className="hideForPrint">
                                <Col className="d-flex justify-content-around">
                                    <button
                                        onClick={() => {
                                            navigate("/trust");
                                        }}
                                    >
                                        Back
                                    </button>
                                </Col>
                                <Col className="d-flex justify-content-around">
                                    <button onClick={handlePrint}>
                                        Print Document
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                        <div className="resultItems">
                            <PrintContactAndDonorInfo
                                formValues={props.formValues}
                            />
                        </div>
                        <PrintTribute formValues={props.formValues} />

                        <Row className="theDesignationResults">
                            <Col className="p-0">
                                <PrintDesignations
                                    formValues={props.formValues}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <PrintTotals formValues={props.formValues} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
};

export default TrustPrint;
