import React, {useState} from 'react';
import Comments from "./Comments";
import {NavLink} from "react-router-dom";
import {PostLayout, ArticleLayout, H2Layout, PostButtonsBlockLayout, UpdateContainerLayout} from "../styled_components/PostLayout";
import {ButtonLayout} from "../styled_components/ButtonLayout";


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
            ? <UpdateContainerLayout>
                <div>
                    <h3>Change title:</h3>
                    <input onChange={changeTextTitle} value={newTextTitle}/>
                </div>
                <div>
                    <h3>Change post:</h3>
                    <textarea cols={'45'} rows={'10'} maxLength={'65000'} onChange={changeTextBody} value={newTextBody}/>
                </div>
                <ButtonLayout onClick={saveUpdatePost}>Save</ButtonLayout>
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