import {connect} from 'react-redux';
import {addPostTC} from "../../redux/posts_reducer";
import CreateNewPostPage from "./CreateNewPostPage";

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
    }
}


const CreateNewPostPageContainer = connect(mapStateToProps, {addPost: addPostTC})(CreateNewPostPage);

export default CreateNewPostPageContainer;