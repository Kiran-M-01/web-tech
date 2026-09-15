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



// import NavbarContainer from './Navbar/NavbarContainer'
// import FooterContainer from './Footer/FooterContainer'

// const App = () => {
//     return(
//         <main>
//             <header>
//                 <nav>
//                     <NavbarContainer/>
//                 </nav>
//             </header>

//             <footer>
//                 <FooterContainer/>
//             </footer>
//         </main>
//     )
// }

// export default App


// import Component1 from "./Props/Component1";

// let App = () => {
//     let arr = [10, 20, 30];
//     let obj = {
//         name:"js",
//         age:21
//     }

//     return (
//         <div>
//             <h1>This is App</h1>
//             <Component1 value={{arr,obj}} />
//         </div>
//     );
// };

// export default App;

// task
// import Component1 from "./Props/Component1";

// const App = () => {
//     return (
//         <div>
//             <h1>This is App</h1>

//             <Component1 />
//         </div>
//     );
// };

// export default App;


// import React, { useState } from 'react'
// const App = () => {

//     let [count,setCount] = useState(1)

//     function Increment(){
//         if (count < 10) {
//             setCount(count + 1);
//         }
//     }
//     function Decrement(){
//         if (count > 1) {
//             setCount(count - 1);
//         }    
//     }
//     return (
//         <div>
//             <h1>this is app</h1>
//             <h1>{count}</h1>
//             <button onClick={Increment}>Increment</button>
//             <button onClick={Decrement}>Decrement</button>

//         </div>
//     );
// };

// export default App;

// CONDITIONAL RENDERING
// 1.IF-ELSE
// import Component1 from './Props/Component1'
// const App = () => {
//     return (
//         <div>

//             <Component1 />
//         </div>
//     );
// };

// export default App;

// 2.TERNARY

// import Ternary from './Conditionalrendering/Ternary.jsx'
// const App = () => {
//     return (
//         <div>
//             <Ternary />
//             <h1>hii</h1>
//         </div>
//     );
// };

// <h1>hii</h1>

// import Form from './Conditionalrendering/form'
// import './style.css'

// const App = () => {
//     return (
//         <div>
//             <Form />
            
//         </div>
//     );
// };


// export default App;

import UseRef from './FormHandling/UseRef'
import SingleRef from './FormHandling/SingleRef'
const App = () => {
    return (
        <div>
            <SingleRef/>
            
        </div>
    );
};


export default App;

