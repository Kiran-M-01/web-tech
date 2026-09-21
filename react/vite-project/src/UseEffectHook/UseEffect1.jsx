import React, {useEffect, useState} from 'react'

const UseEffect1 = () => {
    let [state,setState] = useState(0)
    let [state1,setState1] = useState(100)
    useEffect(() => {
        console.log("hey it is executed");

    },[state])

    let inc=()=>{
        setState(state+1)
    }
    let dec=()=>{
        setState(state-1)
    }
    return(
        <section>
            <h1>{state}</h1>
            <button onClick={inc} className="bg-green-500">Inc</button>
            <button onClick={dec} className="bg-red-600">Dec</button>
        </section>
    )


}


export default UseEffect1