import React from 'react';
import './App.css';
import {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";

const Header = React.lazy(() => import('./components/Header'));
const NavBar = React.lazy(() => import('./components/NavBar'));

function App() {
    return (
        <BrowserRouter>
            <div>
                <Suspense fallback={<p>Loading</p>}>
                    <Header/>
                    <NavBar/>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
