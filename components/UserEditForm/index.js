import Avatar from "../common/Avatar";
import Title from "../common/Title";
import Caption from "../common/Caption";
import FormWrap from "../common/FormWrap";
import {useEffect, useState} from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import IconButton from "../common/IconButton";


export default function ({user, onSubmit}) {
    const [editUser, setEditUser] = useState(true);
    const [name, setName] = useState(user?.first_name);
    const [lastName, setLastName] = useState(user?.last_name);
    const [email, setEmail] = useState(user?.email);

    const editHandler = () => {
        setEditUser(!editUser);
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const saveChanges = () => {
        editHandler();

        const newUserData = {
            ...user,
            first_name:  name,
            last_name: lastName,
            email: email,
        }

        onSubmit && onSubmit(newUserData);
    }

    useEffect(() => {
        setName(user?.first_name);
        setLastName(user?.last_name);
        setEmail(user?.email);
    }, [user]);


    return (
        <FormWrap>
            <div>
                <Avatar size="100" url={user?.avatar}/>
            </div>
            <div>
                {editUser && (
                    <IconButton background="#02BDC1" cfontSize="10px" size="30px" onClick={editHandler}>
                        <i className="fas fa-edit"></i>
                    </IconButton>
                )}
                {editUser && <Title>{`${ name } ${lastName}`}</Title>}

                {!editUser && <Input placeholder="Name" onChange={handleName} value={name}/>}
                {!editUser && <Input placeholder="Last name" onChange={handleLastName} value={lastName}/>}

                {editUser && <Caption>{email}</Caption>}
                {!editUser && <Input placeholder="Email" onChange={handleEmail} value={email}></Input>}
                {!editUser && <Button background="#02BDC1" onClick={saveChanges}>Guardar</Button>}
            </div>
        </FormWrap>
    );
}
