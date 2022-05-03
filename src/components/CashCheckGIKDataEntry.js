import { Alert, Container } from "@mui/material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import ContactInformation from "../components/ContactInformation";
import NameEmail from "../components/NameEmail";
import DepartmentCampus from "../components/DepartmentCampus";
import DonorInformation from "../components/DonorInformation";
import GiftTribute from "../components/GiftTribute";
import DesignationInformation from "../components/DesignationInformation";
import TransmittalTotals from "../components/TransmittalTotals";
import GiftInKindInformation from "../components/GiftInKindInformation";

import {
    FillCashCheckGIKForm,
    SharedFillForm,
    SubmitButton,
    ShowFillButton,
} from "../components/HelperFunctions";
import { Col, Row } from "react-bootstrap";

const CashCheckGIKDataEntry = ({
    onSubmit,
    showAnonymousDonorCheckBox,
    formType,
}) => {
    const { setValue, handleSubmit, control } = useFormContext();
    const [showBalanceProblemMessage, setShowBalanceProblemMessage] =
        useState(false);
    const fillButton = () => {
        FillCashCheckGIKForm(setValue);
        SharedFillForm(setValue);
    };
    console.log(window.location.hostname);
    return (
        <Container className="pb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DepartmentCampus formType={formType} />
                {ShowFillButton() ? (
                    <Button onClick={fillButton}>Fill</Button>
                ) : (
                    <></>
                )}

                <ContactInformation />
                <NameEmail />
                <DonorInformation
                    showAnonymousDonorCheckBox={showAnonymousDonorCheckBox}
                />
                {formType === "GiftInKind" && (
                    <GiftInKindInformation alwaysShowDeleteButtons={false} />
                )}
                <GiftTribute />
                <DesignationInformation />
                <TransmittalTotals
                    ignoreNonGiftChecked={false}
                    showGIKTotal={formType === "GiftInKind"}
                    setShowBalanceProblemMessage={setShowBalanceProblemMessage}
                />
                <Row className="submitRow">
                    <Col className="theSubmit">
                        <SubmitButton />
                    </Col>

                    {showBalanceProblemMessage && (
                        <Col className="displayContents">
                            <Alert severity="error">
                                Total Amount must equal Gift in Kind Total
                            </Alert>
                        </Col>
                    )}
                </Row>
            </form>
            <DevTool control={control} /> {/* set up the dev tool */}
        </Container>
    );
};

export default CashCheckGIKDataEntry;
