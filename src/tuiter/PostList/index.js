import React from "react";
import posts from "./posts.json"
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
        <div className="list-group">
            {
                posts.map(posts => <PostItem key= {posts._id} posts={posts}/>)
            }
        </div>
    );
};

export default PostList;