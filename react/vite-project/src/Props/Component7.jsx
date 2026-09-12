import React from "react";
import Component8 from "./Component8";

const Component7 = (props) => {

    let {str,num,bool,obj,arr,fun, nestedObj,nestedArr} = props

    return (
        <div>

            <Component8 value={{str,num,bool,obj,arr,fun, nestedObj,nestedArr}} />
        </div>
    );
};

export default Component7;