import Avatar from "../common/Avatar";
import Title from "../common/Title";
import Caption from "../common/Caption";
import Card from "../common/Card";
import Button from "../common/Button";
import CardActions from "../common/CardActions";
import {useState} from "react";
import router from "next/router";
import IconButton from "../common/IconButton";
import EditIcon from "../common/EditIcon";


export default function ({user, onEdit}) {
    const [isEdit, setIsEdit] = useState(false);

    const editHandler = () => {
        onEdit && onEdit(user);
    }

    const handleSeeAlbums = () => {
        router.push({
            pathname: 'UserAlbum',
            query: {id: user.id}
        });
    }

    const handleSeePosts = () => {
        router.push({
            pathname: 'UserPosts',
            query: {id: user.id}
        });
    }

    return (
        <Card maxWidthXs="350px" maxWidthSm="250px" maxWidthMd="300px" rounded mb="10px">
            <Avatar size={100} url={user?.avatar}/>
            <IconButton background="#02BDC1" fontSize="10px" size="30px" onClick={editHandler}>
                <i className="fas fa-eye"></i>
            </IconButton>
            <Title>{`${user?.first_name} ${user?.last_name}`}</Title>
            <Caption>{user?.email}</Caption>
            <CardActions>
                <Button background="#02BDC1" onClick={handleSeePosts}>See posts</Button>
                <Button background="#02BDC1" onClick={handleSeeAlbums}>See albums</Button>
            </CardActions>
        </Card>
    );
}
