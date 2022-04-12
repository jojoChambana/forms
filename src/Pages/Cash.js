import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm, FormProvider } from "react-hook-form";
import InstructionsCash from "../components/InstructionsCash";
import { useNavigate } from "react-router-dom";

import CashCheckGIKDataEntry from "../components/CashCheckGIKDataEntry";

export default function Cash(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        navigate("/cashprint");
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Cash Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <InstructionsCash />
            <FormProvider {...methods}>
                <CashCheckGIKDataEntry
                    onSubmit={onSubmit}
                    showAnonymousDonorCheckBox={true}
                    formType="Cash"
                />
            </FormProvider>
        </HelmetProvider>
    );
}
