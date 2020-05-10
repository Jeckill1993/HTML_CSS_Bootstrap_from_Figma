import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PostPage from "./PostPage";
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {updatePostTC, deletePostTC, getPostCommentsTC, addCommentTC} from '../../redux/posts_reducer';


const PostPageContainer = (props) => {

    let urlId = props.match.params.postId;
    useEffect(() => {
        props.getPostComments(urlId);
    }, [props.posts])

    return (
        <div>
            <PostPage post={props.currentPost} updatePost={props.updatePost} deletePost={props.deletePost} addComment={props.addComment} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        currentPost: state.postsPage.currentPost,
    }
}

export default compose(
    connect(mapStateToProps, {updatePost: updatePostTC, deletePost: deletePostTC, getPostComments: getPostCommentsTC, addComment: addCommentTC}),
    withRouter,
)(PostPageContainer);
