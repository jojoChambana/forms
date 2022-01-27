
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Button } from "react-bootstrap";

import { Controller, useForm } from "react-hook-form";


export default function Trust() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });

    //const onSubmit = (values) => console.log(JSON.stringify(values));
    const onSubmit = (values) => console.table(values);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                control={control}
                name="checkbox"
                render={({ field: { value, onChange } }) => (
                    // Checkbox accepts its value as `checked`
                    // so we need to connect the props here
                    <FormControlLabel
                        control={<Checkbox checked={value} onChange={onChange} />}
                        label="I am a second checkbox"
                    />
                )}
            />

            <br />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}
