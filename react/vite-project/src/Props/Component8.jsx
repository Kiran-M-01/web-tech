import React from "react";
import Component9 from "./Component9";

const Component8 = (props) => {

    let {str,num,bool,obj,arr,fun, nestedObj,nestedArr} = props

    return (
        <div>

            <Component9 value={{str,num,bool,obj,arr,fun, nestedObj,nestedArr}} />
        </div>
    );
};

export default Component8;