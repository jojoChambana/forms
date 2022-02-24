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

import { SharedFillForm } from "../components/HelperFunctions";

export default function SecWireDataEntry({
    formValues,
    setFormValues,
    showSecurities,
    submitURL,
}) {
    const {
        register,
        control,
        setValue,
        getValues,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    const fillButton = () => {
        SharedFillForm(setValue);
    };
    const onSubmit = (data) => {
        setFormValues(data);
        navigate(submitURL);
    };

    return (
        <>
            <FormProvider>
                <Container className="pb-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Button onClick={fillButton}>Fill</Button>
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
                            showAnonymousDonorCheckBox={false}
                        />
                        {showSecurities ? (
                            <Security
                                register={register}
                                control={control}
                                getValues={getValues}
                            />
                        ) : (
                            <></>
                        )}

                        <SecWireDesignations
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
                            ignoreNonGiftChecked={true}
                        />
                        <input type="submit" />
                    </form>
                    <DevTool control={control} /> {/* set up the dev tool */}
                </Container>
            </FormProvider>
        </>
    );
}
