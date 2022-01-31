import { Container } from '@mui/material'
import React, { useState } from 'react'
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from 'react-hook-form'
import ContactInformation from "../components/ContactInformation"
import NameEmail from "../components/NameEmail";
import Instructions from '../components/Instructions'
import DepartmentCampus from '../components/DepartmentCampus'
import DonorInformation from '../components/DonorInformation'
import Address from '../components/Address'
import GiftTribute from '../components/GiftTribute'
import PublicityDropDown from '../components/PublicityDropDown'
import { useNavigate } from 'react-router-dom'
// import DesignationInformaiton from '../components/DesignationInformaiton'
import TotalDonationAmount from '../components/TotalDonationAmount'
import TransmittalTotals from '../components/TransmittalTotals'

// import * as yup from "yup";
// import { useCallback } from 'react';

// const useYupValidationResolver = validationSchema =>
//     useCallback(
//         async data => {
//             try {
//                 const values = await validationSchema.validate(data, {
//                     abortEarly: false
//                 });

//                 return {
//                     values,
//                     errors: {}
//                 };
//             } catch (errors) {
//                 return {
//                     values: {},
//                     errors: errors.inner.reduce(
//                         (allErrors, currentError) => ({
//                             ...allErrors,
//                             [currentError.path]: {
//                                 type: currentError.type ?? "validation",
//                                 message: currentError.message
//                             }
//                         }),
//                         {}
//                     )
//                 };
//             }
//         },
//         [validationSchema]
//     );

// const validationSchema = yup.object({
//     contactFullName: yup.string().required("Required"),
//     contactPhone: yup.string({ pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i }).required("Required")
// });

export default function Cash(props) {
    // const resolver = useYupValidationResolver(validationSchema);
    // const { register, control, setValue, watch, formState: { errors }, handleSubmit, data } = useForm({
    const { register, control, setValue, watch, formState: { errors }, handleSubmit } = useForm({
        defaultValues: props.formValues,
        // resolver,
        mode: "onChange",
    });

    const navigate = useNavigate();


    const { totalDonationAmount, setTotalDonationAmount } = useState(0);
    // const { opportunityAmount, setOpportunityAmount } = useState(0);
    // const { totalDesignationAmount, designationAmount } = useState();

    function removeEmptyFields(data) {

    }


    const onSubmit = data => {
        removeEmptyFields(data);
        props.setFormValues(data);
        navigate("/cashprint");
        console.table(data)
    };

    return (
        <>
            <Instructions />
            <FormProvider>
                <Container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DepartmentCampus register={register} />
                        <ContactInformation errors={errors} register={register} />
                        <NameEmail errors={errors} register={register} />
                        <DonorInformation errors={errors} register={register} />
                        <Address errors={errors} register={register} />
                        <PublicityDropDown errors={errors} register={register} />
                        <TotalDonationAmount errors={errors} register={register} amount={totalDonationAmount} setAmount={setTotalDonationAmount} />
                        <GiftTribute errors={errors} register={register} />
                        <TransmittalTotals errors={errors} register={register} watch={watch} setValue={setValue} />
                        {/* <DesignationInformaiton errors={errors} register={register} setValue={setValue} /> */}
                        <input type="submit" />
                    </form>
                    <DevTool control={control} /> {/* set up the dev tool */}
                </Container>
            </FormProvider>
        </>
    )
}
