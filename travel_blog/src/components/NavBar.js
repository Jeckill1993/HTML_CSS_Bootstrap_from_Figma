import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/create_new_post'}>Create New Post</NavLink>
            <NavLink to={'/useful_sites'}>Useful Sites</NavLink>
            <NavLink to={'/gallery'}>Gallery</NavLink>
        </nav>
    )
}

export default NavBar;