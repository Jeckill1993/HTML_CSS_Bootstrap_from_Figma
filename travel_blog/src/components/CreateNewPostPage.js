import React from "react";
import {Field, reduxForm} from 'redux-form';
import {NavLink, Route} from "react-router-dom";

const CreateForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h3>Create new post</h3>
                <div>
                    <Field  name={'title'} component={'input'} />
                </div>
                <div>
                    <Field name={'body'} component={'textarea'}/>
                </div>
                <div>
                    <Field name={'id'} component={'input'}/>
                </div>
                <button><NavLink to={'/home'}>Create</NavLink></button>
            </form>
        </div>
    )
}

const NewPostReduxForm = reduxForm({form: "create_new_post"})(CreateForm);

const CreateNewPostPage = (props) => {
    let addPostText = (data) => {
        props.addPost({id: data.id, title: data.title, body: data.body});
    }

    return (
        <div>
            <NewPostReduxForm onSubmit={addPostText} />
        </div>
    )
}

export default CreateNewPostPage;