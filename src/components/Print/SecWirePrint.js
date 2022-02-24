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
import PrintContactAndDonorInfo from "../Print/PrintContactAndDonorInfo";
import PrintSecWireDesignations from "../Print/PrintSecWireDesignations";
import PrintSecurities from "../Print/PrintSecurities";
import PrintTotals from "../Print/PrintTotals";
import {
    UrbanaAddress,
    ChicagoAddress,
    SpringfieldAddress,
} from "../HelperFunctions";

const SecWirePrint = ({ formValues, printSecurities, returnUrl, title }) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    // console.log(formValues.inMemoryNewAddress);

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
                                            process.env.PUBLIC_URL + "logo.svg"
                                        }
                                        alt="U of I Foundation Logo"
                                        className="logo"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center">
                                    <Typography variant="h4" component="h1">
                                        {title} transmittal
                                    </Typography>
                                </Col>
                                <Col>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="flex-start"
                                    >
                                        {formValues.campusLocation ===
                                        "Urbana" ? (
                                            <UrbanaAddress />
                                        ) : formValues.campusLocation ===
                                          "Chicago" ? (
                                            <ChicagoAddress />
                                        ) : formValues.campusLocation ===
                                          "Springfield" ? (
                                            <SpringfieldAddress />
                                        ) : null}
                                    </Grid>
                                </Col>
                            </Row>
                        </Row>
                        {/* <Row className="resultItems ">
                            <Col>
                                
                            </Col>
                        </Row> */}
                        <Container>
                            <Row className="hideForPrint">
                                <Col className="d-flex justify-content-around">
                                    <button
                                        onClick={() => {
                                            navigate(returnUrl);
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
                            <PrintContactAndDonorInfo formValues={formValues} />
                        </div>

                        <Row className="theDesignationResults">
                            <Col className="p-0">
                                <PrintSecWireDesignations
                                    formValues={formValues}
                                />
                            </Col>
                        </Row>
                        {printSecurities ? (
                            <Row className="theDesignationResults">
                                <Col className="p-0">
                                    <PrintSecurities formValues={formValues} />
                                </Col>
                            </Row>
                        ) : (
                            <></>
                        )}
                        <Row>
                            <Col>
                                <PrintTotals formValues={formValues} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
};

export default SecWirePrint;
