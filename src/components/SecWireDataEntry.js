import SecWireDesignations from "./SecWireDesignations";
import Security from "./Security";
import TransmittalTotals from "./TransmittalTotals";
import ContactInformation from "./ContactInformation";
import NameEmail from "./NameEmail";
import DonorInformation from "./DonorInformation";
import { Button, Container } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { SharedFillForm, SubmitButton } from "../components/HelperFunctions";

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
        SharedFillForm(methods.setValue);
    };
    const onSubmit = (data) => {
        setFormValues(data);
        navigate(submitURL);
    };

    return (
        <>
            <FormProvider {...methods}>
                <Container className="pb-4">
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Button onClick={fillButton}>Fill</Button>
                        <ContactInformation />
                        <NameEmail />
                        <DonorInformation showAnonymousDonorCheckBox={false} />
                        {showSecurities ? (
                            <Security
                                alwaysShowSecurtityDeleteButtons={false}
                            />
                        ) : (
                            <></>
                        )}

                        <SecWireDesignations />
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
