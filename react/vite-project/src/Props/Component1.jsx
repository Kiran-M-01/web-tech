// import React, { Fragment } from "react";
// import Component2 from './ComponenT2';

// const Component1 = ({ value }) => {
//     console.log(value)
//     let {arr,obj} = value
//     return (
//         <div>
//             {
//                 arr.map((x, i) => {
//                     return (
//                         <Fragment key={i}>
//                             <h1>{x}</h1>
//                         </Fragment>
//                     );
//                 })
//             }

//             <Component2 value={obj}/>
//         </div>
//     );
// };

// export default Component1;

// conditional rendering

import React, { useState } from 'react'
const Component1 = () => {
    let [state, setState] = useState(false)
    function Change(){
        setState(!state)
    }

    if(state){
        return(<>
        <h1>this is truthy value</h1>
        <button onClick={Change}>Click</button>
        </>)
    }
    else{
        return(<>
        <h1>this is Flasy value</h1>
        <button onClick={Change}>Change</button>
        </>)

    }
}

export default Component1;