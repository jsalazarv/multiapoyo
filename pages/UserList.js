import Layout from "../components/Layout";

import {fetchUsers} from "./api/User";
import {useQuery} from "@tanstack/react-query";
import UserCard from "../components/UserCard";
import Title from "../components/common/Title";
import CardContainer from "../components/common/CardContainer";


const UserList = () => {
    const {data, isLoading} = useQuery(['userList'], fetchUsers);

    if(isLoading) {
        return "Loading..."
    }
    const {data: userList} = data;

    return (
        <Layout>
            <div style={{marginBottom: "50px"}}>
                <Title> Users </Title>
            </div>
            <CardContainer>
                {userList.map((item, index) => <UserCard key={index} user={item}/>)}
            </CardContainer>
        </Layout>
    );
};

export default UserList;
