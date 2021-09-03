import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute ({component:Component, redirectionPage, ...otherProps}){
    const token = localStorage.getItem("token");
    console.log(redirectionPage, "redirectionPage");
    return(
    <Route
        {...otherProps}
                render={(props) => {
                    if(token){
                        return <Component {...props} />
                    }else {
                        return <Redirect exact to="/signIn" />
                    }
                }}
            />
    );
}