import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";
import ContactInformation from "../components/ContactInformation";
import NameEmail from "../components/NameEmail";
import Instructions from "../components/Instructions";
import DepartmentCampus from "../components/DepartmentCampus";
import DonorInformation from "../components/DonorInformation";
import Address from "../components/Address";
import GiftTribute from "../components/GiftTribute";
import PublicityDropDown from "../components/PublicityDropDown";
import { useNavigate } from "react-router-dom";
// import DesignationInformaiton from '../components/DesignationInformaiton'
import TotalDonationAmount from "../components/TotalDonationAmount";
import TransmittalTotals from "../components/TransmittalTotals";

export default function Cash(props) {
    const {
        register,
        control,
        setValue,
        getValues,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: props.formValues,
        // resolver,
        mode: "onChange",
    });

    const navigate = useNavigate();

    const { totalDonationAmount, setTotalDonationAmount } = useState(0);
    // const { opportunityAmount, setOpportunityAmount } = useState(0);
    // const { totalDesignationAmount, designationAmount } = useState();

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        navigate("/cashprint");
        console.table(data);
    };

    const fillButton = () => {
        // console.log("fill")

        setValue("contactFullName", "Thomas Jones");
        setValue("contactPhone", "(555)-867-5309");
        setValue("foreignDonor", false, "");
        setValue("contactEmail", "tjones@gmail.com");
        setValue("collegeName", "Fine Arts");
        setValue("departmentName", "English");
        setValue("campusLocation", "Chicago");
        setValue(
            "designationAdditionalComments",
            "This is a designation additional comment"
        );
        setValue("newDesignationRequested", false);
        setValue("departmentContactEmail", "info@department.edu");
        setValue("departmentContact", "Jame Doe");
        setValue("tedDesignationId", "946578");
        setValue("tedDesignationTitle", "The Jones family");
        setValue("totalDesignationAmount", 0);
        setValue("foreignaddress", false);
        setValue("donorDomesticAddress", "2112 S. Rush St.");
        setValue("donorDomesticAddressCity", "Chicago");
        setValue("donorDomesticAddressState", "IL");
        setValue("donorDomesticAddressZipCode", "61111");
        setValue("publicityCode", "no restrictions");
        setValue("donorDomesticAddressNewDonor", false);
        setValue("donorDomesticAddressNewAddress", false);
        setValue("donorUnknown", false);
        setValue("tedConstituentId", "4567788");
        setValue("organizationDonorName", "The Jones family");
        setValue("associatedOpportunity", false);
        setValue("tedHouseholdId", "32511");
        setValue("tedHouseholdName", "Jones");
        setValue("tedPlanName", "Jones TED Plan");
        setValue("tedOpportunityAmount", 30000);
        setValue("actualAskDate", "03-21-2000");
        setValue("primaryPlanManager", "John Burns");
        setValue("giftAssociatedWithPledge", false);
        setValue("pledgeRevenueId", "RevId621321");
        setValue("giftAmount", "600");
        setValue("tribute", false);
        setValue("giftTribute", false);
        setValue("tedconstituentID", "95465");
        setValue("deceasedFullName", "Dan Doe");
        setValue("inMemoryNewAddress", "3215 Tandy");
        setValue("inHonorTedID", "679856");
        setValue("honoreeFullName", "Jim Dandy");
        setValue("preparedBy", "Ted Logan");
        setValue("unitReferenceNumber", "");
        setValue("newDonorCheckBox", false);
        setValue("nonGiftPortion", "");
        setValue("nonGiftTedId", "98754654");
        setValue("giftTedAmount", "");
        setValue("nonGiftTedAmount", "");
        setValue("tedConstituentID", "6549");
        setValue("nonGiftAmount", "");
        setValue("totalDonationAmount", 1000);
        setValue("tedDonorUnknown", false);
        setValue("organizationDonorName", "The Goonies ");
        setValue("giftTotals");
        setValue("nonGiftTotals");
        setValue("tributeForeignAddressCheckbox", false);
        setValue("tributeDomesticAddress", "123 Main Street");
        setValue("tributeDomesticAddressCity", "Burlington");
        setValue("tributeDomesticAddressState", "IA");
        setValue("tributeDomesticAddressZipCode", "42153");
        setValue("donorForeignAddressCheckbox", false);
        // console.table(props.formValues)
    };
    const myFunction = () => {
        console.log("hello");
    };
    return (
        <>
            <Instructions />
            <FormProvider>
                <Container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Button onClick={fillButton}>Fill</Button>
                        <DepartmentCampus register={register} />
                        <ContactInformation
                            errors={errors}
                            register={register}
                            control={control}
                        />
                        <NameEmail errors={errors} register={register} />
                        <DonorInformation errors={errors} register={register} />
                        <Address
                            errors={errors}
                            register={register}
                            setValue={setValue}
                            getValues={getValues}
                            prefix="donor"
                        />
                        <PublicityDropDown
                            errors={errors}
                            register={register}
                        />
                        <TotalDonationAmount
                            errors={errors}
                            register={register}
                            amount={totalDonationAmount}
                            setAmount={setTotalDonationAmount}
                            onClick={myFunction}
                        />
                        <GiftTribute
                            errors={errors}
                            register={register}
                            getValues={getValues}
                            setValue={setValue}
                        />
                        <TransmittalTotals
                            errors={errors}
                            register={register}
                            watch={watch}
                            setValue={setValue}
                        />
                        {/* <DesignationInformaiton errors={errors} register={register} setValue={setValue} /> */}
                        <input type="submit" />
                    </form>
                    <DevTool control={control} /> {/* set up the dev tool */}
                </Container>
            </FormProvider>
        </>
    );
}
