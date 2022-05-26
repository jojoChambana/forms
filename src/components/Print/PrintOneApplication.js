import { Col, Row } from "react-bootstrap";

const PrintOneApplication = ({ oneApplication, index }) => {
    return (
        <>
            <Row>
                <Col key={"application" + index} className="arrangeInlineCols">
                    <div className="firstChild">
                        <div className="spacer">Date: &nbsp;</div>
                        <span className="normal">
                            {oneApplication.applicationDate}
                        </span>
                    </div>
                    <div className="firstChild">
                        <div className="spacer">Plan Gift Type: &nbsp;</div>
                        <span className="normal">
                            {oneApplication.planGiftType}
                        </span>
                    </div>
                    <div className="firstChild">
                        <div className="spacer">Plan Gift Amount: &nbsp;</div>
                        <span className="normal">
                            {oneApplication.planGiftAmount}
                        </span>
                    </div>
                </Col>

                <Col className="arrangeInlineCols">
                    <div className="firstChild">
                        <div className="spacer">This is a:&nbsp;</div>

                        <span className="normal">
                            {oneApplication.applicationType}
                        </span>
                    </div>

                    <div className="firstChild">
                        <div className="spacer">
                            Is Donor different than Donor above? &nbsp;
                        </div>
                        <span className="normal">
                            {oneApplication.isApplicationDonorDifferent}
                        </span>
                    </div>
                </Col>

                <Col className="arrangeInlineCols">
                    <div className="firstChild">
                        <div className="spacer">Last/Org Name:&nbsp;</div>

                        <span className="normal">
                            {oneApplication.dLastOrgName}
                        </span>
                    </div>

                    <div className="firstChild">
                        <div className="spacer">First Name:&nbsp;</div>
                        <span className="normal">
                            {oneApplication.dFirstName}
                        </span>
                    </div>

                    <div className="firstChild">
                        <div className="spacer">Middle Name:&nbsp;</div>
                        <span className="normal">
                            {oneApplication.dMiddleName}
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default PrintOneApplication;
