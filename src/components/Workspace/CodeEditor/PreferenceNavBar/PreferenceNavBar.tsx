import React from "react";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";

type PreferenceNavBarProps = {
    
};

const PreferenceNavBar:React.FC<PreferenceNavBarProps> = () => {
    
    return (
		
		<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>

			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-4 py-[10px] text-xs cursor-pointer mr-1 flex items-center"}>
						<img src="/pythonlogo.png" alt="Python File" className="w-3 mr-2"/>
						<span>main.py</span>
				</div>
				<div className={"bg-dark-layer-1point5 rounded-t-[5px] px-4 py-[10px] text-xs cursor-pointer mr-1 flex items-center"}>
					<img src="/pythonlogo-alt.png" alt="Python File" className="w-3 mr-2"/>
					<span>test_main.py</span>
				</div>
			</div>


			<div className='flex items-center text-white'>
				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
					<div className='flex items-center px-1'>
						<div className='text-xs text-label-2 dark:text-dark-label-2'>Python</div>
					</div>
				</button>
			</div>

			<div className='flex items-center m-2'>
				<button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button>

				<button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineFullscreen />
					</div>
					<div className='preferenceBtn-tooltip'>Full Screen</div>
				</button>
			</div>
		</div>
	);
};

export default PreferenceNavBar;