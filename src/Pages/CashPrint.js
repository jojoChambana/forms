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
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

const CashPrint = (props) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    // console.log("these are the", props)

    // // let unknownDonor = props.formValues.donorUnknown.toString(false);
    // const theDonorIsUnknown = <Typography className='normal'>Donor is unknown, anonymous, or various cash donors.</Typography>;

    // // let newDonor = props.formValues.donorUnknown.toString(false)
    // const theDonorIsNew = <Typography className='normal'>New donor.</Typography>;

    // const theAddressIsNew = <Typography className="normal">This is a new address.</Typography>

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
                                {`@media print {.headerPrint{display: block; .addr{display:flex; justify-content:flex-end !important}}}`}
                            </style>

                            <Row>
                                <Col>
                                    <img
                                        src={process.env.PUBLIC_URL + "foundation-logo.png"}
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
                                        <Typography variant="subtitle2" component="div">
                                            Univesity of Illinois Foundation<br />
                                            Harker Hall, 1305 West Green Street<br />
                                            Urbana, IL 61801<br />
                                            217.244.2706<br />
                                            cashdesk@uif.uillinois.edu
                                        </Typography>
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
                        <Row xs={12} className="resultItems">
                            <Col>
                                <Typography variant="formCat" className="lineUp">
                                    Campus:
                                </Typography>
                            </Col>
                            <Col className="results">
                                <span className="normal">{props.formValues.campusLocation}</span>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col>
                                <Typography variant="h5" component="h3">
                                    Contact Information
                                </Typography>
                            </Col>
                        </Row> */}
                        <Row>
                            <Col xs={12} md={6}>
                                <Row xs={12} className="resultItems">
                                    <Col>
                                        <Typography variant="formCat" className="lineUp">
                                            Contact full name:
                                        </Typography>
                                    </Col>
                                    <Col className="results">
                                        <span className="normal">{props.formValues.contactFullName}</span>
                                    </Col>
                                </Row>

                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Phone:
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.contactPhone}</span>
                                    </Col>
                                </Row>
                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            Email: </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.contactEmail}</span>
                                    </Col>
                                </Row>

                                <Row xs={12} className="resultItems">
                                    <Col className="rightLabel">
                                        <Typography variant="formCat" className="lineUp">
                                            College name: </Typography>
                                    </Col>
                                    <Col>
                                        <span className="normal">{props.formValues.collegeName}</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.unitReferenceNumber) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Department name:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.departmentName}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.unitReferenceNumber) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Date received by department:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.donationDate}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.preparedBy) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Prepared by:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.preparedBy}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.unitReferenceNumber) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Unit reference number:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.unitReferenceNumber}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                            </Col>

                        </Row>
                        {/* <Row>
                            <Col>
                                <Typography variant="h6" component="h3">
                                    Donor Information
                                </Typography>
                            </Col>
                        </Row> */}

                        <Row>
                            <Col xs={12} md={6}>
                                <Row xs={12} className="resultItems">

                                    {
                                        (() => {
                                            if (props.formValues.organizationDonorName) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Organization/Donor name:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.organizationDonorName}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <AddressPrint prefix="donor" formValues={props.formValues} />

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.domesticAddress) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Domestic Address:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.domesticAddress}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.domesticCity) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Domestic city:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.domesticCity}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.domesticState) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Domestic state:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.domesticState}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.zipCode) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Zip:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.zipCode}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>


                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.foreignAddress) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Foreign Address:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.foreignAddress}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                            else {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Domestic Address:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.domesticAddress}</span>
                                                        </Col>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
                                </Row>


                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.provinceRegion) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                State/Province/Region:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.provinceRegion}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>
                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.country) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Country:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.country}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>



                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.postalCode) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Postal code:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.postalCode}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>
                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.foreignCountry) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Country:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.foreignCountry}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>


                            </Col>
                            <Col xs={12} md={6}>
                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.tedConstituentId) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Ted constituent ID:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">{props.formValues.tedConstituentId}</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>



                                <Row xs={12} className="resultItems">

                                    {
                                        (() => {
                                            if (props.formValues.donorUnknown) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Donor is unknown, anonymous, or various cash donors:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">Yes</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>
                                <Row xs={12} className="resultItems">

                                    {
                                        (() => {
                                            if (props.formValues.newDonor) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                New donor:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">Yes</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>

                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.newAddress) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                New address:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">Yes</span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>
                                <Row xs={12} className="resultItems">
                                    {
                                        (() => {
                                            if (props.formValues.publicityCode) {
                                                return (
                                                    <>
                                                        <Col>
                                                            <Typography variant="formCat" className="lineUp">
                                                                Contact/Publicity:
                                                            </Typography>
                                                        </Col>
                                                        <Col className="results">
                                                            <span className="normal">
                                                                {props.formValues.publicityCode}
                                                            </span>
                                                        </Col>
                                                    </>
                                                );
                                            }
                                        })()
                                    }
                                </Row>
                            </Col>
                        </Row>

                        <Row xs={12} className="resultItems mb-4">
                            <hr />
                            {
                                (() => {
                                    if (props.formValues.totalDonationAmount) {
                                        return (
                                            <>
                                                <Col>
                                                    <Typography variant="formCat" className="lineUp">
                                                        Total donation amount:
                                                    </Typography>
                                                </Col>
                                                <Col className="results">
                                                    <span className="normal">
                                                        {props.formValues.totalDonationAmount}
                                                    </span>
                                                </Col>
                                            </>
                                        );
                                    }
                                })()
                            }
                        </Row>
                        {/* <Row>
                            <Col>
                                <Typography variant="h6" component="h3">
                                    Tribute
                                </Typography>
                            </Col>
                        </Row> */}

                        {
                            (() => {
                                if (props.formValues.tribute) {
                                    return (
                                        <Row xs={12} className="resultItems">
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <Typography>
                                                            This is a tribute {props.formValues.giftTribute}:
                                                            <span className="normal"> {props.formValues.deceasedFullName}</span>
                                                        </Typography>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Typography variant="formCat" className="lineUp">
                                                            TED constituent Id:
                                                        </Typography>
                                                    </Col>
                                                    <Col className="results">
                                                        <span className="normal">
                                                            {props.formValues.deceasedTedconstituentID}
                                                        </span>
                                                    </Col>

                                                    <Col>
                                                        <Typography variant="formCat" className="lineUp">
                                                            Full name of the deceased:
                                                        </Typography>
                                                    </Col>
                                                    <Col className="results">
                                                        <span className="normal">
                                                            {props.formValues.deceasedFullName}
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    );
                                }
                            })()
                        }


                        {
                            (() => {
                                if (!props.formValues.tribute) {
                                    return (
                                        <>
                                            <Row xs={12} className="resultItems">
                                                <Col>
                                                    <Typography>
                                                        This is in honor of :
                                                        <span className="normal"> {props.formValues.honoreeFullName}</span>
                                                    </Typography>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Typography variant="formCat" className="lineUp">
                                                        Address:
                                                    </Typography>
                                                </Col>
                                                <Col className="results">
                                                    <span className="normal">
                                                        {props.formValues.domesticAddress}
                                                    </span>
                                                </Col>
                                            </Row>
                                        </>
                                    );
                                }
                            })()
                        }

                    </Container>
                </div>
            </ThemeProvider >
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



