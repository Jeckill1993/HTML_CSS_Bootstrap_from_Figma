import React from 'react';
import {ErrorMessage, CreatePostTitleField, CreatePostBodyField} from "../components/styled_components/validateFormElementsLayout";

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <CreatePostBodyField {...input} {...props}/>
            {(meta.touched && meta.error) && <ErrorMessage>{meta.error}</ErrorMessage>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <CreatePostTitleField {...input} {...props} />
            {(meta.touched && meta.error) && <ErrorMessage>{meta.error}</ErrorMessage>}
        </div>
    )
}