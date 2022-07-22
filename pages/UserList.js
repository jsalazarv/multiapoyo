import Layout from "../components/Layout";

import {fetchUsers} from "./api/User";
import {useQuery} from "@tanstack/react-query";
import UserCard from "../components/UserCard";
import Title from "../components/common/Title";
import CardContainer from "../components/common/CardContainer";
import {useState} from "react";
import {ToggleSidebar} from "../components/Sidebar";
import UserEditForm from "../components/UserEditForm";


const UserList = () => {
    const {data, isLoading} = useQuery(['userList'], fetchUsers);
    const [toggle, setToggle] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    if(isLoading) {
        return "Loading..."
    }
    const {data: userList} = data

    const toggleSidebar = () => {
        setToggle(!toggle);
    }

    const TitleSidebar = <Title>User modal</Title>;

    const onEdit = (user) => {
        toggleSidebar();
        setSelectedUser(user);
    }

    return (
        <Layout>
            <div style={{marginBottom: "50px"}}>
                <Title> Users </Title>
            </div>

            <ToggleSidebar open={toggle} onChangeState={setToggle} header={TitleSidebar}>
                <UserEditForm user={selectedUser}></UserEditForm>
            </ToggleSidebar>

            <CardContainer>
                {
                     userList.map((item, index) => <UserCard key={index} user={item} onEdit={onEdit}/>)
                }
            </CardContainer>
        </Layout>
    );
};

export default UserList;
