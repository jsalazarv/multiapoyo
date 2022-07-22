import React, {useState} from "react";
import PublicLayout from "../components/PublicLayout";
import Index from "../components/Login";
import LoginContainer from "../components/common/LoginContainer";
import Card from "../components/common/Card";

export default function App() {
    return (
        <PublicLayout>
            <LoginContainer>
                <Card>
                    <Index/>
                </Card>
            </LoginContainer>
        </PublicLayout>
    );
};
