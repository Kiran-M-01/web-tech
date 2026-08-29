import React from "react"
import {createRoot} from 'react-dom/client';

let a = React.createElement("div", {id: "one"},React.createElement("h1",null,"this is h1"),React.createElement("h2",null,"this is h2"))
createRoot(document.getElementById('root')).render(a)