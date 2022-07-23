import axios from "axios";

const API = "https://reqres.in/api";
const ALBUM = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
    const { data } = await axios.get(`${API}/users`);
    return data;
};

export const fetchUser = async (id) => {
    const { data } = await axios.get(`${API}/users/${id}`);
    return data;
};

export const fetchAlbumUser = async (id) => {
    const { data } = await axios.get(`${ALBUM}/users/${id}/albums`);
    return data;
};
