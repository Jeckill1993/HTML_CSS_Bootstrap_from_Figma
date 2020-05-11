import React from 'react';
import styled from 'styled-components';

export const CommentsContainerLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: left;
`
export const CommentsList = styled.ul`
    display: grid;
    grid-template-rows: repeat(${props => props.length}, 1fr);
    padding: 0;
`
export const CommentItemLayout = styled.li`
    list-style-type: none;
    margin: 10px;
    padding: 20px
    border: 0.5px solid #15161a;
`