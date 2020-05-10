import React, {useEffect} from "react";
import Post from "./Post";
import {NavLink} from "react-router-dom";
import HomePageLayout from "../styled_components/HomePageLayout";
import {NavLinkLayout} from '../styled_components/NavLinksLayout';

const HomePage = ({posts, getPosts, ...props}) => {
    useEffect(() => {
        getPosts()
    }, [])
    let post = posts.map((post) => {
        return <NavLinkLayout key={post.id} to={`/post/${post.id}`}><Post key={post.id} id={post.id} title={post.title} body={post.body} /></NavLinkLayout>
    })
    return (
        <HomePageLayout num={posts.length}>
            {post}
        </HomePageLayout>
    )
}

export default HomePage;