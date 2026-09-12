import React from "react";
import Component6 from "./Component6";

const Component5 = (props) => {

    let {str,num,bool,obj,arr,fun, nestedObj,nestedArr} = props

    return (
        <div>

            <Component6 value={{str,num,bool,obj,arr,fun, nestedObj,nestedArr}} />
        </div>
    );
};

export default Component5;
