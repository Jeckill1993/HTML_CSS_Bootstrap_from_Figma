import React, {useState} from 'react';
import Comments from "./Comments";
import {NavLink} from "react-router-dom";


const PostPage = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [newTextTitle, setNewTextTitle] = useState(props.post.title);
    let [newTextBody, setNewTextBody] = useState(props.post.body);

    let onUpdatePost = () => {
        setEditMode(true);
    }
    let saveUpdatePost = () => {
        props.updatePost(props.post.id, {title: newTextTitle, body: newTextBody});
        setEditMode(false);
    }
    let changeTextTitle = (e) => {
        setNewTextTitle(e.currentTarget.value);
    }
    let changeTextBody = (e) => {
        setNewTextBody(e.currentTarget.value);
    }
    let deletePost = () => {
        props.deletePost(props.post.id);
    }

    return (
        <div>{editMode
            ? <div>
                <div>
                    Change title: <input onChange={changeTextTitle} value={newTextTitle}/>
                </div>
                <div>
                    Change body: <textarea onChange={changeTextBody} value={newTextBody}/>
                </div>
                <button onClick={saveUpdatePost}>Save</button>
            </div>
            : <div>
                <div>
                    <h3>{props.post.title}</h3>
                    <p>{props.post.body}</p>
                    <span>{props.post.id}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={onUpdatePost}>Update post</button>
                    <NavLink to={'/home'}><button onClick={deletePost}>Delete post</button></NavLink>
                </div>
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