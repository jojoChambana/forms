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
import { PrintCampusAddressSwapNoHeaderAddress } from "../HelperFunctions";

import PrintSecurities from "./PrintSecurities";
import PrintDesignations from "./PrintDesignations";
import PrintUIFonlyContactInformation from "./PrintUIFonlyContactInformation";
import PrintDonorInformation from "./PrintDonorInformation";

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
                        <div id="timestamp"></div>
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
                        <PrintUIFonlyContactInformation
                            formValues={props.formValues}
                        />

                        <PrintDonorInformation formValues={props.formValues} />
                        <PrintTotals formValues={props.formValues} />
                        <PrintTribute formValues={props.formValues} />

                        {props.printSecurities ? (
                            <>
                                <PrintSecurities
                                    formValues={props.formValues}
                                />
                            </>
                        ) : (
                            <></>
                        )}

                        <PrintDesignations formValues={props.formValues} />
                        {props.formValues.generalComments ? (
                            <>
                                <Row>
                                    <Col>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            className="mt-2 mr-0 mb-3 ml-0"
                                        >
                                            General Comments
                                        </Typography>

                                        <Col
                                            className="border"
                                            style={{ padding: "1em" }}
                                        >
                                            {props.formValues.generalComments}
                                        </Col>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <></>
                        )}
                        <PrintTotals formValues={props.formValues} />
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
