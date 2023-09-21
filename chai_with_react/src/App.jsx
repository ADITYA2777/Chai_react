import { useState } from "react"
import Card from "./card"


function App() {
    
  let [counter ,setcounter]= useState(0)

  // let counter = 15
  const addvalue = () => {
    if (counter < 20) {
       setcounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter>0) {
       setcounter(counter-1)
    }
   
  }
  return (
    <>
      <h1 className=
        " font-bold text-center text-cyan-400 text-2xl bg-slate-400 rounded-xl">Aditya jain </h1>
      {/* <h2>counter value {counter }</h2>
      <button onClick={removeValue}>remove vallue { counter}</button>            
      <button onClick={addvalue}>add vallue {counter}</button>   */}
      {/* <p>footer:{ counter}</p> */}
          <Card channel="adityajan"/>
          <Card channel2 = "adityajan33"/>
          <Card channel=" akshay"/>
    </>
  )
}

export default App
