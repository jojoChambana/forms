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
import PrintForeign from "../components/PrintForeign";
import AddressPrint from "../components/AddressPrint";

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
}

const CashPrint = (props) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    // console.log(props.formValues.inMemoryNewAddress);
    const isAtribute = props.formValues.tribute;
    const newTribAddress = props.formValues.inMemoryNewAddress;
    const checkForForeignAddress =
        props.formValues.tributeForeignAddressCheckbox;

    function IsTributeNewAddressChecked(props) {
        if (newTribAddress === true) {
            return (
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>
                        <Typography>
                            <span className="normal">
                                This is a new tribute address
                            </span>
                        </Typography>
                    </Col>
                </Row>
            );
        } else {
            return null;
        }
    }

    function IsTributeForeignAddressChecked(props) {
        if (checkForForeignAddress === true) {
            return (
                // <Row>
                //     <Col>
                //         {props.formValues.tributeForeignAddress}
                //         <br />
                //         {props.formValues.tributeForeignAddressCity}
                //         <br />
                //         {props.formValues.tributeForeignAddressProvinceRegion}
                //         <br />
                //         {props.formValues.tributeForeignAddressCountry}
                //         <br />
                //         {props.formValues.tributeForeignAddressPostalCode}
                //     </Col>
                // </Row>
                <>Hello foreign</>
            );
        } else {
            return (
                // <Row>
                //     <Col>
                //         {props.formValues.tributeDomesticAddress}
                //         <br />
                //         {props.formValues.tributeDomesticCity}
                //         <br />
                //         {props.formValues.tributeDomesticState}
                //         <br />
                //         {props.formValues.tributeDomesticZipCode}
                //     </Col>
                // </Row>
                <>Hello domestic</>
            );
        }
    }

    const Domestic = () => {
        return (
            <>
                <Row>
                    <Col className="rightLabel">Address:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorDomesticAddress}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">City:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorDomesticAddressCity}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">State:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorDomesticAddressState}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Zip:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorDomesticAddressZipCode}
                        </span>
                    </Col>
                </Row>
            </>
        );
    };

    const Foreign = () => {
        return (
            <>
                <Row>
                    <Col className="rightLabel">Address:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorForeignAddress}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">City:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorForeignAddressCity}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Province/Region:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorForeignAddressProvinceRegion}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Country:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorForeignAddressCountry}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="rightLabel">Postal Code:</Col>
                    <Col>
                        <span className="normal">
                            {props.formValues.donorDomesticAddressZipCode}
                        </span>
                    </Col>
                </Row>
            </>
        );
    };
    function AddressType(foreignAddress) {
        const isForeign = props.formValues.donorForeignAddressCheckbox;
        if (!isForeign) {
            return <Domestic />;
        }
        return <Foreign />;
    }
    //   ReactDOM.render(
    //     <AddressType isLoggedIn={false} />,
    //     document.getElementById('root')
    //   );

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
                        <Row className="resultItems">
                            <Col>
                                <Typography variant="h4" component="h1">
                                    Donor cash transmittal
                                </Typography>
                            </Col>
                        </Row>

                        <Row className="resultItems">
                            <Col>
                                <Row>
                                    <Col className="rightLabel">Campus: </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.campusLocation}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Contact full name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.contactFullName}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">Phone:</Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.contactPhone}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">
                                        Contact email:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.contactEmail}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">
                                        College name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.collegeName}
                                        </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="rightLabel">
                                        Contact department name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.departmentName}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Donation date:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.donationDate}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Prepared by:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.preparedBy}
                                        </span>
                                    </Col>
                                </Row>

                                {props.formValues.unitReferenceNumber ? (
                                    <Row>
                                        <Col className="rightLabel">
                                            Unit reference number:
                                        </Col>
                                        <Col>
                                            <span className="normal">
                                                {
                                                    props.formValues
                                                        .unitReferenceNumber
                                                }
                                            </span>
                                        </Col>
                                    </Row>
                                ) : null}
                            </Col>
                            <Col>
                                <Row>
                                    <Col className="rightLabel">
                                        TED constituent ID:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {props.formValues.tedConstituentId}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="rightLabel">
                                        Organization/Donor name:
                                    </Col>
                                    <Col>
                                        <span className="normal">
                                            {
                                                props.formValues
                                                    .organizationDonorName
                                            }
                                        </span>
                                    </Col>
                                </Row>
                                <AddressType />

                                {
                                    <Row>
                                        <Col className="rightLabel">
                                            Tribute{" "}
                                            {props.formValues.giftTribute}:{" "}
                                            {/* inserts the phrases "In memory of" or "In tribute of" */}
                                        </Col>
                                        <Col>
                                            <span className="normal">
                                                {/* if the value is "In memory of", then show the deceasedFullName, otherwise show the honoreeFullName */}
                                                {props.formValues
                                                    .giftTribute ===
                                                "In memory of"
                                                    ? props.formValues
                                                          .deceasedFullName
                                                    : props.formValues
                                                          .honoreeFullName}
                                            </span>
                                        </Col>

                                        <IsTributeNewAddressChecked />
                                        <IsTributeForeignAddressChecked />
                                    </Row>
                                }
                            </Col>
                        </Row>

                        {/* <Row>
                            <Col>
                                <Typography variant="h6" component="h3">
                                    Donor Information
                                </Typography>
                            </Col>
                        </Row> */}
                    </Container>
                </div>
            </ThemeProvider>
            <Container>
                <Row>
                    <Col>
                        <button
                            onClick={() => {
                                navigate("/cash");
                            }}
                        >
                            Back
                        </button>
                    </Col>
                    <Col>
                        <button onClick={handlePrint}>Print this out!</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CashPrint;
