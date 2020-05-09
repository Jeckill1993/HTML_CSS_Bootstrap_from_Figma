import React from 'react';
import {connect} from "react-redux";
import PostPage from "./PostPage";


let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts
    }
}

const PostPageContainer = connect(mapStateToProps)(PostPage);

export default PostPageContainer;