import axios from "axios";

const API = "https://reqres.in/api";
const TYPICODE_API = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
    const { data } = await axios.get(`${API}/users`);
    return data;
};

export const fetchUser = async (id) => {
    const { data } = await axios.get(`${API}/users/${id}`);
    return data;
};

export const fetchAlbumUser = async (id) => {
    const { data } = await axios.get(`${TYPICODE_API}/users/${id}/albums`);
    return data;
};

export const fetchPostUser = async (id) => {
    const { data } = await axios.get(`${TYPICODE_API}/users/${id}/posts`);
    return data;
};
