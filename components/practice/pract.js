import React from "react";
import ReactDom from "react-dom/client";

const ele=<spam>React elemnt</spam>

const js= (
    <div>
        <h1 className="Title" >{ele}calling js elemnt from react componennt using flower brackets </h1>
    </div>
);

const Title=function(){
    return(
    <div>
        <h1 className="Title">calling Title from the HeadingComponent</h1>
    </div>
)};
// both are same normal function and arrow function 
const HeadingComponent=()=>(
    <div>
        {Title()}
        <Title/>
        <Title></Title>
        {/* {js} */}
        <h1 className="Heading">Namaste react functional component</h1>
    </div>
);
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);



