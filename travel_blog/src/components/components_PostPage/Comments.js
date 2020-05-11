import React, {useState} from 'react';
import {ButtonLayout} from "../styled_components/ButtonLayout";
import {CommentsContainerLayout} from "../styled_components/CommentsLayout";
import {CommentsList, CommentItemLayout} from "../styled_components/CommentsLayout";
import {Textarea} from "../../validators/components_FormsError";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../validators/validate";


const Comments = ({comments, postId, addComment}) => {

    let comment = comments.map(comment => {
        return <CommentItemLayout key={comment.id}>{comment.body}</CommentItemLayout>
    })

    return (
        <CommentsContainerLayout>
            <h3>Comments:</h3>
            <CommentsList length={comments.length}>
                {comment}
            </CommentsList>
            <CommentFormContainer postId={postId} addComment={addComment}/>
        </CommentsContainerLayout>
    )
}

export default Comments;


//create reduxForm 'CommentFormContainer'
const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'body'} component={Textarea} validate={[requiredField]}/>
            <ButtonLayout>Send comment</ButtonLayout>
        </form>
    )
}
const CommentFormRedux = reduxForm({form: 'comment'})(CommentForm);
const CommentFormContainer = ({postId, addComment}) => {
    let onAddComment = (value) => {
        addComment(postId, value.body);
    }
    return (
        <CommentFormRedux onSubmit={onAddComment}/>
    )
}