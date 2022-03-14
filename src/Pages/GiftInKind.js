import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import InstructionsGIK from "../components/InstructionsGIK";
import { useNavigate } from "react-router-dom";

import CashCheckGIKDataEntry from "../components/CashCheckGIKDataEntry";

export default function GiftInKind(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        navigate("/giftinkindprint");
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Gift in Kind Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <InstructionsGIK />
            <FormProvider {...methods}>
            <CashCheckGIKDataEntry 
                onSubmit={onSubmit}
                showAnonymousDonorCheckBox={false} 
                formType="GiftInKind"
            />
            </FormProvider>

        </>
    );
}
