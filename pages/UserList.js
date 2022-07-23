import Layout from "../components/Layout";

import {fetchUsers} from "./api/User";
import {useQuery} from "@tanstack/react-query";
import UserCard from "../components/UserCard";
import Title from "../components/common/Title";
import CardContainer from "../components/common/CardContainer";
import {useEffect, useState} from "react";
import {ToggleSidebar} from "../components/Sidebar";
import UserEditForm from "../components/UserEditForm";


const UserList = () => {
    const {data, isLoading} = useQuery(['userList'], fetchUsers);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userList, setUserList] = useState([]);

    const toggleSidebar = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const onEdit = (user) => {
        toggleSidebar();
        setSelectedUser(user);
    }

    const setNewData = (user) => {
        const userIndex = userList.findIndex((item) => item.id === user.id);

        userList[userIndex] = user;
        setUserList([...userList]);

        setIsDrawerOpen(false);
    }

    useEffect(() => {
        data && setUserList(data.data || []);
    }, [data]);

    if(isLoading) {
        return "Loading..."
    }

    return (
        <Layout>
            <div style={{marginBottom: "50px"}}>
                <Title> Users </Title>
            </div>

            <ToggleSidebar open={isDrawerOpen} onChangeState={setIsDrawerOpen}>
                <UserEditForm user={selectedUser} onSubmit={setNewData}></UserEditForm>
            </ToggleSidebar>

            <CardContainer colsXl="3" colsSm="3">
                {
                    userList.map((item, index) => <UserCard key={index} user={item} onEdit={onEdit}/>)
                }
            </CardContainer>
        </Layout>
    );
};

export default UserList;
