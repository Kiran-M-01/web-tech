import React from "react";

const Component2 = ({ value }) => {
    console.log(value)
    let {name,age} = value
    return(
        <div>
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
        </div>
    )
}

export default Component2;