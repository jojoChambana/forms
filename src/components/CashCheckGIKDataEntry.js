import { Container } from "@mui/material";
import React from "react";
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
import {
    FillCashCheckGIKForm,
    SharedFillForm,
    SubmitButton,
} from "../components/HelperFunctions";

const CashCheckGIKDataEntry = ({
    onSubmit,
    showAnonymousDonorCheckBox,
}) => {
    const {setValue, handleSubmit, control} = useFormContext();

    const fillButton = () => {
        FillCashCheckGIKForm(setValue);
        SharedFillForm(setValue);
    };

    return (
            <Container className="pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button onClick={fillButton}>Fill</Button>
                    <DepartmentCampus />

                    <ContactInformation />
                    <NameEmail />
                    <DonorInformation showAnonymousDonorCheckBox={showAnonymousDonorCheckBox} />
                    <GiftTribute />
                    <DesignationInformation />
                    <TransmittalTotals ignoreNonGiftChecked={false} />
                    <SubmitButton />
                </form>
                <DevTool control={control} /> {/* set up the dev tool */}
            </Container>
    );
};

export default CashCheckGIKDataEntry;
