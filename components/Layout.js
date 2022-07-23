import {useAuthContext} from "../hooks/useAuthContext";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Navbar from "./Navbar";
import Container from "./common/Container";
import Head from "next/head";
import Sidebar from "./common/Sidebar";

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
            <Head>
                <title>Multiapoyo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
                      integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
                      crossOrigin="anonymous"/>
            </Head>
            <Navbar/>

            <Container>
                {props.children}
            </Container>
        </div>
    );
};


export default Layout;

