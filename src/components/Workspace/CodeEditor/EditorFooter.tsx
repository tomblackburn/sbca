import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { IoClose } from 'react-icons/io5';

type EditorFooterProps = {
};

const EditorFooter: React.FC<EditorFooterProps> = () => {
	const [zeusPopup, setZeusPopup] = useState({
        isOpen: false,
    });

    const closePopup = () => {
		setZeusPopup({ isOpen: false });
	};

    useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === "Escape") closePopup();
            };
            window.addEventListener("keydown", handleEsc);
    
            return () => window.removeEventListener("keydown", handleEsc);
        }, []);
		
	return (
		<>
			<div className='flex bg-dark-layer-1  w-full'>
				<div className='mx-5 my-[10px] flex justify-between w-full'>
					<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
						<button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2'>
							Console
							<div className='ml-1 transform transition flex items-center'>
								<BsChevronUp className='fill-gray-6 mx-1 fill-dark-gray-6' />
							</div>
						</button>
					</div>
					<div className='ml-auto flex items-center space-x-4'>
						{/*<button className='px-3 py-1.5 text-sm items-center whitespace-nowrap transition duration-200 ease-in-out shadow-lg hover:shadow-purple-500/50 inline-flex bg-purple-700  hover:bg-purple-800 font-bold text-white rounded'>*/}
						<button className="px-3 py-1.5 text-sm inline-flex items-center font-bold whitespace-nowrap rounded bg-purple-700 text-white shadow-lg transition duration-200 ease-in-out hover:bg-purple-800 hover:shadow-purple-500/50 hover:animate-float">
							Cast Spell
						</button>
						<button
							className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-green-700 hover:bg-green-3 rounded-lg'
							onClick={() =>
								setZeusPopup({ isOpen: true })
							}
						>
							Complete Ritual
						</button>
					</div>
				</div>
			</div>
			{zeusPopup.isOpen && (
				<div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
						<div
							className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
							onClick={closePopup}
						></div>
						<div className='w-full z-20 h-1/2 px-6 relative max-w-4xl bg-dark-layer-3'>
							<div className='w-full h-full flex items-center justify-center relative '>
								<div className='w-full relative text-white'>
									<IoClose
										fontSize={"35"}
										className='cursor-pointer absolute -top-16 right-0'
										onClick={closePopup}
									/>
									<p className='mb-4'><strong>Congratulations, learner!</strong> You have taken your very first steps into the arcane world of coding magic! I’m very impressed how unafraid you were to weave such incantations and test the flow of your newfound power. This is the mark of a true wizard—one who does not hesitate when faced with the unknown, but instead reaches out tests him or herself.</p>
									<p className='mb-4'>What you have just conjured is but a glimpse into the deeper mysteries of <strong>Object-Oriented Spellcrafting</strong>, a powerful branch of Pythonomics that you will soon come to master. But be patient, for every great mage must first learn to control the raw elements of their craft before shaping them into huge mountains</p>
									<p className='mb-4'>Many lessons lie ahead, many great and fun challenges to overcome, and magical lessons to attend. Keep your mind sharp, your curiosity alight, and your eagerness to learn fresh!</p>
									<p>For now, move onto the next lesson and step boldly forward. The true journey has only just begun. 🔮📖</p>
								</div>
							</div>
						</div>
					</div>
			)}
		</>
	);
};
export default EditorFooter;