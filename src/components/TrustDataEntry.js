import {
    RadioGroup,
    Radio,
    FormControlLabel,
    Container,
    Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TrustWire from "./TrustWire";
import TrustCheck from "./TrustCheck";
import GiftInKindInformation from "./GiftInKindInformation";
import TrustDepartmentInformation from "./TrustDepartmentInformation";
import DonorInformation from "./DonorInformation";
import SpousePartnerInformation from "./SpousePartnerInformation";
import TrustIRADistribution from "./TrustIRADistribution";
import TrustReceiptTo from "./TrustReceiptTo";
import TrustOtherInformation from "./TrustOtherInformation";
import TrustBankNumber from "./TrustBankNumber";
import DesignationInformation from "../components/DesignationInformation";
import TransmittalTotals from "../components/TransmittalTotals";

import { SubmitButton } from "./HelperFunctions";

export default function TrustDataEntry({
    onSubmit,
    showAnonymousDonorCheckBox,
}) {
    const { getValues, setValue, handleSubmit } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    function OtherTrustTypeSelected() {
        return (
            getValues("trustType") !== "Deferred Gift Only" &&
            getValues("trustType") !== ""
        );
    }

    return (
        <Container className="pb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            <FormControlLabel
                                value="Life Insurance"
                                control={<Radio />}
                                label="Life Insurance"
                            />
                        </RadioGroup>
                    </Col>
                </Row>
                {OtherTrustTypeSelected() && (
                    <>
                        <TrustDepartmentInformation
                            trustType={getValues("trustType")}
                        />
                        <DonorInformation showAnonymousDonorCheckBox={false} />
                        {getValues("trustType") !== "Estate" && (
                            <SpousePartnerInformation />
                        )}
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
                        {/* <Security alwaysShowSecurtityDeleteButtons={true} /> */}
                        <TrustWire />
                        <TrustCheck />
                        <GiftInKindInformation alwaysShowDeleteButtons={true} />
                        <TrustOtherInformation />
                        <DesignationInformation />
                        <TransmittalTotals ignoreNonGiftChecked={false} />
                    </>
                )}
                {/* <Button onClick={logIt}>Console Log Values</Button> */}
                <SubmitButton />
            </form>
        </Container>
    );
}
