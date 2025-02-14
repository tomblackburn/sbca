import React, { createContext, useContext, useState } from 'react';
import { GiPotionBall, GiSpellBook } from "react-icons/gi";
import { BsBackpack2Fill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { FaServer } from "react-icons/fa6";
import { IoRocket } from "react-icons/io5";
import { TbWorldUp } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";


type SidebarProps = {
    
};

const Sidebar:React.FC<SidebarProps> = () => {

    return (
        <aside className="h-[calc(100vh-50px)] overflow-y-hidden">
            <nav className="h-full flex flex-col bg-dark-layer-3">

                <button className='navbarBtn group'>
                    <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                        <GiPotionBall size={30} className='text-indigo-500'/>
                        <div className='navbarBtn-tooltip'>Alchemy Station</div>
                    </div>
                </button>

                <button className='navbarBtn group'>
                    <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                        <BsBackpack2Fill size={30} className='text-orange-400'/>
                        <div className='navbarBtn-tooltip'>Ingredient Satchel</div>
                    </div>
                </button>

                <button className='navbarBtn group'>
                    <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                        <ImBooks size={30} className='text-red-500'/>
                        <div className='navbarBtn-tooltip'>Bibliotheca</div>
                    </div>
                </button>

                <button className='navbarBtn group'>
                    <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                        <FaServer size={30} className='text-green-400'/>
                        <div className='navbarBtn-tooltip'>Anti-Hex Server</div>
                    </div>
                </button>

                <button className='navbarBtn group'>
                    <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                        <GiSpellBook size={30} className='text-blue-400'/>
                        <div className='navbarBtn-tooltip'>My Spellbooks</div>
                    </div>
                </button>

                <button className='navbarBtn group'>
                    <div className="p-2 pb-2 flex justify-between items-center bg-dark-layer-2 m-3 rounded-md hover:bg-dark-layer-1">
                        <IoRocket size={30} className='text-yellow-500'/>
                        <div className='navbarBtn-tooltipExtension'>
                            <div className='items-center inline-block mr-5 ml-1'>
                                <TbWorldUp size={30} className='text-yellow-500'/>
                                <div className='navbarBtnExtension-tooltip'>Launch Operations</div>
                            </div>
                            <div className='items-center inline-block mr-1'>
                                <div className='navbarBtn group'>
                                    <GiAutoRepair size={30} className='text-yellow-500'/>
                                    <div className='navbarBtnExtension-tooltip'>Ship Mechanics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                
            </nav>
        </aside>
    )
}

export default Sidebar;



