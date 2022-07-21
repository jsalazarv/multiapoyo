import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required('This field is required').email('This field must be an email'),
    password: yup.string().required('This field is required').min(8, 'This field must have at least 8 characters'),
}).required();

export default function App() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} />
            <p>{errors.email?.message}</p>

            <input {...register("password")} />
            <p>{errors.password?.message}</p>

            <input type="submit" />
        </form>
    );
}
