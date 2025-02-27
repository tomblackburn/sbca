import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import Logout from "../Buttons/Logout";
import { FaChevronLeft, FaChevronRight, FaMagic  } from "react-icons/fa";
import { BsList } from "react-icons/bs";


type TopbarProps = {
	lessonPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ lessonPage }) => {
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();
	
	return (
		<nav className='relative flex h-[60px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!lessonPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href='/' className='h-[34px] flex-1'>
					<Image src='/logo-alt.png' alt='Logo' height={150} width={150} />
				</Link>

				{lessonPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							
						>
							<FaChevronLeft />
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
						>
							<div>
								<BsList />
							</div>
							<p>Lesson List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							
						>
							<FaChevronRight />
						</div>
					</div>
				)}

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					{user && (
						<>
							<FaMagic size={20} className="p-0 m-0 text-indigo-500"/>
							<div className="w-[30%] rounded-full border-2 p-1 border-gray-500">
								<div className="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
									<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[47%]">47%</div>
								</div>
							</div>
						</>
					)}
					<div>
						<a
							href=''
							target='_blank'
							rel='noreferrer'
							className='bg-lime-600 py-1.5 px-3 cursor-pointer rounded text-white hover:bg-lime-700 drop-shadow-glow'
						>
							Premium
						</a>
					</div>
					{!user && (
						<Link href='/auth' onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}>
							<button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>Sign In</button>
						</Link>
					)}
					
					{user && (
						<div className='cursor-pointer group relative'>
							<img src='https://randomuser.me/api/portraits/men/89.jpg' alt='Avatar' width={30} height={30} className='rounded-full' />
							<div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
						</div>
					)}
					{user && (
						<div className="leading-4">
							<h4 className="font-semibold text-gray-50">Tom Blackburn</h4>
							<span className="text-xs text-gray-400">Grand Magus</span>
						</div>
					)}
					{user && <Logout />}
				</div>
			</div>
		</nav>
	);
};
export default Topbar;