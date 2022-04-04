import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import InstructionsCashCheckGIK from "../components/InstructionsCashCheckGIK";
import { useNavigate } from "react-router-dom";

import CashCheckGIKDataEntry from "../components/CashCheckGIKDataEntry";
import InstructionsCheck from "../components/InstructionsCheck";

export default function Check(props) {
    const methods = useForm({
        defaultValues: props.formValues,
        mode: "onChange",
    });

    const navigate = useNavigate();

    function removeEmptyFields(data) {}

    const onSubmit = (data) => {
        removeEmptyFields(data);
        props.setFormValues(data);
        navigate("/checkprint");
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>U of I Foundation | Check Transmittal Form</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <InstructionsCheck />
            <FormProvider {...methods}>
                <CashCheckGIKDataEntry
                    onSubmit={onSubmit}
                    showAnonymousDonorCheckBox={false}
                    formType="Check"
                />
            </FormProvider>
        </>
    );
}
