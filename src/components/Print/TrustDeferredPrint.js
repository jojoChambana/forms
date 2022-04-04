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
import PrintContactAndDonorInfo from "./PrintContactAndDonorInfo";
import PrintTribute from "./PrintTribute";
// import PrintDesignations from "./PrintDesignations";
import PrintTotals from "./PrintTotals";
import { PrintCampusAddressSwap, CampusAddress } from "../HelperFunctions";
import PrintSpousalPartner from "./PrintSpousalPartner";

const TrustDeferredPrint = (props) => {
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
                            <PrintContactAndDonorInfo
                                formValues={props.formValues}
                            />
                        </div>
                        <PrintTribute formValues={props.formValues} />
                        {/* 
                        <div className="theDesignationResults">
                            <Col className="p-0">
                                <div className="resultItems">
                                    <PrintDesignations
                                        formValues={props.formValues}
                                    />
                                </div>
                            </Col>
                        </div> */}
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
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
};

export default TrustDeferredPrint;
