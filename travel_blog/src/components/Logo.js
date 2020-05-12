import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <img className={classes.logo} src={'https://logotizer.ru/assets/images//logotipy/thumb_logo_3301.png'} alt={'logo'}/>
    )
}

export default Logo;