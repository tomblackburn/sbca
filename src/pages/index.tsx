import LessonsTable from "@/components/LessonsTable/LessonsTable";
import Topbar from "@/components/Topbar/Topbar";

export default function Home() {
	return (
		<>
			<main className="bg-dark-layer-2 min-h-screen">
				<Topbar />
				<h1
				className='text-2xl text-center text-gray-700 dark:text-gray-100 font-medium uppercase mt-10 mb-5'>
					🧙🖥️ Where Magic and Code Become One 🔮✨
				</h1>
				<div className="relative overflow-x-auto mx-auto px-6 pb-10 text-sm text-left text-gray-100 dark:text-gray-300 sm:w-7/12 w-full max-w-[1200px] mx-auto" >
					<p className="pb-3">Step into a realm where logic weaves spells and code conjures wonders. <b>Spellbound Coding is not just a learning experience like never before</b>—it’s an enchanting journey into the arcane arts of programming. Through the latest in teaching techniques, Spellbound coding combines the power of immersive storytelling, gamified challenges and an engaging community, creating a world of magical events that help to speed up learning and increase knowledge retention.</p>
					<p className="pb-3">As a student of the legendary Arrakis Arcanum, you will step into the role of a student coder, learning to crafting powerful enchantments and summoning digital constructs through Pythonomancy. From your very first incantation—a simple print statement—to the grand summoning of fully developed applications, you will transform from a fledgling apprentice into a formidable Grand Magus. Our carefully structured lessons and storylines mixed with coding projects ensure that every challenge you face builds real-world programming skills as well as magical-world ones.</p>
					<p className="pb-3">But the magic does not end there. For those who seek the deeper and more esoteric arts, your quest continues to establish three more pillars of enlightenment - Mathematics, Web Development, and Computational Thinking & Problem Solving—each serving as an essential weave in your fabric. Master these foundational disciplines before you choose your specialization pathway and delve into even deeper mysteries.</p>
					<p className="pb-3">You will not walk this path alone. Within the enchanted halls of our Discord coven, you will find a vibrant community of fellow spellcasters—witches and wizards of code—ready to aid you in your trials. Engage in community spell duels, decrypt secret guild messages across the MagicNET, and rise through the ranks of your chosen order, and support your fellow kin.</p>
					<p className="pb-3">With Spellbound Coding, learning is no longer a chore, but an adventure! Dare you embark on this magical quest? Are you ready to unlock your potential and master the magic of code?</p>
				</div>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
				<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
					<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
					<tr>
						<th scope='col' className='px-1 py-3 w-0 font-medium'>
						Status
						</th>
						<th scope='col' className='px-9 py-3 w-0 font-medium'>
						Title
						</th>
						<th scope='col' className='px-6 py-3 w-0 font-medium'>
						Chapter
						</th>
						<th scope='col' className='px-3 py-3 w-0 font-medium'>
						Difficulty
						</th>
						<th scope='col' className='px-3 py-3 w-0 font-medium'>
						Video
						</th>
					</tr>
					</thead>
					<LessonsTable />
				</table>
				</div>
			</main>
		</>
	);
}
