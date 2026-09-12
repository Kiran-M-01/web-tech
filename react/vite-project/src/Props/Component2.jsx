import React from "react";
import Component3 from "./Component3";

const Component2 = (props) => {

    console.log("Component2:", props);

    let {str,num,bool,obj,arr,fun, nestedObj,nestedArr} = props
    return (
        <div>
            

            <Component3 value={{str,num,bool,obj,arr,fun, nestedObj,nestedArr}} />
        </div>
    );
};

export default Component2;
