import React from 'react';
import HeaderLayout from "./styled_components/HeaderLayout";
import Logo from "./Logo";
import {ButtonLayout} from "./styled_components/ButtonLayout";
import classes from './ImagesRef.module.css';


const Header = () => {
    return (
        <HeaderLayout>
                <Logo/>
                <div>
                    <div>
                        (044)444-44-44<br/>
                        <img className={classes.image_ref} src={'http://darina0113.ru/wp-content/uploads/2019/04/viber-logo-compstart-1024x1024-333x333.png'} alt={'viber'}/>
                        <img className={classes.image_ref} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/512px-Telegram_2019_Logo.svg.png'} alt={'telegram'}/>
                        <br/>
                        (073)333-33-33<br/>
                        (078)888-88-88
                    </div>
                    <div>
                        <a href={'https://www.facebook.com/'}><img className={classes.image_ref} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/300px-Facebook_icon_2013.svg.png'} alt={'facebook'}/></a>
                        <a href={'https://www.instagram.com'}><img className={classes.image_ref} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png'} alt={'instagram'}/></a>
                    </div>
                </div>
                <div>
                    <input />
                    <button>Search</button>
                </div>
            <div><ButtonLayout>Sign In</ButtonLayout></div>
        </HeaderLayout>
    )
}


export default Header;