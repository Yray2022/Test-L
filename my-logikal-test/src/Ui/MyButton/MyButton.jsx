import React from "react";
import cb from "./MyButton.module.css"


const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={cb.button}>
            {children}
        </button>
    )
}

export default MyButton