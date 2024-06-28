import React from 'react'

import { NavLink } from "react-router-dom";

import { RiHome3Fill, RiDiscountPercentFill,RiTeamFill, RiMotorbikeFill,RiPieChart2Fill,RiMailAddFill,RiMoneyDollarCircleFill, RiLogoutBoxRFill} from "react-icons/ri";



export const Sidebar = () => {
  return (
    <div className='bg-slate-900 fixed left-0 top-0 w-28 h-full text-gray-300 flex flex-col justify-between rounded-tr-xl rounded-br-xl'>
        <div>
        <ul className=' pl-3 mt-10'>
            <li>
                <h1 className='text-2xl font-bold text-center'>Logo</h1>
            </li>
            <li className='p-2 rounded-tl-lg rounded-bl-lg bg-slate-700 mt-3 '>
                 <NavLink className='bg-orange-600 p-4 block text-2xl rounded-lg text-center'>
                     <RiHome3Fill className='m-auto' /> 
                 </NavLink>  
            </li>
            <li className=' hover:bg-slate-700 mt-3 p-2 rounded-tl-lg rounded-bl-lg   transition-colors group'>
                 <NavLink className='group-hover:bg-orange-600 p-4 block text-2xl rounded-lg text-center transition-colors'>
                     <RiDiscountPercentFill className='m-auto' /> 
                 </NavLink>  
            </li>
            <li className=' hover:bg-slate-700 mt-3 p-2 rounded-tl-lg rounded-bl-lg   transition-colors group'>
                 <NavLink className='group-hover:bg-orange-600 p-4 block text-2xl rounded-lg text-center transition-colors'>
                     <RiTeamFill className='m-auto' /> 
                 </NavLink>  
            </li>
            <li className=' hover:bg-slate-700 mt-3 p-2 rounded-tl-lg rounded-bl-lg   transition-colors group'>
                 <NavLink className='group-hover:bg-orange-600 p-4 block text-2xl rounded-lg text-center transition-colors'>
                     <RiMotorbikeFill className='m-auto' /> 
                 </NavLink>  
            </li>
            <li className=' hover:bg-slate-700 mt-3 p-2 rounded-tl-lg rounded-bl-lg   transition-colors group'>
                 <NavLink className='group-hover:bg-orange-600 p-4 block text-2xl rounded-lg text-center transition-colors'>
                     <RiPieChart2Fill className='m-auto' /> 
                 </NavLink>  
            </li>
            <li className=' hover:bg-slate-700 mt-3 p-2 rounded-tl-lg rounded-bl-lg   transition-colors group'>
                 <NavLink className='group-hover:bg-orange-600 p-4 block text-2xl rounded-lg text-center transition-colors'>
                     <RiMailAddFill className='m-auto' /> 
                 </NavLink>  
            </li>
            <li className=' hover:bg-slate-700 mt-3 p-2 rounded-tl-lg rounded-bl-lg   transition-colors group'>
                 <NavLink className='group-hover:bg-orange-600 p-4 block text-2xl rounded-lg text-center transition-colors'>
                     <RiMoneyDollarCircleFill className='m-auto' /> 
                 </NavLink>  
            </li>
            
        </ul>

        </div>
        <div>
            <ul className='pl-2'>
            <li className=' hover:bg-slate-700 p-2 rounded-tl-lg rounded-bl-lg   transition-colors group'>
                 <NavLink className='group-hover:bg-orange-600 p-4 block text-2xl rounded-lg text-center transition-colors'>
                     <RiLogoutBoxRFill className='m-auto' /> 
                 </NavLink>  
            </li>

            </ul>
            
        </div>
    </div>
  )
}
