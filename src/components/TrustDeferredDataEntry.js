import { Button, Container } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import DonorInformation from "./DonorInformation";
import SpousePartnerInformation from "./SpousePartnerInformation";
import TrustDeferredGiftInformation from "./TrustDeferredGiftInformation";
import TrustTypeOfCommitment from "../components/TrustTypeOfCommitment";
import TrustBeneficiary from "../components/TrustBeneficiary";

import { SubmitButton, FillTrustDeferredForm } from "./HelperFunctions";
import { DevTool } from "@hookform/devtools";

export default function TrustDeferredDataEntry({
    onSubmit,
    showAnonymousDonorCheckBox,
}) {
    const { setValue, handleSubmit, control } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);

    const fillButton = () => {
        FillTrustDeferredForm(setValue);
        setaCheckboxChanged(!aCheckboxChanged);
    };

    return (
        <Container className="pb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Button onClick={fillButton}>Fill</Button>
                <DonorInformation
                    showAnonymousDonorCheckBox={false}
                    showPhoneAndDOB={true}
                />
                <SpousePartnerInformation
                    showCheckBoxes={false}
                    showPhoneAndDOB={true}
                />
                <TrustTypeOfCommitment />
                <TrustDeferredGiftInformation />
                <TrustBeneficiary />
                <SubmitButton />
            </form>
            <DevTool control={control} /> {/* set up the dev tool */}
        </Container>
    );
}
