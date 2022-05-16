import React from "react";
import PostItem from "./PostItem";



const PostList = ({posts, removePost}) => {
    return (
        <div>
            {posts.map(post =>
                <PostItem removePost={removePost} key={post.id} post={post}/>
            )} 
        </div>
    )
}


export default PostList