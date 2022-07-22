import Avatar from "../common/Avatar";
import Title from "../common/Title";
import Caption from "../common/Caption";
import Card from "../common/Card";
import Button from "../common/Button";
import CardActions from "../common/CardActions";

export default function ({user}) {
    return (
        <Card rounded>
            <Avatar size={100} url={user.avatar}/>
            <Title>{user.first_name}</Title>
            <Caption>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cum cupiditate dicta distinctio
                ducimus eaque ex harum illo inventore ipsa itaque iusto, laborum
            </Caption>
            <CardActions>
                <Button>See posts</Button>
                <Button>See albums</Button>
            </CardActions>
        </Card>
    );
}
