import React from 'react'


const Posting = () => {
    return(
        <div>
            <section className="h-[100vh] w-[100vw] bg-black/30  flex justify-center items-center">
                <form>
                    <div>
                    <label>username</label>
                    <input type="text" placeholder="username" />
                    </div>
                    <div>
                    <label>password</label>
                    <input type="password" placeholder="password" />
                    </div>
                    <div>
                    <label>email</label>
                    <input type="email" placeholder="email" />
                    </div>
                    <div>
                    <label>address</label>
                    <input type="textarea" placeholder="address" />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Posting