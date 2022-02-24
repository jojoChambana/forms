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
import PrintContactAndDonorInfo from "./PrintContactAndDonorInfo";
import PrintTribute from "./PrintTribute";
import PrintDesignations from "./PrintDesignations";
import PrintTotals from "./PrintTotals";
import { PrintCampusAddressSwap } from "../HelperFunctions";

const CashCheckGIKPrint = (props) => {
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
                        <Row className="resultItems ">
                            <Col>
                                <Typography variant="h4" component="h1">
                                    Donor {props.formType} transmittal
                                </Typography>
                            </Col>
                        </Row>
                        <Container>
                            <Row className="hideForPrint">
                                <Col className="d-flex justify-content-around">
                                    <button
                                        onClick={() => {
                                            navigate(props.returnUrl);
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

export default CashCheckGIKPrint;
