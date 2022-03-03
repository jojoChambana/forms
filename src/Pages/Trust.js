import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import Instructions from "../components/Instructions";
import { useNavigate } from "react-router-dom";

import TrustGiftInformation from "../components/TrustGiftInformation";

export default function Trust(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        navigate("/trustprint");
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Trust Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <Instructions />
            <FormProvider {...methods}>
            <TrustGiftInformation 
                onSubmit={onSubmit}
                showAnonymousDonorCheckBox={false} 
            />
            </FormProvider>            
        </>
    );
}
