import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import "./home.css";
import { getData } from '../api/CommonApi';
import { readSignUp } from '../api/Link';
import TableComponent from '../component/tableComponent/TableComponent';
import axios from "axios";

function Home() {
    const [user, setUser] = useState(null);
    const getToken = localStorage.getItem('token');
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

    // useEffect(() => {
    //     let auth = localStorage.getItem("token");
    //     getData(
    //         readSignUp,
    //         null,
    //         auth,
    //         (res) => {
    //             console.log(res.data, "res");
    //             // setUser("no data");
    //             setUser(res.data);
    //         },
    //         (err) => {
    //             console.log(JSON.stringify(err, null, 2));
    //         }
    //     )
    // }, [])

        useEffect(() => {
            const fetchdata = async () => {
                const getData = await axios.get(
                    'http://localhost:3001/signup/read',
                    {
                        headers: {
                            authorization: localStorage.getItem('token'),
                        },
                    }
                );
                setUser(getData.data);
            };
            fetchdata();
        }, []);

    return (
        <>
            <Header 
                title="Home"
            />
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
