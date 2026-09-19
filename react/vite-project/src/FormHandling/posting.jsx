import React, { useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";


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
    
        let handleSubmit = async (e) => {
            e.preventDefault()
            console.log(state)
            if(username == "" && password == "" && email == "" && address == ""){
                toast.error("All fields are Mandatory")
                return;
            }
            if(password.length < 6){
                toast.error("password should be more than  6 charecters")
                return;
            }


            try{
                // let data = await fetch("http://localhost:4200/users",{
                //     method:"POST",
                //     headers:{"Content-type":"application/json"},
                //     body: JSON.stringify(state)
                // })

                await axios.post("http://localhost:4200/users",state);
                toast.success(`${email} has been registered successfully`)
            } catch(e){
                toast.error("Something went wrong")
                console.log(e);
            }
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