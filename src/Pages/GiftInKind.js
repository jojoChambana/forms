import { Helmet } from "react-helmet";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CashCheckGIKDataEntry from "../components/CashCheckGIKDataEntry";
import { parseNum } from "../components/HelperFunctions";
import InstructionsGIK from "../components/InstructionsGIK";

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
        console.table(data);
        console.log(data.giftInKind);
        if (parseNum(data.gikTotal) === parseNum(data.overallTotal)) {
            navigate("/giftinkindprint");
        }
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
                    showAnonymousDonorCheckBox={false}
                    formType={"GiftInKind"}
                    onSubmit={onSubmit}
                />
            </FormProvider>
        </>
    );
}
