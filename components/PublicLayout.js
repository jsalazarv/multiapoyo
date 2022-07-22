import {useAuthContext} from "../hooks/useAuthContext";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";


const PublicLayout = (props) => {
    const {isAuthenticated} = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        isAuthenticated && router.push("/UserList");
    }, [isAuthenticated]);

    return (
        <div>
            <Head>
                <title>Multiapoyo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            { props.children }
        </div>
    );
};


export default PublicLayout;

