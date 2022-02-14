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

const CashPrint = (props) => {
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

    function UrbanaAddress(props) {
        return (
            <Typography variant="subtitle2" component="div">
                University of Illinois at Urbana-Champaign
                <br />
                Cash Receipts
                <br />
                Harker Hall - M/C 386
                <br />
                Urbana, IL 61801
            </Typography>
        );
    }

    function ChicagoAddress(props) {
        return (
            <Typography variant="subtitle2" component="div">
                University of Illinois at Chicago - OVCA
                <br />
                SCE 750 S Halsted St. Rm. 550, M/C 100
                <br />
                Chicago, IL 60607
            </Typography>
        );
    }

    function SpringfieldAddress(props) {
        return (
            <Typography variant="subtitle2" component="div">
                University of Illinois at Springfield
                <br />
                Business and Stewardship
                <br />
                One University Plaza - PAC591
                <br />
                Springfield, IL 62703
            </Typography>
        );
    }

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
                                        {props.formValues.campusLocation ===
                                        "Urbana" ? (
                                            <UrbanaAddress />
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
                                            navigate("/cash");
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
                        <Row className="resultItems">
                            <Col>
                                <PrintTribute formValues={props.formValues} />
                            </Col>
                            <Col></Col>
                        </Row>
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

export default CashPrint;
