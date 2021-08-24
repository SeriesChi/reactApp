import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import "./home.css";
import { getData } from '../api/CommonApi';
import { readSignUp } from '../api/Link';
import TableComponent from '../component/tableComponent/TableComponent';

function Home() {
    const [user, setUser] = useState(null);
    const column = [
        {
            field: "name",
            header: "Name"
        },
        {
            field: "userName",
            header: "User Name"
        },
        {
            field: "phoneNumber",
            header: "Phone Number"
        },
        {
            field: "address",
            header: "Address"
        },
    ];

    useEffect(() => {
        getData(
            readSignUp,
            null,
            (res) => {
                console.log(res.data, "res");
                // setUser("no data");
                setUser(res.data);
            },
            (err) => {
                console.log(JSON.stringify(err, null, 2));
            }
        )
    }, [])

    return (
        <>
            <Header 
                title="Home"
            />
            <div>
            {localStorage.getItem("token")}
            </div>
            {user ? 
                <TableComponent
                    data={user}
                    column={column}
                />
            : "Loading..."}
        </>
    )
}

export default Home
