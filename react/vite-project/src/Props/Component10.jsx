import React from "react";

const Component10 = ({
    str,
    num,
    bool,
    sym,
    obj,
    arr,
    fun,
    nestedObj,
    nestedArr
}) => {

    console.log("Component10:", {
        str,
        num,
        bool,
        sym,
        obj,
        arr,
        fun,
        nestedObj,
        nestedArr
    });

    return (
        <div>
            <h1>Component 10</h1>

            <h2>Primitive Datatypes</h2>

            <p>String: {str}</p>

            <p>Number: {num}</p>

            <p>Boolean: {bool ? "true" : "false"}</p>

            


            <h2>Non-Primitive Datatypes</h2>

            <p>
                Object: {JSON.stringify(obj)}
            </p>

            <p>
                Array: {JSON.stringify(arr)}
            </p>

            {/* <p>
                Function: {fun.toString()}
            </p> */}


            <h2>Nested Object</h2>

            <p>
                {JSON.stringify(nestedObj)}
            </p>


            <h2>Nested Array</h2>

            <p>
                {JSON.stringify(nestedArr)}
            </p>
        </div>
    );
};

export default Component10;