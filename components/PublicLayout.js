import {useAuthContext} from "../hooks/useAuthContext";
import {useEffect} from "react";
import {useRouter} from "next/router";


const PublicLayout = (props) => {
    const {isAuthenticated} = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        isAuthenticated && router.push("/UserList");
    }, [isAuthenticated]);

    return (
        <div>
            { props.children }
        </div>
    );
};


export default PublicLayout;

