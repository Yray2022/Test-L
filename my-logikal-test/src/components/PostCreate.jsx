import React from "react";
import "../App.css"
import MyButton from "../Ui/MyButton/MyButton";
import MyInput from "../Ui/MyInput/MyInput";

const PostCreate = ({getSortedPost, setGetSortedPost, title, body ,setBody ,setTitle, addPost}) => {
    return (
        <div className='textInlain'>
        <MyInput  
        value={getSortedPost}
        onChange={e => setGetSortedPost(e.target.value)}
        placeholder='найти пост'
        />
        <MyInput 
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Назавние поста'/>
        <MyInput 
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder='Опесание поста'/>
        <MyButton onClick={addPost}>
          Добавить пост
        </MyButton>
      </div>
    )
}

export default PostCreate