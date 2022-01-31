import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const Trust = () => {
    const { register, handleSubmit, unregister } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Last Name</label>
            <input {...register("firstName")} />
            <label>First Name</label>
            <input {...register("lastName")} />
            <button
                type="button"
                onClick={() => {
                    unregister("lastName");
                }}
            >
                unregister lastName
            </button>
            <input type="submit" />
        </form>
    );
};

export default Trust;