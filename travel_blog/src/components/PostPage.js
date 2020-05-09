import React from 'react';


const PostPage = (props) => {
    return (
        <div>
            <div>
                <h3>{props.posts.title}</h3>
                <p>{props.posts.body}</p>
                <span>{props.posts.id}</span>
            </div>
            <hr/>
            <div>
                <button>Update post</button>
                <button>Delete post</button>
            </div>
            <hr/>
            <div>
                <h3>Comments:</h3>
                <ul>
                    <li>Comment1</li>
                    <li>Comment2</li>
                    <li>Comment3</li>
                </ul>
                <textarea>Comment</textarea>
                <bitton>Send comment</bitton>
            </div>
        </div>

    )
}

export default PostPage;