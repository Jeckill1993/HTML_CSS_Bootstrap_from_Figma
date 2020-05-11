import React from 'react';
import styled from 'styled-components';

export const PostLayout = styled.section`
    text-align: left;
`
export const H2Layout = styled.h2`
    color: #15161a;
    font-size: 39px;
`
export const ArticleLayout = styled.article`
    color: #15161a;
    margin-bottom: 30px;
`
export const PostButtonsBlockLayout = styled.div`
    display: flex;
    justify-content: start;
`
export const UpdateContainerLayout = styled(PostLayout)`
    display: flex;
    flex-direction: column;
`
