import React from "react";
import {PostLayout} from "../styled_components/PostLayout";
import {H2Layout} from "../styled_components/PostLayout";
import {ArticleLayout} from "../styled_components/PostLayout";


const Post = ({id, title, body}) => {
    return (
    <PostLayout>
        <H2Layout>{title}</H2Layout>
        <ArticleLayout>{body}</ArticleLayout>
    </PostLayout>
    )
}

export default Post;