import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InstructionsSecWire from "../components/InstructionsSecWire";

import TrustDataEntry from "../components/TrustDataEntry";

export default function Trust(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    function removeEmptyFields(data) {}

    const navigate = useNavigate();

    const onSubmit = (data) => {
        const objCount =
            (data.security?.length || 0) +
            (data.trustWire?.length || 0) +
            (data.trustCheck?.length || 0) +
            (data.giftInKind?.length || 0);
        if (objCount > 0) {
            removeEmptyFields(data);
            props.setFormValues(data);
            navigate("/trustprint");
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Trust Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <InstructionsSecWire />
            <FormProvider {...methods}>
                <TrustDataEntry
                    onSubmit={onSubmit}
                    showAnonymousDonorCheckBox={false}
                    formType={"Trust"}
                />
            </FormProvider>
        </>
    );
}
