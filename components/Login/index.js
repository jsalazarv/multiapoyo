import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {authenticate} from "../../pages/api/Auth";
import {useMutation} from "@tanstack/react-query";

const schema = yup.object({
    email: yup.string().required('This field is required').email('This field must be an email'),
    password: yup.string().required('This field is required').min(8, 'This field must have at least 8 characters'),
}).required();

export default function Login() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const login = useMutation( (credentials) => authenticate(credentials));

    const onSubmit = async (credentials) => {
        try {
            const {token} = await login.mutateAsync(credentials);
            //TOD0: Set token in the store
        } catch (error) {
            setErrorMessage(error.response?.data?.error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} />
                <p>{errors.email?.message}</p>

                <input {...register("password")} />
                <p>{errors.password?.message}</p>

                <button type="submit" disabled={ login.isLoading }>Send</button>
                {login.isError && (
                    <p>
                        Authentication error: {errorMessage}
                    </p>
                )}
            </form>
        </>
    );
};
