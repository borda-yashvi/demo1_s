import React from "react"
import Navbar from "./Navbar"

const Home1 = () =>{
    return(
        <>
        <Navbar title="TextUtils" />
        
         <h1> Home contain </h1>   
        </>
    )

}

export default Home1

// const Home = () =>{
//     const a = useContext(NoteContext)
//     useEffect(()=>{
//         a.update()
//     },[])
//     return(
//         <>
//          <h1> Home contain {a.state.Name} {a.state.Pwd}</h1>   
//         </>
       
//     )
// }