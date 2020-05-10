import React from 'react';
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AppContainer from "./components/styled_components/AppContainer";

function App() {
    return (
        <AppContainer>
            <Header/>
            <NavBar/>
            <Main/>
            <Footer/>
        </AppContainer>
    );
}

export default App;
