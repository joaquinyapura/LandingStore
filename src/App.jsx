import { Sidebar } from "./Components/shared/Sidebar"

import { TiThMenu,TiUser } from "react-icons/ti";
import { FaChartPie,FaSearch } from "react-icons/fa";
import { useState } from "react";

import  comida  from "./assets/comida.png";





function App() {

  const [menu, setMenu] = useState(false)
  const handleShowMenu=()=>{
    setMenu(!menu)
  }

 

  return (
    <div className="bg-slate-700 min-h-screen w-full">

      <Sidebar menu={menu} />
      
    <nav className="bg-slate-800 fixed left-0 z-20 lg:hidden rounded-xl text-gray-400 p-2 w-full bottom-0 text-4xl flex justify-between">
      <button className="p-2 ">
      <TiUser />
      </button>
      <button className="p-2 ">
      <FaChartPie />
      </button>
      <button onClick={handleShowMenu} className="p-2 ">
      <TiThMenu />
      </button>

    </nav>


    <main className="grid grid-cols-1 lg:grid-cols-8 lg:pl-28">
      <div className="lg:col-span-6 text-white flex flex-col gap-2 mt-4 px-4">
        <header>

        <h1 className="text-3xl font-bold">La Pinta restaurant</h1>
        <p className="text-gray-300">21 de febrero 2024</p>
        </header>
        <form action="">
          <div className="relative">
            <FaSearch className="absolute text-2xl ml-2 mt-2" />
            <input type="text" className="bg-slate-900 w-full py-2 rounded-lg pl-10 outline-none" placeholder="Buscar" />
          </div>
        </form>
        <div className="flex gap-3 font-light mb-10">
          <a href="#" className=" hover:border-b-2   hover:border-b-orange-500 hover:text-orange-500 transition-all">Sandwiches</a>
          <a href="#" className="hover:border-b-2   hover:border-b-orange-500 hover:text-orange-500 transition-all">Hamburguesas 1</a>
          <a href="#" className="hover:border-b-2   hover:border-b-orange-500 hover:text-orange-500 transition-all">Pizzas</a>
          <a href="#" className="hover:border-b-2   hover:border-b-orange-500 hover:text-orange-500 transition-all">Bebidas</a>
          <a href="#" className="hover:border-b-2   hover:border-b-orange-500 hover:text-orange-500 transition-all">Con Alcohol</a>
        </div>

        {/* contenido */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center">
          <div className="p-2 bg-slate-800 flex flex-col items-center rounded-lg ">
            <img src={comida} className="-mt-10" alt="" srcset="" />
            <h2 className="text-2xl lg:text-sm">Nombre del plato</h2>
            <span>$222.00</span>
            <p className="text-gray-500 lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
          </div>
          <div className="p-2 bg-slate-800 flex flex-col items-center rounded-lg ">
            <img src={comida} className="-mt-10" alt="" srcset="" />
            <h2 className="text-2xl lg:text-sm">Nombre del plato</h2>
            <span>$222.00</span>
            <p className="text-gray-500 lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
          </div>
          <div className="p-2 bg-slate-800 flex flex-col items-center rounded-lg ">
            <img src={comida} className="-mt-10" alt="" srcset="" />
            <h2 className="text-2xl lg:text-sm">Nombre del plato</h2>
            <span>$222.00</span>
            <p className="text-gray-500 lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
          </div>
          <div className="p-2 bg-slate-800 flex flex-col items-center rounded-lg ">
            <img src={comida} className="-mt-10" alt="" srcset="" />
            <h2 className="text-2xl lg:text-sm">Nombre del plato</h2>
            <span>$222.00</span>
            <p className="text-gray-500 lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
          </div>
        </div>

      </div>
      <div className="lg:col-span-2">carrito</div>
      
    </main>


    </div>
  )
}

export default App
