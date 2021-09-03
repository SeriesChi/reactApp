import React, {useEffect, useState}  from 'react';
import './navbar.css';
import { useHistory, withRouter } from 'react-router-dom';

function Navbar() {
    const history = useHistory();
    const getToken = localStorage.getItem("token");

    const handleClick = (urlPath) => {
        console.log(urlPath,"urlpath")
        if(urlPath === "logout"){
            localStorage.removeItem("token");
            // setActive("/signIn");
            // history.push("/signIn"); 
            // history.push("/signIn")
            window.location.href = "/signIn";
        } else {
            window.location.href = urlPath;
        }
    }
    
    // const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);
    // console.log(lastItem);


    

    return (
        <>
            <div>
                <div className = "flex">
                    <div 
                        className = {`nav-item ${window.location.pathname === "/" ? "activeColor" : "deactiveColor"} ${getToken ? "show-item":"hide-item" }`} 
                        // style={window.location.pathname === "/" ? activeColor : deactiveColor}  
                        onClick={()=> handleClick("/")}
                    >
                        Home
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/contact" ? "activeColor" : "deactiveColor"} ${getToken ? "show-item":"hide-item" }`}
                        // style={window.location.pathname === "/contact" ? activeColor : deactiveColor} 
                        onClick={()=> handleClick("/contact")}
                    >
                        Contact
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/aboutUs" ? "activeColor" : "deactiveColor"} ${getToken ? "show-item":"hide-item" }`}
                        // style={window.location.pathname === "/aboutUs" ? activeColor : deactiveColor} 
                        onClick={()=> handleClick("/aboutUs")}
                    >
                        About Us
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/signIn" ? "activeColor" : "deactiveColor"} ${getToken ? "hide-item":"show-item" }`}
                        onClick={()=> handleClick("/signIn")}
                    >
                        Sign In
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/signUp" ? "activeColor" : "deactiveColor"} ${getToken ? "hide-item":"show-item" }`}
                        onClick={()=> handleClick("/signUp")}
                    >
                        Sign Up
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/signUp" ? "activeColor" : "deactiveColor"} ${getToken ? "show-item":"hide-item" }`}
                        onClick={()=> handleClick("logout")}
                    >
                        Logout
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Navbar);