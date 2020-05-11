import React from 'react';
import styled from 'styled-components';


export const CreatePostFormContainer = styled.form`
    text-align: left;
`
export const CreatePostTitleField = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
`
export const CreatePostBodyField = styled.textarea`
    resize: none;
    width: 100%;
    height: 400px;
    border-radius: 5px;
`
export const ErrorMessage = styled.p`
    color: #ba3030;
    margin: 8px;
    font-weight: bold;
`