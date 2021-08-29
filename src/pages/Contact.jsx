import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getData } from '../api/CommonApi';
import { readDashboard } from '../api/Link';
import Card from '../component/Card';

function Contact() {
    const [dash, setDash] = useState();
    useEffect(() => {
        getData(
            readDashboard,
            null,
            null,
            (res) => {
                console.log(res.data, "res");
                setDash(res.data);
            },
            (err)=> {
                console.log(JSON.stringify(err, null, 2));
            }
        )
        // const fetchData = async () => {
        //     const getData = await axios.get('http://localhost:3001/dashboard/read');
        //     console.log(getData);
        // }
        // fetchData();
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
            {dash? 
            <div className="row">

                {dash.map((item, index) => {
                    return(
                    <Card title={item.title} description={item.description} />
                    )
                })} 
            </div>: "Loading..."}
        </div>
    )
}

export default Contact
