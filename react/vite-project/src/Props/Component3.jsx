import React from "react";
import Component4 from "./Component4";

const Component3 = (props) => {

    let {str,num,bool,obj,arr,fun, nestedObj,nestedArr} = props

    return (
        <div>
            

            <Component4 value={{str,num,bool,obj,arr,fun, nestedObj,nestedArr}} />
        </div>
    );
};

export default Component3;