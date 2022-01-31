import { useForm } from "react-hook-form";
import FieldArray from "../components/FieldArray";
import { Container, Typography } from "@mui/material";

const defaultValues = {
    test: [
        {
            name: "useFieldArray1",
            nestedArray: [{ field1: "field1" }]
        }
    ]
};
export default function Check() {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        // reset,
        setValue
    } = useForm({
        defaultValues
    });
    const onSubmit = (data) => console.log("data", data);

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h5" component="h3">Designation Information</Typography>
                <FieldArray
                    {...{ control, register, defaultValues, getValues, setValue, errors }}
                />

                {/* <button type="button" onClick={() => reset(defaultValues)}>
                    Reset
                </button> */}

                <input type="submit" />
            </form>
        </Container>
    );
}

