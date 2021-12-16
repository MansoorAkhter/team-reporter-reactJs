import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import "antd/dist/antd.css";


const Third = () => {
    let navigate = useNavigate();

    const backHandler = () => {
        navigate("/");
    }
    return (
        <div>
            <Button style={{ fontWeight: "bold"}} onClick={backHandler}>This Is Third Page</Button>
            <h1>This Is Third Page</h1>

        </div>
    )
}

export default Third
