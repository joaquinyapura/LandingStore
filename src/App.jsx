import { Sidebar } from "./Components/shared/Sidebar"

import { TiThMenu,TiUser } from "react-icons/ti";
import { FaChartPie } from "react-icons/fa";
import { useState } from "react";





function App() {

  const [menu, setMenu] = useState(false)
  const handleShowMenu=()=>{
    setMenu(!menu)
  }

 

  return (
    <div className="bg-slate-700 min-h-screen w-full">

      <Sidebar menu={menu} />
      
    <div className="bg-slate-800 fixed bottom-0 left-0 z-20 lg:hidden rounded-xl text-gray-400 p-2 w-full bottom-0 text-4xl flex justify-between">
      <button className="p-2 ">
      <TiUser />
      </button>
      <button className="p-2 ">
      <FaChartPie />
      </button>
      <button onClick={handleShowMenu} className="p-2 ">
      <TiThMenu />
      </button>

    </div>


    </div>
  )
}

export default App
