import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../providers/AuthContextProvider";
import {useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import {setToken} from "../store/auth";
import {authenticate} from "../pages/api/Auth";

export const useAuthContext = () => {
    const authState = useContext(AuthContext);
    const dispatch = useDispatch();
    const isAuthenticated = authState.token !== null;
    const loginMutation = useMutation( (credentials) => authenticate(credentials));
    const {isLoading, isSuccess, isError} = loginMutation;

    const logout = () => {
        dispatch(setToken(null));
    };

    const login = async (credentials) => {
        try {
            const {token} = await loginMutation.mutateAsync(credentials);

            dispatch(setToken(token));
        } catch (error) {
            throw error;
        }
    }

    return { isAuthenticated, login, logout, isLoading, isSuccess, isError };
};
