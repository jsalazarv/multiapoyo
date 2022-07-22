import {useAuthContext} from "../hooks/useAuthContext";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Layout = (props) => {
    const {isAuthenticated, logout} = useAuthContext();
    const router = useRouter();


    useEffect(() => {
        if(!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated]);

    if(!isAuthenticated) {
        //TODO: return loader component
        return "Loading..."
    }

    return (
        <div>
            <nav>
                Navbar
                <button onClick={logout}>Logout</button>
            </nav>

            {props.children}

            <footer>
                Footer
            </footer>
        </div>
    );
};


export default Layout;

