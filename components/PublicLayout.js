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
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
                      integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
                      crossOrigin="anonymous"/>
            </Head>

            { props.children }
        </div>
    );
};


export default PublicLayout;

