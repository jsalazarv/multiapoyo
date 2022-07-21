import React, {useState} from "react";
import PublicLayout from "../components/PublicLayout";
import Login from "../components/Login/login";

export default function App() {
    return (
        <PublicLayout>
            <Login/>
        </PublicLayout>
    );
};
