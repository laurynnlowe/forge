import React from "react";
import { BrowserRouter as  Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import AllBooks from "./AllBooks";
import BuildBook from "./BuildBook";

// const routes = {
//     "/": () => <Home />,
//     "/about":()=> <About />,
//     "/books": () => <AllBooks />,
//     "/build": () => <BuildBook />
// }

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/books" element={<AllBooks />} />
                <Route path="/build" element={<BuildBook />} />
            </Routes>
        </div>
    )
}

export default Routing;