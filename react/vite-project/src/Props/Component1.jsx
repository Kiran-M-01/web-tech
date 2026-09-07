import React, { Fragment } from "react";
import Component2 from './Component2';

const Component1 = ({ value }) => {
    console.log(value)
    let {arr,obj} = value
    return (
        <div>
            {
                arr.map((x, i) => {
                    return (
                        <Fragment key={i}>
                            <h1>{x}</h1>
                        </Fragment>
                    );
                })
            }

            <Component2 value={obj}/>
        </div>
    );
};

export default Component1;