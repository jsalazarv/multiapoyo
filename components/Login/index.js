import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {authenticate} from "../../pages/api/Auth";
import {useAuthContext} from "../../hooks/useAuthContext";
import Title from "../common/Title";
import Caption from "../common/Caption";
import Button from "../common/Button";
import ErrorMessage from "../common/ErrorMessage";
import Input from "../common/Input";

const schema = yup.object({
    email: yup.string().required('This field is required').email('This field must be an email'),
    password: yup.string().required('This field is required').min(8, 'This field must have at least 8 characters'),
}).required();

export default function Login() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const {login, isLoading, isSuccess, isError, isAuthenticated} = useAuthContext();

    const onSubmit = async (credentials) => {
        try {
           await login(credentials);
        } catch (error) {
            setErrorMessage(error.response?.data?.error);
        }
    }

    return (
        <>
            <Title>Sign In</Title>

            <ErrorMessage hidden={!isError}>Authentication error: {errorMessage}</ErrorMessage>
            <Caption>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Caption>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} />
                <ErrorMessage hidden={!errors.email}>{errors.email?.message}</ErrorMessage>

                <Input {...register("password")} />
                <ErrorMessage hidden={!errors.password}>{errors.password?.message}</ErrorMessage>


                <Button type="submit" background="#2F6496" disabled={ isLoading }>Sign In</Button>

            </form>
        </>
    );
};
