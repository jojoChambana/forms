import {
    Button,
    RadioGroup,
    Radio,
    FormControlLabel,
    Container,
    Typography,
    Alert,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TrustWire from "./TrustWire";
import TrustCheck from "./TrustCheck";
import GiftInKindInformation from "./GiftInKindInformation";
import UIFonlyContactInformation from "./UIFonlyContactInformation";
import DonorInformation from "./DonorInformation";
import SpousePartnerInformation from "./SpousePartnerInformation";
import TrustIRADistribution from "./TrustIRADistribution";
import TrustReceiptTo from "./TrustReceiptTo";
import TrustOtherInformation from "./TrustOtherInformation";
import TrustBankNumber from "./TrustBankNumber";
import DesignationInformation from "../components/DesignationInformation";
import TransmittalTotals from "../components/TransmittalTotals";
import { DevTool } from "@hookform/devtools";
import {
    FillTrustForm,
    SharedFillForm,
    ShowFillButton,
    SubmitButton,
} from "./HelperFunctions";
import GiftTribute from "./GiftTribute";
import Security from "./Security";

export default function TrustDataEntry({
    onSubmit,
    showAnonymousDonorCheckBox,
    formtype,
}) {
    const { getValues, setValue, handleSubmit, control } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const [showProblemMessage, setShowProblemMessage] = useState(false);

    function OtherTrustTypeSelected() {
        return (
            getValues("trustType") !== "Deferred Gift Only" &&
            getValues("trustType") !== ""
        );
    }

    const fillButton = () => {
        FillTrustForm(setValue);
        SharedFillForm(setValue);
        setaCheckboxChanged(!aCheckboxChanged);
    };

    return (
        <Container className="pb-4" formtype={formtype}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <Button onClick={fillButton}>Fill</Button> */}
                {ShowFillButton() ? (
                    <Button onClick={fillButton}>Fill</Button>
                ) : (
                    <></>
                )}
                <Row>
                    <Col>
                        <RadioGroup
                            row
                            aria-labelledby="trustType"
                            value={getValues("trustType")}
                            onChange={(event) => {
                                setValue("trustType", event.target.value); // set the rect hook array element appropriately
                                if (event.target.value === "Life Insurance") {
                                    // for Life Insurance, the first designation should always be this
                                    setValue(
                                        "designation.0.tedDesignationId",
                                        "19330016"
                                    );
                                    setValue(
                                        "designation.0.tedDesignationTitle",
                                        "Life Insurance Premium"
                                    );
                                } else {
                                    //  see if the designation used to be the one hard-coded for life insurance.  If it is, remove it
                                    if (
                                        getValues(
                                            "designation.0.tedDesignationId"
                                        ) === "19330016"
                                    ) {
                                        setValue(
                                            "designation.0.tedDesignationId",
                                            ""
                                        );
                                        setValue(
                                            "designation.0.tedDesignationTitle",
                                            ""
                                        );
                                    }
                                }
                                if (event.target.value === "Estate")
                                    setValue("sourceCode", "10000");
                                else {
                                    if (getValues("sourceCode") === "10000")
                                        setValue("sourceCode", "");
                                }

                                setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                            }}
                            name="trustType"
                        >
                            <FormControlLabel
                                value="Outright"
                                control={<Radio />}
                                label="Outright"
                            />
                            <FormControlLabel
                                value="Estate"
                                control={<Radio />}
                                label="Estate"
                            />
                            <FormControlLabel
                                value="Life Income"
                                control={<Radio />}
                                label="Life Income"
                            />
                            {/* <FormControlLabel
                                value="Life Insurance"
                                control={<Radio />}
                                label="Life Insurance"
                            /> */}
                        </RadioGroup>
                    </Col>
                </Row>
                {OtherTrustTypeSelected() && (
                    <>
                        <UIFonlyContactInformation
                            trustType={getValues("trustType")}
                        />
                        <DonorInformation showAnonymousDonorCheckBox={false} />
                        {getValues("trustType") !== "Estate" && (
                            <SpousePartnerInformation />
                        )}

                        <GiftTribute />

                        <Typography variant="h5" component="h3">
                            Gift Information
                        </Typography>
                        {getValues("trustType") === "Outright" && (
                            <TrustIRADistribution />
                        )}
                        {getValues("trustType") === "Life Income" && (
                            <TrustBankNumber />
                        )}
                        <TrustReceiptTo trustType={getValues("trustType")} />
                        <Security
                            alwaysShowSecurityDeleteButtons={true}
                            showSeeAttached={true}
                        />
                        <TrustWire />
                        <TrustCheck />
                        <GiftInKindInformation alwaysShowDeleteButtons={true} />
                        <TrustOtherInformation is8283RadioButtons={true} />
                        <DesignationInformation trustMode={true} />
                        <TransmittalTotals
                            ignoreNonGiftChecked={false}
                            setShowProblemMessage={setShowProblemMessage}
                            isTrustMode={true}
                        />
                    </>
                )}
                {showProblemMessage && (
                    <Col className="displayContents">
                        <Alert severity="error" className="mt-1 mb-3">
                            You must fill in at least one Security, Wire, Check,
                            or Gift in Kind
                        </Alert>
                    </Col>
                )}
                {/* <Button onClick={logIt}>Console Log Values</Button> */}
                <SubmitButton />
            </form>
            <DevTool control={control} /> {/* set up the dev tool */}
        </Container>
    );
}
