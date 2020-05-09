import {postsAPI} from './../API/api';

const GET_POSTS = 'GET-POSTS';
const GET_COMMENTS = 'GET-COMMENTS';


export const getPostSuccessAC = (posts) => {
    return {
        type: GET_POSTS,
        posts,
    }
}
export const getCommentsSuccessAC = (comments) => {
    return {
        type: GET_COMMENTS,
        comments,
    }
}

export const getPostsTC = () => {
    return async (dispatch) => {
        let data = await postsAPI.getPosts();
        dispatch(getPostSuccessAC(data));
    }
}
export const addPostTC = (post) => {
    return async (dispatch) => {
        await postsAPI.addPost(post);
        let data = await postsAPI.getPosts();
        dispatch(getPostSuccessAC(data));
    }
}
export const updatePostTC = (postId, post) => {
    return async (dispatch) => {
        await postsAPI.updatePost(postId, post);
        let data = await postsAPI.getPosts();
        dispatch(getPostSuccessAC(data));
    }
}
export const deletePostTC = (postId) => {
    return async (dispatch) => {
        await postsAPI.deletePost(postId);
        let data = await postsAPI.getPosts();
        dispatch(getPostSuccessAC(data));
    }
}
export const getPostCommentsTC = (postId) => {
    return async (dispatch) => {
        let data = await postsAPI.getPostComments(postId);
        dispatch(getCommentsSuccessAC(data));
    }
}
export const addCommentTC = (postId, body) => {
    return async (dispatch) => {
        await postsAPI.addComment(postId, body);
        let data = await postsAPI.getPostComments(postId);
        dispatch(getCommentsSuccessAC(data));
    }
}


const initialState = {
    posts: [],
    comments: [],
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        default:
            return state
    }
}

export default postsReducer;