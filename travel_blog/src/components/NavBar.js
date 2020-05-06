import React from 'react';
import {Route} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Route component={HomePage}></Route>
            <Route component={CreateNewPostPage}></Route>
            <Route component={}></Route>
            <Route component={}></Route>
        </nav>
    )
}

export default NavBar;