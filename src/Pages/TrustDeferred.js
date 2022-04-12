import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InstructionsSecWire from "../components/InstructionsSecWire";

import TrustDeferredDataEntry from "../components/TrustDeferredDataEntry";

export default function TrustDeferred(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    function removeEmptyFields(data) {}

    const navigate = useNavigate();

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        console.table(data);
        navigate("/trustdeferredprint");
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    U of I Foundation | Trust Deferred Transmittal Form{" "}
                </title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            {/* <InstructionsSecWire /> */}
            <FormProvider {...methods}>
                <TrustDeferredDataEntry
                    onSubmit={onSubmit}
                    showAnonymousDonorCheckBox={false}
                />
            </FormProvider>
        </>
    );
}
