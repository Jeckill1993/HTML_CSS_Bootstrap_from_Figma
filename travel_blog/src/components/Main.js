import React from 'react';
import {Route} from "react-router-dom";
import HomePageContainer from "./homePage/HomePageContainer";
import CreateNewPostPageContainer from "./createPostPage/CreateNewPostPageContainer";
import UsefulSites from "./UsefulSites";
import Gallery from "./Galery";
import PostPageContainer from "./components_PostPage/PostPageContainer";


const Main = () => {
    return (
        <div>
            <Route path={'/home'} render={() => <HomePageContainer/>}/>
            <Route path={'/create_new_post'} render={() => <CreateNewPostPageContainer/>}/>
            <Route path={'/useful_sites'} render={() => <UsefulSites/>}/>
            <Route path={'/gallery'} render={() => <Gallery/>}/>
            <Route path={'/post/:postId?'} render={() => <PostPageContainer />}/>
        </div>
    )
}


export default Main;