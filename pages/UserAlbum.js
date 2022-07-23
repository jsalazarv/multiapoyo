import Layout from "../components/Layout";
import {useRouter} from "next/router";
import {useQuery} from "@tanstack/react-query";
import {fetchAlbumUser, fetchUser} from "./api/User";
import Avatar from "../components/common/Avatar";
import Title from "../components/common/Title";
import {useEffect, useState} from "react";
import Card from "../components/common/Card";
import CardContainer from "../components/common/CardContainer";


const UserAlbum = () => {
    const router = useRouter();
    const id = router.query["id"];
    const userQuery = useQuery(['user', id], () => fetchUser(id));
    const albumQuery = useQuery(['userAlbum', id], () => fetchAlbumUser(id));
    const [user, setUser] = useState({});
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        setUser(userQuery.data?.data);
    }, [userQuery]);

    useEffect(() => {
        setAlbums(albumQuery.data);
    }, [albumQuery]);

    return (
        <Layout>
            <div style={{display: "flex", alignItems: "center"}}>
                <Avatar size={80} url={user?.avatar}/>
                <Title pl={"10px"}>{user?.first_name}'s Albums</Title>
            </div>

            <CardContainer mt="50px">
                {albums && albums.map((item) => (
                    <Card mb="10px" key={item.id} maxWidth="250px">
                        <Avatar size={150} url={`https://picsum.photos/id/${item.id}/200/300`} tile/>
                        <Title fontSize="15px"> {item.title} </Title>
                    </Card>
                ))}
            </CardContainer>
        </Layout>
    );
}

export default UserAlbum;
