import React from "react";
import { Link } from "react-router-dom";
import '../public/style.css'


const Nav = () => {

    return (
        <div className="navbar">
            <a href= "./"><img src="forge_logo.png" /></a>
            <div className="navlinks">
                <Link to="./books">Search Books</Link>
                <Link to="./build">Build Book</Link>
            </div>
        </div>
    )
}

export default Nav