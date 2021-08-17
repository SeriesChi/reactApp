import React, { useState, useEffect } from 'react';
import "./home.css";

function Home() {
    const [text, setText] = useState(null);
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        console.log(event.target.value,"event");
        setText(event.target.value);
    }

    const handleSet = (event) => {
        console.log("Inside Handle Set");
        // console.log(text, "text");
        if(Number(text)<=0){
            setValue(0);
            setText("");
        } else{
            setValue(Number(text));
            setText("");
        }
    }

    const handleMinus = () => {
        if(value>0){
            setValue(value - 1);
        }
    }
    const handleAdd = () => {
        console.log(value, "add");
        setValue(value + 1);
    }

    return (
        <>
            Home 
            <div className="row">
                <button type="button" className="button" name="Add" value="" onClick={handleMinus}>
                    - Minus
                </button>
                <div className="circle">{value}</div>
                <button type="button" className="button" name="Add" value="" onClick={handleAdd}>
                    + Add
                </button>  
            </div>
            <div>
                <input type="number" value={text} onChange={handleChange} />
            </div>
            <button type="button" onClick={() => handleSet()}>
                SET
            </button>
        </>
    )
}

export default Home
