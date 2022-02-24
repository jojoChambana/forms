import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Instructions from "../components/Instructions";
import { useNavigate } from "react-router-dom";

import CashCheckGIKDataEntry from "../components/CashCheckGIKDataEntry";

export default function Cash(props) {
    const {
        register,
        control,
        setValue,
        getValues,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm({
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
            <Instructions />
            <CashCheckGIKDataEntry
                onSubmit={onSubmit}
                getValues={getValues}
                setValue={setValue}
                errors={errors}
                register={register}
                control={control}
                watch={watch}
                handleSubmit={handleSubmit}
                showAnonymousDonorCheckBox={true}
            />
        </HelmetProvider>
    );
}
