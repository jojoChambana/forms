import {
    Button,
    Container,
    createTheme,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useRef } from "react";
import PrintTribute from "./PrintTribute";
import PrintTotals from "./PrintTotals";
import {
    PrintCampusAddressSwap,
    PrintCampusAddressSwapNoHeaderAddress,
} from "../HelperFunctions";

import PrintSecurities from "./PrintSecurities";
import PrintSecWireDesignations from "./PrintSecWireDesignations";
import PrintContactAndDonorInfoNoCampus from "./PrintContactAndDonorInfoNoCampus";

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
                        <PrintCampusAddressSwapNoHeaderAddress
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
                            <PrintContactAndDonorInfoNoCampus
                                formValues={props.formValues}
                            />
                        </div>
                        <Row className="mt-2 mb-1">
                            <Col>
                                <PrintTotals formValues={props.formValues} />
                            </Col>
                        </Row>

                        <PrintTribute formValues={props.formValues} />

                        {props.printSecurities ? (
                            <>
                                <Row className="theDesignationResults">
                                    <Col>
                                        <PrintSecurities
                                            formValues={props.formValues}
                                        />
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <></>
                        )}
                        <div className="theDesignationResults mt-0">
                            <Col className="p-0">
                                <div className="resultItems">
                                    <PrintSecWireDesignations
                                        formValues={props.formValues}
                                    />
                                </div>
                            </Col>
                        </div>

                        {props.formValues.generalComments ? (
                            <>
                                <Row>
                                    <Col>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            className="mt-2 mr-0 mb-2 ml-0"
                                        >
                                            General Comments
                                        </Typography>

                                        <Col
                                            style={{
                                                border: "1px solid rgba(0, 0, 0, 0.125)",
                                                borderRadius: "4px",
                                                padding: "2em",
                                                marginTop: "1em",
                                            }}
                                        >
                                            {props.formValues.generalComments}
                                        </Col>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <></>
                        )}

                        <Row>
                            <Col>
                                <PrintTotals formValues={props.formValues} />
                            </Col>
                        </Row>
                        <Container>
                            <Row className="hiddenForPrint">
                                <Col className="d-flex col justify-content-center">
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
                                <Col className="d-flex col justify-content-center">
                                    <Button
                                        variant="contained"
                                        onClick={handlePrint}
                                    >
                                        Print Document
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
};

export default SecWirePrint;
