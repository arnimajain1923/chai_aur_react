import { useState } from "react"
function Bg() {
  const [color , setColor] = useState("grey")
  return (
   
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap m-10 rounded-3xl justify-center bottom-12 inset-x-0 px-2  bg-slate-700 shadow-white ">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg px-3 py-2 rounded-3xl bg-grey-500 opacity-100">
          <button className="bg-red-500 outline-none font-semibold  p-4 rounded-md text-black " onClick={()=>{
            setColor("red")
          }}>Red</button>
          <button className="bg-green-500 outline-none font-semibold  p-4 rounded-md text-black opacity-100"onClick={()=>{
            setColor("green")
          }}>green</button>
          <button className="bg-yellow-500 outline-none font-semibold  p-4 rounded-md text-black "onClick={()=>{
            setColor("yellow")
          }}>yellow</button>
          <button className="bg-blue-950 outline-none font-semibold  p-4 rounded-md text-black "onClick={()=>{
            setColor("blue")
          }}>blue</button>
          <button className="bg-white
          outline-none font-semibold  p-4 rounded-md text-black "onClick={()=>{
            setColor("white")
          }}>white</button>
        </div>
      </div>
      
    </div>
       
  )
}

export default Bg