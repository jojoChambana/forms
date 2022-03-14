import {
    Button,
    Container,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Security from "./Security";
import TrustWire from "./TrustWire";
import TrustCheck from "./TrustCheck";
import GiftInKindInformation from "./GiftInKindInformation";
import TrustDepartmentInformation from "./TrustDepartmentInformation";
import DonorInformation from "./DonorInformation";
import SpousePartnerInformation from "./SpousePartnerInformation";
import TrustIRADistribution from "./TrustIRADistribution"
import TrustReceiptTo from "./TrustReceiptTo"
import TrustOtherInformation from "./TrustOtherInformation"
import TrustDeferredGiftInformation from "./TrustDeferredGiftInformation"
import TrustTypeOfCommitment from "../components/TrustTypeOfCommitment";
import TrustBeneficiary from "../components/TrustBeneficiary";

import {
    SubmitButton, FillTrustDeferredForm
} from "./HelperFunctions";

export default function TrustDeferredDataEntry({
    onSubmit,
    showAnonymousDonorCheckBox,
}) {
    const { setValue, handleSubmit } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const fillButton = () => {
        FillTrustDeferredForm(setValue);
        setaCheckboxChanged(!aCheckboxChanged);
    };

    return (
        <Container  className="pb-4">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Button onClick={fillButton}>Fill</Button>
            <DonorInformation showAnonymousDonorCheckBox={false} showPhoneAndDOB={true} />
            <SpousePartnerInformation showCheckBoxes={false} showPhoneAndDOB={true} />
            <TrustTypeOfCommitment />
            <TrustDeferredGiftInformation />
            <TrustBeneficiary />
            <SubmitButton />
            </form>            
        </Container>
    );
}
