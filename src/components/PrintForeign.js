import { Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';

export default function PrintForeign() {
    return (
        function PrintForeign(props) {
            return (
                <>
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
                </>
            )
        }
    )
}
