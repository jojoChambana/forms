import {
    Button,
    Grid,
    Container,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useRef } from "react";
import PrintUIFonlyContactInformation from "./PrintUIFonlyContactInformation";
import PrintDonorInformation from "./PrintDonorInformation";
import PrintTribute from "./PrintTribute";
import PrintDesignations from "./PrintDesignations";
import PrintTotals from "./PrintTotals";
import { PrintCampusAddressSwap, CampusAddress } from "../HelperFunctions";
import PrintSpousalPartner from "./PrintSpousalPartner";
import PrintSecurities from "./PrintSecurities";

import PrintGiftInformation from "./PrintGiftInformation";
import { PrintEightyTwoEightyThree } from "./PrintEightyTwoEightyThree";
import PrintGIKs from "./PrintGIKs";
import PrintCheck from "./PrintCheck";

// import TrustIRADistribution from "../TrustIRADistribution";

const TrustPrint = (props) => {
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
                        <PrintCampusAddressSwap
                            campusLocation={props.formValues.campusLocation}
                            formType={props.formType}
                        />
                        <Container>
                            <Row className="hideForPrint">
                                <>
                                    <Col>
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
                                    <div className="d-flex col justify-content-center">
                                        <Button
                                            variant="contained"
                                            onClick={handlePrint}
                                        >
                                            Print Document
                                        </Button>
                                    </div>
                                </>

                                <Col>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="end"
                                    >
                                        <Row className="hideForPrint mb-0">
                                            <CampusAddress
                                                campusLocation={
                                                    props.formValues
                                                        .campusLocation
                                                }
                                                formType={props.formType}
                                            />
                                        </Row>
                                    </Grid>
                                </Col>
                            </Row>
                        </Container>

                        <div className="resultItems">
                            <PrintUIFonlyContactInformation
                                formValues={props.formValues}
                            />
                        </div>
                        <div className="resultItems">
                            <PrintDonorInformation
                                formValues={props.formValues}
                            />
                        </div>

                        <div className="theDesignationResults">
                            <Col className="p-0">
                                <div className="resultItems">
                                    <PrintSpousalPartner
                                        formValues={props.formValues}
                                    />
                                </div>
                            </Col>
                        </div>

                        <Row>
                            <Col>
                                <PrintTotals formValues={props.formValues} />
                            </Col>
                        </Row>

                        <PrintGiftInformation formValues={props.formValues} />
                        {/* <PrintWire formValues={props.formValues} /> */}
                        <PrintTribute formValues={props.formValues} />
                        <PrintCheck formValues={props.formValues} />
                        <PrintGIKs formValues={props.formValues} />
                        <div className="theDesignationResults">
                            <Col className="p-0">
                                <div className="resultItems">
                                    <PrintDesignations
                                        formValues={props.formValues}
                                    />
                                </div>
                            </Col>
                        </div>
                        <PrintEightyTwoEightyThree
                            formValues={props.formValues}
                        />
                        <Row className="theDesignationResults">
                            <Col>
                                <PrintSecurities
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
