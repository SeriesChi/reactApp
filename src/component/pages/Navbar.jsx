import React, {useEffect, useState}  from 'react';
import './navbar.css';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const history = useHistory()
    // const thePath = window.location.pathname;
    // console.log(thePath, "path");

    const [active, setActive] = useState();

    useEffect(() => {
       console.log(window.location.pathname, "url path"); 
       setActive(window.location.pathname);
    }, [])

    const handleClick = (urlPath) => {
        setActive(urlPath);
        history.push(urlPath);
    }
    
    // const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);
    // console.log(lastItem);


    

    return (
        <>
            <div>
                <div className = "flex">
                    <div 
                        className = {`nav-item ${active === "/" ? "activeColor" : "deactiveColor"}`} 
                        // style={active === "/" ? activeColor : deactiveColor}  
                        onClick={()=> handleClick("/")}
                    >
                        Home
                    </div>
                    <div 
                        className = {`nav-item ${active === "/contact" ? "activeColor" : "deactiveColor"}`}
                        // style={active === "/contact" ? activeColor : deactiveColor} 
                        onClick={()=> handleClick("/contact")}
                    >
                        Contact
                    </div>
                    <div 
                        className = {`nav-item ${active === "/aboutUs" ? "activeColor" : "deactiveColor"}`}
                        // style={active === "/aboutUs" ? activeColor : deactiveColor} 
                        onClick={()=> handleClick("/aboutUs")}
                    >
                        About Us
                    </div>
                    <div 
                        className = {`nav-item ${active === "/signIn" ? "activeColor" : "deactiveColor"}`}
                        onClick={()=> handleClick("/signIn")}
                    >
                        Sign In
                    </div>
                    <div 
                        className = {`nav-item ${active === "/signUp" ? "activeColor" : "deactiveColor"}`}
                        onClick={()=> handleClick("/signUp")}
                    >
                        Sign Up
                    </div>
                </div>
            </div>
        </>
    )
}

const activeColor = {
    backgroundColor: "rgb(255, 80, 36)",
    color: "white"
}

const deactiveColor = {
 backgroundColor: "rgb(47, 79, 79)",
 color: "white"
}
