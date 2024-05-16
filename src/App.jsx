import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Components/Menu.jsx";
import Footer from "./Components/Footer.jsx";
import GlobalStyle from "./Components/GlobalStyle.jsx";

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Menu/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App;