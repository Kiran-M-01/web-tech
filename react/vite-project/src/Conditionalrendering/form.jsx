import React, { useState } from "react";

const Form = () => {
    let [state, setState] = useState(false)
    function change(){
        setState(!state)
    }

    return(
        <main id="form_id">
        <section>
            <form action='' method=''>
                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="enter username" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"  placeholder="enter password" />
                </div>
                <div>
                    <label htmlFor="" > Email</label>
                    <input type="email" placeholder="enter email" />
                </div>
                <div>
                    <label htmlFor="">confirm password</label>
                    <input type="passowrd"  placeholde="confirm password"/>
                </div>
                <button>Register</button>
            </form>
        </section>
        </main>
    )
}

export default Form