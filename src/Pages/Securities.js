import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import Instructions from "../components/Instructions";
import { useNavigate } from "react-router-dom";
import SecWireDesignations from "../components/SecWireDesignations";

export default function Securities(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        navigate("/securitiesprint");
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Securities Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <Instructions />
            <FormProvider {...methods}>
                <SecWireDesignations
                    onSubmit={onSubmit}
                    showAnonymousDonorCheckBox={false}
                />
            </FormProvider>
        </>
    );
}
