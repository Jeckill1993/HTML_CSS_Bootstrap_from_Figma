import React from "react";
import HomePage from "./HomePage";
import {
    getPostsTC,
    addPostTC,
    updatePostTC,
    deletePostTC,
    getPostCommentsTC,
    addCommentTC
} from "../redux/posts_reducer";
import {connect} from 'react-redux';



const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts
    }
}


const HomePageContainer = connect(mapStateToProps, {getPosts: getPostsTC, addPost:  addPostTC, updatePost: updatePostTC, deletePost: deletePostTC,
    getPostComments: getPostCommentsTC, addComment: addCommentTC})(HomePage);

export default HomePageContainer;