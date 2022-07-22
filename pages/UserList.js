import Layout from "../components/Layout";

import {fetchUsers} from "./api/User";
import {useQuery} from "@tanstack/react-query";
import UserCard from "../components/UserCard";
import Title from "../components/common/Title";
import CardContainer from "../components/common/CardContainer";

import Button from "../components/common/Button";
import {useState} from "react";
import Avatar from "../components/common/Avatar";
import {ToggleSidebar} from "../components/Sidebar";


const UserList = () => {
    const {data, isLoading} = useQuery(['userList'], fetchUsers);
    const [toggle, setToggle] = useState(false);

    if(isLoading) {
        return "Loading..."
    }
    const {data: userList} = data

    const toggleSidebar = () => {
        setToggle(!toggle);
    }

    const TitleSidebar = <Title>User modal</Title>;

    return (
        <Layout>
            <div style={{marginBottom: "50px"}}>
                <Title> Users </Title>
            </div>

            <ToggleSidebar open={toggle} onChangeState={setToggle} header={TitleSidebar}>
                <ul>
                    <li><a className="sd-link">Menu Item 1</a></li>
                    <li><a className="sd-link">Menu Item 2</a></li>
                    <li><a className="sd-link">Menu Item 3</a></li>
                    <li><a className="sd-link">Menu Item 4</a></li>
                    <li><a className="sd-link">Menu Item 5</a></li>
                    <li><a className="sd-link">Menu Item 6</a></li>
                    <li><a className="sd-link">Menu Item 7</a></li>
                    <li><a className="sd-link">Menu Item 8</a></li>
                </ul>
            </ToggleSidebar>

            <Button onClick={toggleSidebar}>Toggle Sidebar {JSON.stringify(toggle)}</Button>

            <CardContainer>
                {userList.map((item, index) => <UserCard key={index} user={item}/>)}
            </CardContainer>
        </Layout>
    );
};

export default UserList;
