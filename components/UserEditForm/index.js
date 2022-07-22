import Avatar from "../common/Avatar";
import Title from "../common/Title";
import Caption from "../common/Caption";
import FormWrap from "../common/FormWrap";

export default function ({user}) {
    return (
        <FormWrap>
            <Avatar size="100" url={user?.avatar}/>
            <Title>{`${user?.first_name} ${user?.last_name}`}</Title>
            <Caption>{user?.email}</Caption>
        </FormWrap>
    );
}
