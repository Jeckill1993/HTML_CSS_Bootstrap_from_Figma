import React from "react";


const Post = ({id, title, body}) => {
    return (
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <span>{id}</span>
    </div>
    )
}

export default Post;