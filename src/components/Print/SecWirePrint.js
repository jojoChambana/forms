import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useRef } from "react";
import PrintContactAndDonorInfo from "./PrintContactAndDonorInfo";
import PrintTribute from "./PrintTribute";
import PrintTotals from "./PrintTotals";
import { PrintCampusAddressSwap } from "../HelperFunctions";
import PrintSecurities from "./PrintSecurities";
import PrintSecWireDesignations from "./PrintSecWireDesignations";

const SecWirePrint = (props) => {
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
                        <PrintCampusAddressSwap
                            campusLocation={props.formValues.campusLocation}
                        />
                        <Container>
                            <Row className="hideForPrint">
                                <Col className="d-flex justify-content-around">
                                    <Button
                                        variant="contained"
                                        className="buttonClass"
                                        onClick={() => {
                                            navigate(props.returnUrl);
                                        }}
                                    >
                                        Back
                                    </Button>
                                </Col>
                                <Col className="d-flex justify-content-around">
                                    <Button
                                        variant="contained"
                                        onClick={handlePrint}
                                    >
                                        Print Document
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                        <div className="resultItems">
                            <PrintContactAndDonorInfo
                                formValues={props.formValues}
                            />
                        </div>
                        <PrintTribute formValues={props.formValues} />

                        <div className="theDesignationResults">
                            <Col className="p-0">
                                <div className="resultItems">
                                    <PrintSecWireDesignations
                                        formValues={props.formValues}
                                    />
                                </div>
                            </Col>
                        </div>
                        {props.printSecurities ? (
                            <Row className="theDesignationResults">
                                <Col className="p-0">
                                    <PrintSecurities
                                        formValues={props.formValues}
                                    />
                                </Col>
                            </Row>
                        ) : (
                            <></>
                        )}
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

export default SecWirePrint;
