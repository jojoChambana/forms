import { Container } from '@mui/material'
import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import ContactInformation from "../components/ContactInformation"
import NameEmail from "../components/NameEmail";
import Instructions from '../components/Instructions'
import DepartmentCampus from '../components/DepartmentCampus'
import DonorInformation from '../components/DonorInformation'
import Address from '../components/Address'
import PublicityDropDown from '../components/PublicityDropDown'
import { useNavigate } from 'react-router-dom'
import DesignationInformaiton from '../components/DesignationInformaiton'
import TotalDonationAmount from '../components/TotalDonationAmount'
import TransmittalTotals from '../components/TransmittalTotals'

export default function Cash(props) {

    const navigate = useNavigate();
    const methods = useForm();
    const onSubmit = data => {
        // const combinedValues = Object.assign(data);
        props.setFormValues(data);
        console.table(data);
        navigate("/cashprint");

    };

    return (
        <>
            <Instructions />
            <FormProvider {...methods} >
                <Container>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Row className="mt-4">
                            <DepartmentCampus />
                            {/* <ContactInformation /> */}
                        </Row>
                        {/* <Row>
                            <NameEmail />
                        </Row>
                        <DonorInformation />
                        <Address />
                        <PublicityDropDown /> */}
                        <TotalDonationAmount />
                        <DesignationInformaiton />
                        < TransmittalTotals />
                        <input type="submit" />
                    </form>
                </Container>
            </FormProvider>
        </>
    )
}
