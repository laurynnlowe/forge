import React from 'react';
// import {useRoutes} from 'hookrouter';
import ReactDOM from 'react-dom'
import '../public/style.css'
import routes from './routes'


const Home = () => {
    // const routing = useRoutes(routes)
    return (
        <div className="homeContainer">
            <img className="logo" src="forge_logo.png" alt="logo" />
            <img className='homeImage' src='homeimage_with_logo.jpg' alt="forge-home" />
            <button className="homeButtonLeft" onclick="/books">All Books</button>
            <button className="homeButtonRight" onclick="/build">Build Book</button>
            {/* {routing} */}
        </div>
    )
}

export default Home;