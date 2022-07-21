import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {index} from "./api/login";

const schema = yup.object({
    email: yup.string().required('This field is required').email('This field must be an email'),
    password: yup.string().required('This field is required').min(8, 'This field must have at least 8 characters'),
}).required();

export default function App() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (credentials) => {
        setIsLoading(true);
        try {
            await index(credentials);

        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} />
                <p>{errors.email?.message}</p>

                <input {...register("password")} />
                <p>{errors.password?.message}</p>

                <input type="submit" disabled={ isLoading }/>
                {error && (
                    <p>
                        Authentication error: {error.message}
                    </p>
                )}
            </form>
        </div>
    );
};
