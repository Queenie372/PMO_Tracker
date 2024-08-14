import React from 'react'
import { Navigate } from 'react-router-dom';

let isLoggedIn = localStorage.getItem("token");

const PublicRoute = (props) => {
    const { component: Component } = props;

    if (!isLoggedIn) {
        return (
            <Component {...props}/>
        );
    } else {
        return <Navigate to="/dashboard" />;
    }
};

export default PublicRoute;