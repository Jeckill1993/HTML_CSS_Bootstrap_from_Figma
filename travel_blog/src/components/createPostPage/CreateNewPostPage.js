import React from "react";
import {Field, reduxForm} from 'redux-form';
import {NavLinkLayout} from "../styled_components/NavLinksLayout";
import {requiredField, maxLengthCreator} from "../../validators/validate";
import {Textarea, Input} from "../../validators/components_FormsError";
import {CreatePostFormContainer} from "../styled_components/validateFormElementsLayout";
import {ButtonLayout} from "../styled_components/ButtonLayout";

const maxLength150 = maxLengthCreator(150);

const CreateForm = (props) => {
    return (
            <CreatePostFormContainer onSubmit={props.handleSubmit}>
                <h2>Create new post</h2>
                <div>
                    <h3>Title:</h3>
                    <Field  name={'title'} component={Input} validate={[requiredField, maxLength150]} />
                </div>
                <div>
                    <h3>Article:</h3>
                    <Field name={'body'} component={Textarea} validate={[requiredField]}/>
                </div>
                <ButtonLayout>Create</ButtonLayout>
            </CreatePostFormContainer>
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