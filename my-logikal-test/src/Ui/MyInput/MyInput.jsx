import React from "react";
import cl from "./MyInput.module.css"

const MyInput = ({children, ...props}) => {
    return (
        <input {...props} className={cl.input}>
            {children}
        </input>
    )
}

export default MyInput