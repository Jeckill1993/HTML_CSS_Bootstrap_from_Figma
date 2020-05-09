import React, {useEffect} from "react";
import Post from "./Post";
import {NavLink} from "react-router-dom";

const HomePage = ({posts, getPosts, ...props}) => {
    debugger;

    useEffect(() => {
        getPosts()
    }, [])
    let post = posts.map((post) => {
        return <NavLink to={`/post/${post.id}`}><Post key={post.id} id={post.id} title={post.title} body={post.body} /></NavLink>
    })
    return (
        <div>
            {post}
        </div>
    )
}

export default HomePage;