import React from "react";
import Home from "../src/Home";
import About from "./About";
import AllBooks from "./AllBooks";
import BuildBook from "./BuildBook";

const routes = {
    "/": () => <Home />,
    "/about":()=> <About />,
    "/books": () => <AllBooks />,
    "/build": () => <BuildBook />
}

export default routes;