import React from "react";
import Component7 from "./Component7";

const Component6 = (props) => {

    let {str,num,bool,obj,arr,fun, nestedObj,nestedArr} = props

    return (
        <div>

            <Component7 value={{str,num,bool,obj,arr,fun, nestedObj,nestedArr}} />
        </div>
    );
};

export default Component6;