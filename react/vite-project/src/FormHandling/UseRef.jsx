import React, {useRef} from 'react'

const UseRef = () => {
        let userRef = useRef()
        let passRef = useRef()
        let emailRef = useRef()
        let cPassRef = useRef()


        let handleSubmit=(e)=>{
            e.preventDefault();

            // console.log(e)
            console.log(userRef.current.value)
            console.log(passRef.current.value)
            console.log(emailRef.current.value)
            console.log(cPassRef.current.value)
        }
    return(
        <section>           
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='username' ref={userRef} />
                </div>
                <div>
                    <input type='password' placeholder='password' ref={passRef}/>
                </div>
                <div>
                    <input type='email' placeholder='email address' ref={emailRef}/>
                </div>
                <div>
                    <input type='password' placeholder='confirm password' ref={cPassRef}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>
        </section>
    )
}

export default UseRef