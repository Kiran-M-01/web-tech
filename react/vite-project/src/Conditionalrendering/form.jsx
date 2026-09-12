import React, { useState } from "react";

const Form = () => {
    let [state, setState] = useState(false)
    function change(){
        setState(!state)
    }

    return(
        <section>
            <form action='' method=''>
                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="enter username" />
                </div>
            </form>
        </section>
    )
}

export default Form