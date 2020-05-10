import React from "react";
import {Field, reduxForm} from 'redux-form';
import {NavLinkLayout} from "../styled_components/NavLinksLayout";

const CreateForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <h3>Create new post</h3>
                <div>
                    <Field  name={'title'} component={'input'} />
                </div>
                <div>
                    <Field name={'body'} component={'textarea'}/>
                </div>
                <button>Create</button>
            </form>
    )
}

const NewPostReduxForm = reduxForm({form: "create_new_post"})(CreateForm);

const CreateNewPostPage = (props) => {

    let addPostText = (value) => {
        props.addPost({title: value.title, body: value.body});
    }

    return (
        <div>
            <NewPostReduxForm onSubmit={addPostText} />
            <NavLinkLayout to={'/home'}>Back to home page</NavLinkLayout>
        </div>
    )
}

export default CreateNewPostPage;