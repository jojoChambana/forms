import { Container } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";
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
} from "../components/HelperFunctions";

const CashCheckGIKDataEntry = ({
    onSubmit,
    getValues,
    setValue,
    errors,
    register,
    control,
    watch,
    handleSubmit,
    showAnonymousDonorCheckBox,
}) => {
    const fillButton = () => {
        FillCashCheckGIKForm(setValue);
        SharedFillForm(setValue);
    };

    return (
        <FormProvider>
            <Container className="pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button onClick={fillButton}>Fill</Button>
                    <DepartmentCampus
                        getValues={getValues}
                        setValue={setValue}
                    />

                    <ContactInformation
                        errors={errors}
                        register={register}
                        control={control}
                    />
                    <NameEmail errors={errors} register={register} />
                    <DonorInformation
                        errors={errors}
                        register={register}
                        getValues={getValues}
                        setValue={setValue}
                        showAnonymousDonorCheckBox={showAnonymousDonorCheckBox}
                    />

                    <GiftTribute
                        errors={errors}
                        register={register}
                        control={control}
                        getValues={getValues}
                        setValue={setValue}
                        prefix="tribute"
                    />
                    <DesignationInformation
                        register={register}
                        control={control}
                        setValue={setValue}
                        getValues={getValues}
                        watch={watch}
                    />
                    <TransmittalTotals
                        errors={errors}
                        register={register}
                        watch={watch}
                        setValue={setValue}
                        ignoreNonGiftChecked={false}
                    />
                    <input type="submit" />
                </form>
                <DevTool control={control} /> {/* set up the dev tool */}
            </Container>
        </FormProvider>
    );
};

export default CashCheckGIKDataEntry;
