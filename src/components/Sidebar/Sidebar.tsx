import React, { createContext, useContext, useState } from 'react';
import { GiPotionBall, GiSpellBook } from "react-icons/gi";
import { BsBackpack2Fill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { FaServer } from "react-icons/fa6";
import { IoRocket } from "react-icons/io5";


type SidebarProps = {
    
};

const Sidebar:React.FC<SidebarProps> = () => {

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-dark-layer-3">
                <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                    <GiPotionBall size={30} className='text-indigo-500'/>
                </div>
                <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                    <BsBackpack2Fill size={30} className='text-orange-400'/>
                </div>
                <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                    <ImBooks size={30} className='text-red-500'/>
                </div>
                <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                    <FaServer size={30} className='text-green-400'/>
                </div>
                <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                    <GiSpellBook size={30} color='white'/>
                </div>
                <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                    <IoRocket size={30} color='white'/>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;



