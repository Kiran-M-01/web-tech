import React, {useRef} from 'react'

const SingleRef = () => {
        let formRef = useRef({
            username:"",
            password:"",
            email:""
            
        })
        // console.log(formRef);


        let handleSubmit=(e)=>{
            e.preventDefault();

            console.log(formRef.current.username.value)
            console.log(formRef.current.password.value)
            console.log(formRef.current.email.value)
            
        }
    return(
        <section>           
            <form onSubmit={handleSubmit} ref={formRef}>
                <div>
                    <input type='text' placeholder='username' name='username' />
                </div>
                <div>
                    <input type='password' placeholder='password' name='password'/>
                </div>
                <div>
                    <input type='email' placeholder='email address' name='email'/>
                </div>
                
                <div>
                    <button>Submit</button>
                </div>

            </form>
        </section>
    )
}

export default SingleRef