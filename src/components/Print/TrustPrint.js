import {
    Button,
    Grid,
    Container,
    createTheme,
    ThemeProvider,
    Typography,
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
import PrintEightyTwoEightyThree from "./PrintEightyTwoEightyThree";
import PrintGIKs from "./PrintGIKs";
import PrintCheck from "./PrintCheck";
import PrintWire from "./PrintWire";
import PrintPlannedGift from "./PrintPlannedGift";

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
                        <div id="timestamp" className="pb-2"></div>
                        <PrintCampusAddressSwap
                            campusLocation={props.formValues.campusLocation}
                            formType={props.formType}
                        />
                        <Container className="d-flex justify-content-center">
                            <div className="hideForPrint">
                                <Col className="trustPrintBtn">
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
                                <div className="col trustPrintBtn">
                                    <Button
                                        variant="contained"
                                        onClick={handlePrint}
                                        style={{ width: "max-content" }}
                                    >
                                        Print Document
                                    </Button>
                                </div>
                            </div>
                        </Container>

                        <div className="resultItems">
                            <Typography
                                variant="h5"
                                component={"h1"}
                                className="d-flex justify-content-center mb-2"
                            >
                                Trust Type: {props.formValues.trustType}
                            </Typography>
                            <PrintUIFonlyContactInformation
                                formValues={props.formValues}
                            />
                        </div>
                        <PrintDonorInformation formValues={props.formValues} />
                        <PrintSpousalPartner formValues={props.formValues} />
                        <PrintTotals formValues={props.formValues} />
                        <PrintTribute formValues={props.formValues} />
                        <PrintGiftInformation formValues={props.formValues} />
                        <PrintSecurities formValues={props.formValues} />
                        <PrintWire formValues={props.formValues} />
                        <PrintCheck formValues={props.formValues} />
                        <PrintGIKs formValues={props.formValues} />
                        <PrintEightyTwoEightyThree
                            formValues={props.formValues}
                        />
                        <PrintPlannedGift formValues={props.formValues} />
                        <PrintDesignations formValues={props.formValues} />
                        <PrintTotals formValues={props.formValues} />
                        <Container className="d-flex justify-content-center">
                            <Row className="hideForPrint">
                                <>
                                    <Col className="trustPrintBtn">
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
                                    <div className="col trustPrintBtn">
                                        <Button
                                            variant="contained"
                                            onClick={handlePrint}
                                            style={{ width: "max-content" }}
                                        >
                                            Print Document
                                        </Button>
                                    </div>
                                </>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
};

export default TrustPrint;
