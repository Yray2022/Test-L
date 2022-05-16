import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../APi/PostServise";



const HomeId = () => {

    const params = useParams()

    const [post, setPost] = useState(params)

    const fetResponse = async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    }

    useEffect(() => {
        fetResponse(params.id)
    },[])

    return (
        <div className="paramsText">
            <h1>
                Страниса с каментарием ID = {params.id}
            </h1>
            <div >
                <h2>
                    Заголовок каментария: {post.title}  
                    <div>
                       опесание: {post.body}  
                    </div> 
                   
                </h2>
            </div>
            
        </div>
    )
}


export default HomeId