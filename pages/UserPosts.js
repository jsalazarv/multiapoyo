import {useRouter} from "next/router";
import {useQuery} from "@tanstack/react-query";
import {fetchPostUser, fetchUser} from "./api/User";
import {useState, useEffect} from "react";
import Layout from "../components/Layout";
import Avatar from "../components/common/Avatar";
import Title from "../components/common/Title";
import Card from "../components/common/Card";
import CardContainer from "../components/common/CardContainer";
import Caption from "../components/common/Caption";

const UserPosts = () => {
    const router = useRouter();
    const id = router.query["id"];
    const userQuery = useQuery(['user', id], () => fetchUser(id));
    const postsQuery = useQuery(['userPosts', id], () => fetchPostUser(id));
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);


    const deletePost = (id) => {
        const index = posts.findIndex((item) => item.id === id);
        const newPostList = [...posts];

        if(index !== -1 ) {
            newPostList.splice(index, 1);
            setPosts(newPostList);
        }
    }


    useEffect(() => {
        setUser(userQuery.data?.data);
    }, [userQuery.data]);

    useEffect(() => {
        setPosts(postsQuery.data);
        console.log("Use effect post");
    }, [postsQuery.data]);

    return (
        <Layout>
            <div style={{display: "flex", alignItems: "center"}}>
                <Avatar size={80} url={user?.avatar}/>
                <Title pl={"10px"}>{user?.first_name}'s Posts</Title>
            </div>

            <CardContainer mt="50px">
                {posts && posts.map((item) => (
                    <Card mb="10px" key={item.id} maxWidthMd="250px">
                        <button onClick={() => deletePost(item.id)}>Eliminar</button>
                        <Avatar size={150} url={`https://picsum.photos/id/${item.id}/200/300`} tile/>
                        <Title fontSize="15px"> {item.title} </Title>
                        <Caption>{item.body}</Caption>
                    </Card>
                ))}
            </CardContainer>
        </Layout>
    );
}

export default UserPosts;
