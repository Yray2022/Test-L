import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
import MyButton from "../Ui/MyButton/MyButton";

const PostItem = ({post, removePost}) => {

    const historu = useNavigate()

    return (
        <div className='post'>
            <div className='postText'>
                <strong>{post.title}</strong>
            <div>
                {post.body}
            </div>
            </div>
            <div className="postButton">
                <MyButton onClick={() => historu(`/home/${post.id}`)}>
                    Каментарий    
                </MyButton>
                <MyButton onClick={() => removePost(post)}>
                    Удалить
                </MyButton>
            </div>
      </div>
    )
}


export default PostItem