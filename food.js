import React from "react"
import ReactDOM from"react-dom/client"
import { About } from "./components/About";
// import { createBrowserRouter ,RouterProvider} from "react-router-dom";




import { Header } from "./components/Header";
import { Body } from "./components/Body";


const App=()=>{
  return(
   <div>
     <Body/>
     <About/>
     <Header/>
   </div>
  )
}
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App/>)
// const appRouter=createBrowserRouter([
//   {path:"/",
//     element:<App/>
//   },
//   {path:"/About",
//     element:<About/>
//   }

// ])
// const Greet =()=>{
//   return(
//     <div>
//       <h1>hiii</h1>
//     </div>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greet/>)