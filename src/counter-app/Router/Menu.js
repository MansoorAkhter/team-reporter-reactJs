import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <div>
         <Link to="/">First</Link>
         <br/>
         <Link to="/second">Second</Link>
         <br/>
         <Link to="/third">Third</Link>
        </div>
    )
}

export default Menu;
