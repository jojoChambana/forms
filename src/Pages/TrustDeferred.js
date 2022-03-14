import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import TrustDeferredDataEntry from "../components/TrustDeferredDataEntry";

export default function TrustDeferred(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        console.table(data);
        console.log(data.trustBeneficiary);
        //navigate("/trustdeferredprint");
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Trust Deferred Transmittal Form </title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <FormProvider {...methods}>
            <TrustDeferredDataEntry 
                onSubmit={onSubmit}
                showAnonymousDonorCheckBox={false} 
            />
            </FormProvider>            
        </>
    );
}
