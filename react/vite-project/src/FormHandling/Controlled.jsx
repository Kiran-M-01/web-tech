import React, { useState } from 'react'

const Controlled = () => {


    let [state, setState] = useState({
        username:"",
        password:"",
        confirmpassword:"",
        email:""
    })

    console.log(state)
    let {username,password,confirmpassword,email} = state

    let handleChange = (e) =>{
        let {name,value} = e.target
        setState({...state,[name]:value})
        
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }

    return(
        <section className="h-[100vh] w-[100vw] bg-black/65  flex justify-center items-center">
            <form onSubmit={handleSubmit} className="h-[82vh] p-5 w-[30vw] bg-black text-white rounded-[10px] flex flex-col gap-5" >

                <div className="flex flex-col" >
                    <label htmlFor="">Username </label>
                    <input type="text" placeholder="username" className="border border-gray-400 rounded-[5px] p-1" name="username" value={username} onChange={handleChange}  />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Password </label>
                    <input type="password" placeholder="password" className="border border-gray-400 rounded-[5px] p-1" name="password" value={password} onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Confirm Password </label>
                    <input type="password" placeholder="confirm password" className="border border-gray-400 rounded-[5px] p-1" name="confirmpassword" value={confirmpassword} onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Email </label>
                    <input type="email" placeholder="email"  className="border border-gray-400 rounded-[5px] p-1" name="email" value={email} onChange={handleChange} />
                </div>

                <div>
                    <button className="w-[100%] bg-green-700 rounded-[5px] p-1 mt-4">Register</button>
                </div>

            </form>
        </section>
    )
}

export default Controlled