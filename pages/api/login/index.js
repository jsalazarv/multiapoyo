import axios from "axios";

const API = "https://reqres.in/api";

export const index = async (credentials) => {
    const { data } = await axios.post(`${API}/login`, credentials);
    return data;
};
