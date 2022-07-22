import Avatar from "../common/Avatar";
import Title from "../common/Title";
import Caption from "../common/Caption";
import Card from "../common/Card";
import Button from "../common/Button";
import CardActions from "../common/CardActions";
import {useState} from "react";


export default function ({user, onEdit}) {
    const [isEdit, setIsEdit] = useState(onEdit);

    const editHandler = () => {
        onEdit && onEdit(user);
    }

    return (
        <Card rounded>
            <button onClick={editHandler}>edit</button>
            <Avatar size={100} url={user?.avatar}/>
            <Title>{`${user?.first_name} ${user?.last_name}`}</Title>
            <Caption>{user?.email}</Caption>
            <CardActions>
                <Button>See posts</Button>
                <Button>See albums</Button>
            </CardActions>
        </Card>
    );
}
