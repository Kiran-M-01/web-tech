let App = () => {
    let a = 10;
    let b= 20;
    let c= "this is js"
    let obj = {
        name:"react js",
        age:15
    }

    let {name,age} = obj
    let arr = [10,20,30,40,50]
    let obj2 = {
        skills:["html","css","js"]
    }
    
    return (
        <div>
            <h1>{a}</h1>
            <h1>{b}</h1>
            <h2>{c}</h2>
            <p>{name}</p>
            <p>{age}</p>

            {arr.map((val)=>{
                return (<div>
                    <h1>{val + 50 + " Hi"}</h1>
                </div>)
            })}

            {obj2.skills.map((val)=>{
                return (<div>
                    <h1>{val}</h1>
                </div>)
            })
            }

        </div>
    )


}

export default App