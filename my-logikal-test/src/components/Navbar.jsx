import React from "react";
import "../App.css"

const Navbar = ({children, ...props}) => {
    return (
        <div {...props} className='navbar'>
            <div className='navtext'>
                 {children}
            </div>
        </div>
    )
}


export default Navbar