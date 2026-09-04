// // let App = () => {
// //     let a = 10;
// //     let b= 20;
// //     let c= "this is js"
// //     let obj = {
// //         name:"react js",
// //         age:15
// //     }

// //     let {name,age} = obj
// //     let arr = [10,20,30,40,50]
// //     let obj2 = {
// //         skills:["html","css","js"]
// //     }

// //     let products = [
// //         {
// //             title:"Mobiles",
// //             Price:20000
// //         },{
// //             title:"Electronics",
// //             Price:40000
// //         },{
// //             title:"laptops",
// //             price:200000000
// //         }
// //     ]

// //     let arr1 = [1,2,3,4,5,6,7]
    
    
// //     return (
// //         <div>
// //             <h1>{a}</h1>
// //             <h1>{b}</h1>
// //             <h2>{c}</h2>
// //             <p>{name}</p>
// //             <p>{age}</p>

// //             {arr.map((val)=>{
// //                 return (<div>
// //                     <h1>{val + 50 + " Hi"}</h1>
// //                 </div>)
// //             })}

// //             {obj2.skills.map((val)=>{
// //                 return (<div>
// //                     <h1>{val}</h1>
// //                 </div>)
// //             })
// //             }

// //             {
// //                 products.map((value) => {
// //                     console.log(value);

// //                     return(
// //                         <div>
// //                             <h1>Title:{value.title}</h1>
// //                             <h1>Title:{value.price}</h1>
// //                         </div>
// //                     )
// //                 })
// //             }

// //         </div>
// //     )


// // }

// // export default App

// // let App = () => {

// //     let arr = [1,2,3,4,5,6,7]
// //     return(
// //         <div>
// //         <h1>{arr.reduce((acc,curr) =>acc + curr )}</h1>
// //         </div>
// //         )
// //     }

// // export default App

// let App = () => {
// let arr = ["this"," is"," js"]
// return(
//     <section>
//         {
//             arr.map((value,index)=>{
//                 return(
//                     <fragment key={index+1}>
//                         <h1>{value.toUpperCase()}</h1>
//                     </fragment>
//                 )
//             })
//     }
//     </section>
// )
// }

// export default App



import NavbarContainer from './Navbar/NavbarContainer'
import FooterContainer from './Footer/FooterContainer'

const App = () => {
    return(
        <main>
            <header>
                <nav>
                    <NavbarContainer/>
                </nav>
            </header>

            <footer>
                <FooterContainer/>
            </footer>
        </main>
    )
}

export default App