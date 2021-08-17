import React, { useEffect } from 'react'
import axios from 'axios';

function Contact() {
    useEffect(() => {
        const fetchData = async () => {
            const getData = await axios.get('http://localhost:3001/dashboard/read');
            console.log(getData);
        }
        fetchData();
    }, [])
    return (
        <div>
            Contact
        </div>
    )
}

export default Contact
