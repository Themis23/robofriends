import React from "react";

const Scroll = ({children}) =>{
    return(
        <div className="pa3" style={{
            overflowY: "scroll",
            border: "1px solid pink",
            height: "800px"
            }}>
            {children}
        </div>
    );
}

export default Scroll;