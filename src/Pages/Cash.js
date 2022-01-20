import { Container } from '@mui/material'
import React from 'react'
import { Row } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import NestedContactInformationInput from "../components/ContactInformation"
import NestedNameEmailInput from "../components/NameEmail";
import Instructions from '../components/Instructions'
import DepartmentCampus from '../components/DepartmentCampus'
import DonorInformation from '../components/DonorInformation'
import Address from '../components/Address'
import PublicityDropDown from '../components/PublicityDropDown'
import { useNavigate } from 'react-router-dom'
import DesignationInformaiton from '../components/DesignationInformaiton'

export default function Cash() {

    const navigate = useNavigate();
    const methods = useForm();
    const onSubmit = data => {
        navigate("/checkprint");
        console.table(data)

    };

    return (
        <>
            <Instructions />
            <FormProvider {...methods} >
                <Container>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Row className="mt-4">
                            <DepartmentCampus />
                            <NestedContactInformationInput />
                        </Row>
                        <Row>
                            <NestedNameEmailInput />
                        </Row>
                        <DonorInformation />
                        <Address prefix="donor" />
                        <PublicityDropDown />
                        <DesignationInformaiton />
                        <input type="submit" />
                    </form>
                </Container>
            </FormProvider>
        </>
    )
}
