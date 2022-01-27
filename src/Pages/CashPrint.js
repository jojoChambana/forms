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

const CashPrint = (props) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    console.log("these are the", props)

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
                        <Row>
                            <Col>
                                <Typography variant="h4" component="h1">
                                    Donor check transmittal
                                </Typography>
                            </Col>
                        </Row>

                        {/* {props.formValues.totalDonationAmount} */}

                        <Row>
                            <Col>
                                <Typography variant="h6" component="h2">
                                    Campus: <span className="normal">{props.formValues.campusLocation}</span>

                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="h6" component="h2">
                                    Contact: {props.formValues.contactFullName}
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Phone: <span className="normal">{props.formValues.contactPhone}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    Email: <span className="normal">{props.formValues.contactEmail}</span></Typography>
                            </Col>

                            <Col>
                                <Typography variant="formCat">
                                    College name: <span className="normal">{props.formValues.collegeName}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Department name: <span className="normal">{props.formValues.departmentName}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    Prepared by: <span className="normal">{props.formValues.preparedBy}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    Date prepared: <span className="normal">{props.formValues.datePrepared}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Typography variant="h5" component="h3">Donor Information</Typography>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Donor is Unknown, Anonymous or various cash donors: <span className="normal">{props.formValues.donorUnknown}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    New donor: <span className="normal">{props.formValues.newDonor}</span> - <span className="rdbld">TO DO - Make yes or no</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            {/* <Typography variant="h6" component="h4">
                                Address
                            </Typography> */}
                            <Col>
                                <Typography variant="formCat">
                                    <Col>
                                        <Typography variant="formCat">
                                            TED Constituent ID: <span className="normal">{props.formValues.tedConstituentId}</span>
                                        </Typography>
                                    </Col>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    <Col>
                                        <Typography variant="formCat">
                                            Organization/Donor Name : <span className="normal">{props.formValues.organizationDonorName}</span>
                                        </Typography>
                                    </Col>
                                </Typography>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col>
                                <Typography variant="formCat">
                                    New address: <span className="normal">{props.formValues.newAddress}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Foriegn address: <span className="normal">{props.formValues.foreignAddress}</span>
                                </Typography>
                            </Col>
                        </Row> */}
                        <Row>
                            <Col>
                                <span className="normal">{props.formValues.address}</span>
                                <br />
                                <span className="normal">{props.formValues.city} <span className="normal">{props.formValues.state}</span></span>
                                <br />
                                <span className="normal">{props.formValues.zipCode}</span>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Contact/Publicity code: <span className="normal">{props.formValues.publicityCode}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Total donation amount: <span className="normal">{props.formValues.totalDonationAmount}</span>
                                </Typography>
                            </Col>
                        </Row>

                        <Typography variant="h5" component="h3">Designation Information</Typography>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Has a new designation been requested? <span className="normal">{props.formValues.newDesignationRequested}</span>
                                </Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    TED designation Id: <span className="normal">{props.formValues.tedDesignationId}</span>
                                </Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Department contact: <span className="normal">{props.formValues.departmentContact}</span>
                                </Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Department email: <span className="normal">{props.formValues.departmentEmail}</span>
                                </Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    TED designation title: <span className="normal">{props.formValues.tedDesignationTitle}</span>
                                </Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Typography variant="formCat">
                                Designation amount: <span className="normal">{props.formValues.tedDesignationAmount}</span>
                            </Typography>
                        </Row>

                        <Row>
                            <Typography variant="formCat">
                                Is there a non-gift portion? <span className="normal">{props.formValues.nonGiftPortion}</span>
                            </Typography>
                            <Row>
                                <Col>
                                    <Typography variant="formCat">
                                        Non-gift TED designation Id: <span className="normal">{props.formValues.nonGiftTedId}</span>
                                    </Typography>
                                </Col>
                                <Col>
                                    <Typography variant="formCat">
                                        Gift amount: <span className="normal">{props.formValues.giftTedAmount}</span>
                                    </Typography>
                                </Col>
                                <Col>
                                    <Typography variant="formCat">
                                        Non-Gift amount: <span className="normal">{props.formValues.nonGiftTedAmount}</span>
                                    </Typography>
                                </Col>
                            </Row>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Is this gift associated with a pledge? <span className="normal">{props.formValues.giftAssociatedWithPledge}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">
                                    Pledge revenue Id: <span className="normal">{props.formValues.pledgeRevenueId}</span>
                                </Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Is this gift associated with an Opportunity? <span className="normal">{props.formValues.associatedOpportunity}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    TED household Id: <span className="normal">{props.formValues.tedHouseholdId}</span>
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">Household name: <span className="normal">{props.formValues.tedHousehold}</span></Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">Plan name: </Typography><span className="normal">{props.formValues.tedPlanName}</span></Col>
                            <Col>
                                <Typography variant="formCat">Opportunity amount: </Typography><span className="normal">{props.formValues.tedOpportunityAmount}</span></Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">Actual ask date: </Typography><span className="normal">{props.formValues.actualAskDate}</span></Col>
                            <Col>
                                <Typography variant="formCat">Primary plan manager name: </Typography><span className="normal">{props.formValues.primaryPlanManager}</span></Col>
                        </Row>



                        <Row>
                            <Col>
                                <Typography variant="formCat">
                                    Is this gift a tribute? <span className="normal">{props.formValues.giftTribute}</span>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Typography variant="h6">In memory</Typography>
                            <Col>
                                <Typography variant="formCat">TED constituent Id: <span className="normal">{props.formValues.inMemoryTedID}</span></Typography>
                            </Col>

                            <Col>
                                <Typography variant="formCat">Deceased full name: <span className="normal">{props.formValues.dedeasedFullName}</span></Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Typography variant="h6">In honor</Typography>
                            <Col>
                                <Typography variant="formCat">TED constituent Id: <span className="normal">{props.formValues.inHonorTedID}</span></Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">Honoree full name: <span className="normal">{props.formValues.honoreeFullName}</span></Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">Address: <span className="normal">{props.formValues.address}</span></Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">City: <span className="normal">{props.formValues.city}</span></Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">State: <span className="normal">{props.formValues.state}</span></Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">Zip Code: <span className="normal">{props.formValues.zipCode}</span></Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">Phone: <span className="normal">{props.formValues.phone}</span></Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">Email<span className="normal">{props.formValues.email}</span></Typography>
                            </Col>
                        </Row>
                        <Col>
                            <Typography variant="formCat">Foreign Address: <span className="normal">{props.formValues.inMemoryForeignAddress}</span></Typography>
                        </Col>

                        <Row>
                            <Col>
                                <Typography variant="formCat">Address: <span className="normal">{props.formValues.address}</span></Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">City: <span className="normal">{props.formValues.city}</span></Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">Region/Province: <span className="normal">{props.formValues.provinceRegion}</span></Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">Country: <span className="normal">{props.formValues.country}</span></Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">Postal Code: <span className="normal">{props.formValues.postalCode}</span></Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="formCat">Phone: <span className="normal">{props.formValues.phone}</span></Typography>
                            </Col>
                            <Col>
                                <Typography variant="formCat">Email: <span className="normal">{props.formValues.email}</span></Typography>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography variant="formCat">Comments: <span className="normal">{props.formValues.email}</span></Typography>
                            </Col>
                        </Row>
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



