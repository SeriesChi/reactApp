import React, {useEffect, useState}  from 'react';
import './navbar.css';
import { useHistory, withRouter } from 'react-router-dom';

function Navbar(props) {
    const history = useHistory()
    // const thePath = window.location.pathname;
    // console.log(thePath, "path");

    // const [active, setActive] = useState();

    // useEffect(() => {
    //    console.log(window.location.pathname, "url path"); 
    //    setActive(window.location.pathname);
    // }, [])

    const handleClick = (urlPath) => {
        console.log(urlPath,"urlpath")
        if(urlPath === "logout"){
            localStorage.removeItem("token");
            // setActive("/signIn");
            // history.push("/signIn"); 
            history.push("/signIn")
            window.location.reload("/signIn")
        } else {
            // setActive(urlPath);
            // window.location.reload(urlPath)
            history.push(urlPath); 
        }
    }
    
    // const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);
    // console.log(lastItem);


    

    return (
        <>
            <div>
                <div className = "flex">
                    <div 
                        className = {`nav-item ${window.location.pathname === "/" ? "activeColor" : "deactiveColor"} ${props.getToken ? "show-item":"hide-item" }`} 
                        // style={window.location.pathname === "/" ? activeColor : deactiveColor}  
                        onClick={()=> handleClick("/")}
                    >
                        Home
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/contact" ? "activeColor" : "deactiveColor"} ${props.getToken ? "show-item":"hide-item" }`}
                        // style={window.location.pathname === "/contact" ? activeColor : deactiveColor} 
                        onClick={()=> handleClick("/contact")}
                    >
                        Contact
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/aboutUs" ? "activeColor" : "deactiveColor"} ${props.getToken ? "show-item":"hide-item" }`}
                        // style={window.location.pathname === "/aboutUs" ? activeColor : deactiveColor} 
                        onClick={()=> handleClick("/aboutUs")}
                    >
                        About Us
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/signIn" ? "activeColor" : "deactiveColor"} ${props.getToken ? "hide-item":"show-item" }`}
                        onClick={()=> handleClick("/signIn")}
                    >
                        Sign In
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/signUp" ? "activeColor" : "deactiveColor"} ${props.getToken ? "hide-item":"show-item" }`}
                        onClick={()=> handleClick("/signUp")}
                    >
                        Sign Up
                    </div>
                    <div 
                        className = {`nav-item ${window.location.pathname === "/signUp" ? "activeColor" : "deactiveColor"} ${props.getToken ? "show-item":"hide-item" }`}
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