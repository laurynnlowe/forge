import React from 'react';
import ReactDOM from 'react-dom'
import '../public/style.css'
import {Link} from "react-router-dom";


const Home = () => {

    return (
        <div className="homeContainer">
            <img className='homeImage' src='homeimage_with_logo.jpg' alt="forge-home" />
            <Link to="/books" className="homeButtonLeft">Search Books</Link>
            <Link to="/build" className="homeButtonRight">Build Book</Link>
            {/* <div className="homeButtonLeft" Link to="/books">All Books</div>
            <div className="homeButtonRight" Link to="/build">Build Book</div> */}
        </div>
    )
}

export default Home;