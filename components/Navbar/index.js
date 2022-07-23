import {useAuthContext} from "../../hooks/useAuthContext";
import NavbarContainer from "../common/NavbarContainer";
import NavLink from "../common/NavLink";
import Logo from "../common/Logo";
import Title from "../common/Title";
import NavButton from "../common/NavButton";
import router from "next/router";

export default function ({children}) {
    const {isAuthenticated, logout} = useAuthContext();
    const backToHome = () => {
        router.push('/UserList');
    }

    return (
        <NavbarContainer>
            <div style={{display: "flex", alignItems: "center"}}>
                <Logo size={30}/>
                <Title fontSize="1rem" pl="10px">Multiapoyo</Title>
            </div>
            <div>
                <NavLink href="#" onClick={backToHome}>Home</NavLink>
                |
                <NavButton href="#" onClick={logout}>Logout</NavButton>
            </div>
        </NavbarContainer>
    );
}
