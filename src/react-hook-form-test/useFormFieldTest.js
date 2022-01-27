import React from 'react';
import { DevTool } from "@hookform/devtools";
import { useForm } from 'react-hook-form';
export default function useFormFieldTest() {
    const { register, control, handleSubmit } = useForm({
        mode: "onChange",
    });
    return <>
        <form onSubmit={handleSubmit(d => console.log(d))}>

            <label>Test</label>
            <input {...register("test")} />

            <input type="submit" />
        </form>

        <DevTool control={control} /> {/* set up the dev tool */}
    </>;
}
