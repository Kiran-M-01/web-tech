import React, { useState } from 'react'


const Posting = () => {

    let [state, setState] = useState({
            username:"",
            password:"",
            email:"",
            address:""
        })
    
        console.log(state)
        let {username,password,email,address} = state
    
        let handleChange = (e) =>{
            let {name,value} = e.target
            setState({...state,[name]:value})
            
        }
    
        let handleSubmit = (e) => {
            e.preventDefault()
            console.log(state)
        }

    return(
        <div>
            <section className="h-[100vh] w-[100vw] bg-black/30  flex justify-center items-center">
                <form onSubmit={handleSubmit} className="h-[82vh] p-5 w-[30vw] bg-slate-700 text-white rounded-[10px] flex flex-col gap-5">

                    <div className="flex flex-col">
                    <label>username</label>
                    <input type="text" placeholder="username" name="username" value={username} onChange={handleChange} className="border border-gray-400 rounded-[5px] p-1"/>
                    </div>

                    <div className="flex flex-col">
                    <label>password</label>
                    <input type="password" placeholder="password" name="password" value={password} onChange={handleChange} className="border border-gray-400 rounded-[5px] p-1" />
                    </div>

                    <div className="flex flex-col">
                    <label>email</label>
                    <input type="email" placeholder="email" name="email" value={email} onChange={handleChange} className="border border-gray-400 rounded-[5px] p-1"/>
                    </div>

                    <div className="flex flex-col">
                    <label>address</label>
                    <input type="textarea" placeholder="address" name="address" value={address} onChange={handleChange} className="border border-gray-400 rounded-[5px] p-1 "/>
                    </div>
                    
                    <div>
                        <button className=" bg-green-700 w-[100%] border border-gray-400 rounded-[5px] p-1">Register</button>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Posting