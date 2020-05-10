import React from 'react';
import styled from 'styled-components';

const HomePageLayout = styled.div`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(${props => props.num},1fr);
    grid-gap: 10px;
    width: 60%;
    margin: auto;
`

export default HomePageLayout;