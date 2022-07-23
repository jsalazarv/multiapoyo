import Avatar from "../common/Avatar";
import Title from "../common/Title";
import Caption from "../common/Caption";
import Card from "../common/Card";
import Button from "../common/Button";
import CardActions from "../common/CardActions";
import {useState} from "react";
import router from "next/router";


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

    return (
        <Card maxWidthXs="350px" maxWidthSm="250px" maxWidthMd="300px" rounded mb="10px">
            <button onClick={editHandler}>edit</button>
            <Avatar size={100} url={user?.avatar}/>
            <Title>{`${user?.first_name} ${user?.last_name}`}</Title>
            <Caption>{user?.email}</Caption>
            <CardActions>
                <Button>See posts</Button>
                <Button onClick={handleSeeAlbums}>See albums</Button>
            </CardActions>
        </Card>
    );
}
