import Layout from "../components/Layout";

import {fetchUsers} from "./api/User";
import {useQuery} from "@tanstack/react-query";
import UserCard from "../components/UserCard";


const UserList = () => {
    const {data, isLoading} = useQuery(['userList'], fetchUsers);

    console.log(data);
    if(isLoading) {
        return "Loading..."
    }
    const {data: userList} = data;

    return (
        <Layout>
            <div style={{display: 'flex'}}>
                {userList.map((item, index) => <UserCard key={index} user={item}/>)}
            </div>
        </Layout>
    );
};

export default UserList;
