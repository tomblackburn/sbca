import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { Code } from '@mantine/core';

type LessonDescriptionProps = {
    
};

const LessonDescription:React.FC<LessonDescriptionProps> = () => {
    
    return (
        <div className='bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>1. Basic Alchemy: An Introduction</div>
						</div>
						<div className='flex items-center mt-3'>
							<div
								className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								Easy
							</div>
							<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
								<BsCheck2Circle />
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
								<AiFillLike />
								<span className='text-xs'>120</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'>
								<AiFillDislike />
								<span className='text-xs'>2</span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '>
								<TiStarOutline />
							</div>
						</div>

						{/* Lesson Statement(paragraphs) */}
						<div className='text-white text-sm'>
							<p className='mt-3'>
                                The flickering candlelight cast long shadows over the ancient stone walls of the potion classroom. The scent of aged parchment and dried herbs filling the air. At the front of the class, Professor Eldrin paced, his long emerald robes trailing behind him. With a flick of his wand, the blackboard filled with elegant golden script.
							</p>
							<p className='mt-3'>
                                "Potion-making is a delicate dance of precision," she began, her voice calm yet commanding. "Even the slightest miscalculation can lead to… unfortunate consequences. Before we begin, we must prepare the proper tools. And that means selecting the correct cauldron."
							</p>
                            <p className='mt-3'>
                                To ensure there is enough room to brew the potion, you must select the correct size cauldron. Set the <Code color="dark" c="red">cauldron_type</Code> variable to "medium".
                            </p>
						</div>

						{/* Examples */}
						<div className='mt-4'>
							<div>
								<p className='font-medium text-white '>Example 2: </p>
								<div className='example-card'>
									<pre>
                                        cauldron_type = ""
									</pre>
								</div>
							</div>
                        </div>

                        <div className='text-white text-sm'>
                            <p className='mt-3'>
                                Next, you need a cauldron material that won’t interfere with the reaction. Create a new variable called <Code color="dark" c="red">cauldron_material</Code> and set the value to "steel". 
                            </p>
						</div>

                        <div className='mt-4'>
							<div>
								<p className='font-medium text-white '>Example 2: </p>
								<div className='example-card'>
									<pre>
                                        cauldron_type = "medium"
									</pre>
								</div>
							</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LessonDescription;