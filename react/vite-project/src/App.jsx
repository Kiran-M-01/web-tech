let App = () => {
    let a = 10;
    let b= 20;
    let c= "this is js"
    let obj = {
        name:"react js",
        age:15
    }

    let {name,age} = obj
    return (
        <div>
            <h1>{a}</h1>
            <h1>{b}</h1>
            <h2>{c}</h2>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )


}

export default App