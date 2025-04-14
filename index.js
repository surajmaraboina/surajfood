import React from "react";
import ReactDOM from "react-dom/client";

// plain elemnt
// const add=React.createElement(
// "div",{id:"GREET"},('sum'))
// React.createElement("div",{},sum())

// function sum(){
//     return 9+9;
// }



// componet which is jsx nothing but js and html
// const Add=function(){
//     return(
//         <div>hellooo</div>
//     )
// }


const Intro=()=>{
    return(<>
    hi friends sum is?
    </>)
}

function some(){
    return 9+9;
}
const Add=()=>{
    return(<>
    {some()}
    <div>    
        <Intro/>

    </div>
    </>
   )
}


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Add/>)