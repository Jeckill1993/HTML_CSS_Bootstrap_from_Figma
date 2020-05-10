import React from 'react';
import HeaderLayout from "./styled_components/HeaderLayout";


const Header = () => {
    return (
        <HeaderLayout>
                <img src={''} alt={'logo'}/>
                <div>contacts</div>
                <div>social networks</div>
                <div>sign in</div>
        </HeaderLayout>
    )
}


export default Header;