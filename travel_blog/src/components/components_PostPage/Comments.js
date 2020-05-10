import React, {useState} from 'react';


const Comments = ({comments, postId, addComment}) => {

    let [textComment, setTextComment] = useState('');

    let comment = comments.map(comment => {
        return <li key={comment.id}>{comment.body}</li>
    })

    let changeTextComment = (e) => {
        setTextComment(e.currentTarget.value);
    }
    let onAddComment = () => {
        addComment(postId, textComment);
    }

    return (
        <div>
            <h3>Comments:</h3>
            <ul>
                {comment}
            </ul>
            <textarea onChange={changeTextComment} value={textComment}></textarea>
            <button onClick={onAddComment}>Send comment</button>
        </div>
    )
}

export default Comments;