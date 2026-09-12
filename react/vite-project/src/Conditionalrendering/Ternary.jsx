import React, { useState } from "react";

// const Ternary = () => {
//     let [state, setState] = useState(false)
//     function change(){
//         setState(!state)
//     }

//     return(
//         <div>
//             {
//                 state ? <div>
//                     <h1>This is Truthy</h1>
//                     <button onClick={change}>Click</button>
//                 </div> : <div>
//                     <h1>This is Falsy</h1>
//                     <button onClick={change}>Click</button>
//                 </div>
//             }
//         </div>
//     )
// }

// export default Ternary

const Ternary = () => {
    let [state, setState] = useState(false)
    function change(){
        setState(!state)
    }

    return(
        <div>
            {
                state && (
                    <>
                    <h1>This is Truthy</h1>
                    </>
                )
            }

            <button onClick={change}>Click</button>
        </div>
    )
}

export default Ternary
