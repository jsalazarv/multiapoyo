import axios from "axios";

const API = "https://reqres.in/api";

export const fetchUsers = async () => {
    const { data } = await axios.get(`${API}/users`);
    return data;
};
