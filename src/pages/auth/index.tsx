import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/firebase/firebase";
import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { useRecoilValue } from "recoil";

type AuthPageProps = {

};

const AuthPage:React.FC<AuthPageProps> = () => {
	const authModal = useRecoilValue(authModalState);
	const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router]);

	//if (pageLoading) return null;

	return (
		<div className="bg-dark-gray-bg h-screen relative">
			<div className="max-w-7xl mx-auto">
				<Navbar />
				<div className="flex items center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
					<Image src='/logo.png' alt='Enter a world where magic weaves across code' width={850} height={700} />
				</div>
				{authModal.isOpen && <AuthModal />}
			</div>
		</div>
	);
};
export default AuthPage;
