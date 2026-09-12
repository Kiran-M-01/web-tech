import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Form = () => {
    let [eye,setEye] = useState(false)
    let handleClick = () => {
        setEye(!eye) 
    }

    return(
        <main id="form_id">
        <section>
            <form action='' method=''>
                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="enter username" />
                </div>
                <div id="password_section">
                    <label htmlFor="">Password</label>
                    <input type={eye?"text":"password"}  placeholder="enter password" />
                    <section id="eye_section" onClick={handleClick}>
                        { eye? <FaEye />: <FaEyeSlash />}
                    </section>
                </div>
                <div>
                    <label htmlFor="" > Email</label>
                    <input type="email" placeholder="enter email" />
                </div>
                <div>
                    <label htmlFor="">confirm password</label>
                    <input type="password"  placeholde=""/>
                </div>
                <button>Register</button>
            </form>
        </section>
        </main>
    )
}

export default Form