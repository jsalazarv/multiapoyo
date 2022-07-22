import {useAuthContext} from "../../hooks/useAuthContext";
import NavbarContainer from "../common/NavbarContainer";
import NavLink from "../common/NavLink";
import Logo from "../common/Logo";
import Title from "../common/Title";

export default function ({children}) {
    const {isAuthenticated, logout} = useAuthContext();

    return (
        <NavbarContainer>
            <div style={{display: "flex", alignItems: "center"}}>
                <Logo size={30}/>
                <Title fontSize="1rem" pl="10px">Multiapoyo</Title>
            </div>
            <NavLink href="#" onClick={logout}>Logout</NavLink>
        </NavbarContainer>
    );
}
