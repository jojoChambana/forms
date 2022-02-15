import { Helmet } from "react-helmet";
import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";
import ContactInformation from "../components/ContactInformation";
import NameEmail from "../components/NameEmail";
import Instructions from "../components/Instructions";
import DepartmentCampus from "../components/DepartmentCampus";
import DonorInformation from "../components/DonorInformation";
import GiftTribute from "../components/GiftTribute";
import { useNavigate } from "react-router-dom";
import DesignationInformation from "../components/DesignationInformation";
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
        mode: "onChange",
    });

    const navigate = useNavigate();

    const { totalDonationAmount, setTotalDonationAmount } = useState(0);

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        // console.log("before navigate");
        navigate("/cashprint");
        // console.table(data);
        // console.log(data.designation);
        // console.log("I have arrived");
    };

    const fillButton = () => {
        setValue("campusLocation", "Chicago");

        setValue("contactFullName", "Thomas Jones");
        setValue("contactPhone", "(555)-867-5309");
        setValue("contactEmail", "tjones@gmail.com");
        setValue("collegeName", "Fine Arts");
        setValue("departmentName", "English");
        setValue("donationDate", "02-10-2022"); // Not sure about this one
        setValue("preparedBy", "Ted Logan");
        setValue("unitReferenceNumber", "");
        setValue("donorUnknown", false);

        setValue("donorDomesticAddressNewDonor", false);
        setValue("donorDomesticAddressNewAddress", false);
        setValue("tedConstituentId", "4567788");
        setValue("organizationDonorName", "The Jones family");

        setValue("donorDomesticAddress", "2112 S. Rush St.");
        setValue("donorDomesticAddressCity", "Chicago");
        setValue("donorDomesticAddressState", "IL");
        setValue("donorDomesticAddressZipCode", "61111");

        setValue("donorForeignAddressCheckbox", false);

        setValue("donorForeignAddress", "1234 Main St.");
        setValue("donorForeignAddressCity", "Berlin");
        setValue("donorForeignAddressProvinceRegion", "Bavaria");
        setValue("donorForeignAddressCountry", "Germany");
        setValue("donorForeignAddressPostalCode", 80331);

        setValue("publicityCode", "No Restrictions");

        setValue("tributeChecked", false);

        setValue("giftTribute", "In memory of"); // Check Bill's code pertaining to checkboxes

        setValue("deceasedFullName", "Dan Doe");

        setValue("tributeForeignAddressCheckbox", false);
        setValue("inMemoryNewAddress", false);

        setValue("inMemoryNewAddress", "3215 Tandy");

        setValue("inHonorTedID", "679856");
        setValue("honoreeFullName", "");

        setValue("tributeDomesticAddress", "123 Main Street");
        setValue("tributeDomesticAddressCity", "Burlington");
        setValue("tributeDomesticAddressState", "IA");
        setValue("tributeDomesticAddressZipCode", "42153");

        setValue("tributeForeignAddress", "37 Appleton Rd");
        setValue("tributeForeignAddressCity", "Calgary");
        setValue("tributeForeignAddressProvinceRegion", "AB");
        setValue("tributeForeignAddressCountry", "Canada");
        setValue("tributeForeignAddressPostalCode", "T2G");

        setValue("designationPhoneNumber", "555-555-55555");
        setValue("designationEmail", "jdandy@gardenhills.com");

        setValue("designation.0.newDesignationRequestedChecked", false);
        setValue("NonGiftCheckbox.0", false);

        setValue("designation.0.tedDesignationId", "68137");
        setValue("designation.0.tedDesignationTitle", "The first designation");
        setValue("designation.0.designationGiftAmount", 3000);

        setValue("designation.0.designationNonGiftAmount", 0);
        setValue("designation.0.designationTotalAmount", 3000);

        setValue("designation.0.pledgeRevenueId", "9739185");

        setValue(
            "designation.0.departmentContactEmail",
            "info@designation1.com"
        );
        setValue("designation.0.departmentContact", "John Doe");

        setValue("OpportunityCheckbox.0", false);

        setValue("designation.0.tedHouseholdId", "657954");
        setValue("designation.0.tedHouseholdName", "The Doe Household");
        setValue("designation.0.tedPlanName", "The Doe Plan");
        setValue("designation.0.tedOpportunityAmount", 22000);
        setValue("designation.0.actualAskDate", "01-22-2022");
        setValue("designation.0.primaryPlanManager", "Tom Smith");
        setValue(
            "designation.0.designationAdditionalComments",
            "This is a designation additional comment"
        );
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Cash Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <Instructions />
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
                        />
                        <input type="submit" />
                    </form>
                    <DevTool control={control} /> {/* set up the dev tool */}
                </Container>
            </FormProvider>
        </>
    );
}
