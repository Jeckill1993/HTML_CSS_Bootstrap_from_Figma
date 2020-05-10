import React from 'react';
import {NavLink} from 'react-router-dom';
import NavBarLayout from "./styled_components/NavBarLayout";
import {NavLinkNavBarLayout} from "./styled_components/NavLinksLayout";

const NavBar = () => {
    return (
        <NavBarLayout>
            <NavLinkNavBarLayout to={'/home'}>Home</NavLinkNavBarLayout>
            <NavLinkNavBarLayout to={'/create_new_post'}>Create New Post</NavLinkNavBarLayout>
            <NavLinkNavBarLayout to={'/useful_sites'}>Useful Sites</NavLinkNavBarLayout>
            <NavLinkNavBarLayout to={'/gallery'}>Gallery</NavLinkNavBarLayout>
        </NavBarLayout>
    )
}

export default NavBar;