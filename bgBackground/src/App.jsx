import {useState} from "react"

function App() {
  
  const [Color ,SetColor] = useState("yellow")
  return (
      <div className=" w-full h-screen duration-200"style={{backgroundColor:Color}}>
        <div className=" flex flex-wrap fixed  justify-center bottom-12 inset-x-0 px-2 ">
        <div className=" flex flex-wrap  justify-center  gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button onClick={() =>SetColor("red")}
            className=" outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{backgroundColor:'red'}}> RED</button> 
          <button
       onClick={() =>SetColor("pink")}     className=" outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{backgroundColor:'pink'}}> pink</button> 
          <button
            onClick={() =>SetColor("black")}className=" outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{backgroundColor:'black'}}> Black</button> 
          <button
       onClick={() =>SetColor("blue")}  className=" outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{backgroundColor:'blue'}}> blue</button> 
          </div>
        </div>
      </div>
  )
}

export default App
