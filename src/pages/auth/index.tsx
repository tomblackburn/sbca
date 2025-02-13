import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

type AuthPageProps = {

};

const AuthPage:React.FC<AuthPageProps> = () => {
	const authModal = useRecoilValue(authModalState);
	return (
		<div className="bg-dark-gray-bg h-screen relative">
			<div className="max-w-7xl mx-auto">
				<Navbar />
				<div className="flex items center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
					<img src="/logo.png" alt="Enter a world where magic weaves across code" />
				</div>
				{authModal.isOpen && <AuthModal />}
			</div>
		</div>
	);
};
export default AuthPage;
