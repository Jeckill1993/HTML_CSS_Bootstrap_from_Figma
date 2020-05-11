import React, {useState} from 'react';
import {ButtonLayout} from "../styled_components/ButtonLayout";
import {CommentsContainerLayout} from "../styled_components/CommentsLayout";
import {CommentsList, CommentItemLayout} from "../styled_components/CommentsLayout";


const Comments = ({comments, postId, addComment}) => {

    let [textComment, setTextComment] = useState('');

    let comment = comments.map(comment => {
        return <CommentItemLayout key={comment.id}>{comment.body}</CommentItemLayout>
    })

    let changeTextComment = (e) => {
        setTextComment(e.currentTarget.value);
    }
    let onAddComment = () => {
        addComment(postId, textComment);
    }

    return (
        <CommentsContainerLayout>
            <h3>Comments:</h3>
            <CommentsList length={comments.length}>
                {comment}
            </CommentsList>
            <textarea cols={'45'} rows={'10'} maxLength={'65000'} onChange={changeTextComment} value={textComment}/>
            <ButtonLayout onClick={onAddComment}>Send comment</ButtonLayout>
        </CommentsContainerLayout>
    )
}

export default Comments;