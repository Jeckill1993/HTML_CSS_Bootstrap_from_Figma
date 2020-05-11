import React, {useState} from 'react';
import Comments from "./Comments";
import {NavLink} from "react-router-dom";
import {PostLayout, ArticleLayout, H2Layout, PostButtonsBlockLayout, UpdateContainerLayout} from "../styled_components/PostLayout";
import {ButtonLayout} from "../styled_components/ButtonLayout";
import {CreatePostFormContainer} from "../styled_components/validateFormElementsLayout";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../validators/components_FormsError";
import {maxLengthCreator, requiredField} from "../../validators/validate";
import {NavLinkLayout} from "../styled_components/NavLinksLayout";


const PostPage = (props) => {

    let [editMode, setEditMode] = useState(false);

    let onUpdatePost = () => {
        setEditMode(true);
    }
    let deletePost = () => {
        props.deletePost(props.post.id);
    }

    return (
        <div>{editMode
            ? <UpdateContainerLayout>
                <UpdatePostForm {...props} setEditMode={setEditMode} post={props.post} />
            </UpdateContainerLayout>
            : <div>
                <PostLayout>
                    <H2Layout>{props.post.title}</H2Layout>
                    <ArticleLayout>{props.post.body}</ArticleLayout>
                </PostLayout>
                <PostButtonsBlockLayout>
                    <ButtonLayout onClick={onUpdatePost}>Update post</ButtonLayout>
                    <NavLink to={'/home'}><ButtonLayout onClick={deletePost}>Delete post</ButtonLayout></NavLink>
                </PostButtonsBlockLayout>
                <hr/>
                {props.post.comments
                    ? <Comments comments={props.post.comments} postId={props.post.id} addComment={props.addComment}/>
                    : <span> </span>
                }

            </div>}
        </div>
    )
}

export default PostPage;



//create form 'UpdatePostForm'
const maxLength150 = maxLengthCreator(150);
const UpdateForm = (props) => {
    return (
        <CreatePostFormContainer onSubmit={props.handleSubmit}>
            <div>
                <h3>Title:</h3>
                <Field defaultValue={props.post.title} name={'title'} component={Input} validate={[requiredField, maxLength150]} />
            </div>
            <div>
                <h3>Article:</h3>
                <Field defaultValue={props.post.body} name={'body'} component={Textarea} validate={[requiredField]}/>
            </div>
            <ButtonLayout>Update post</ButtonLayout>
        </CreatePostFormContainer>
    )
}
const UpdateFormRedux = reduxForm({form: "update_post"})(UpdateForm);
const UpdatePostForm = (props) => {
    let saveUpdatePost = (value) => {
        props.updatePost(props.post.id, {title: value.title, body: value.body});
        props.setEditMode(false);
    }
    return (
        <div>
            <UpdateFormRedux onSubmit={saveUpdatePost} post={props.post} />
            <NavLinkLayout to={'/home'}>Back to home page</NavLinkLayout>
        </div>
    )
}