import SecWireDesignations from "./SecWireDesignations";
import Security from "./Security";
import TransmittalTotals from "./TransmittalTotals";
import DonorInformation from "./DonorInformation";
import { Button, Container, TextField, Typography } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
    SubmitButton,
    SecurtityWireFillForm,
    ShowFillButton,
} from "../components/HelperFunctions";
import { Col, Row } from "react-bootstrap";
import UIFonlyContactInformation from "./UIFonlyContactInformation";

export default function SecWireDataEntry({
    formValues,
    setFormValues,
    showSecurities,
    submitURL,
}) {
    const methods = useForm({
        defaultValues: formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    const fillButton = () => {
        SecurtityWireFillForm(methods.setValue);
    };
    const onSubmit = (data) => {
        setFormValues(data);
        //console.table(data);
        navigate(submitURL);
    };

    return (
        <>
            {/* <InstructionsSecWire /> */}
            <FormProvider {...methods}>
                <Container className="pb-4">
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        {/* <Button onClick={fillButton}>Fill</Button> */}
                        {ShowFillButton() ? (
                            <Button onClick={fillButton}>Fill</Button>
                        ) : (
                            <></>
                        )}

                        <UIFonlyContactInformation trustType={"securityWire"} />

                        <DonorInformation showAnonymousDonorCheckBox={false} />
                        {showSecurities ? (
                            <>
                                <Security
                                    alwaysShowSecurityDeleteButtons={false}
                                    showSeeAttached={true}
                                />
                            </>
                        ) : (
                            <></>
                        )}

                        <SecWireDesignations />
                        <Typography
                            variant="h5"
                            component="h3"
                            className="mt-2 mr-0 mb-3 ml-0"
                        >
                            General Comments
                        </Typography>
                        <Row className="mb-3">
                            <Col sm={12}>
                                {/* Last is the comments field  */}
                                <TextField
                                    placeholder="Comments"
                                    label="Comments"
                                    {...methods.register("generalComments")}
                                    className="maxWidth"
                                />
                            </Col>
                        </Row>
                        <TransmittalTotals ignoreNonGiftChecked={true} />
                        <SubmitButton />
                    </form>
                    <DevTool control={methods.control} />{" "}
                    {/* set up the dev tool */}
                </Container>
            </FormProvider>
        </>
    );
}
