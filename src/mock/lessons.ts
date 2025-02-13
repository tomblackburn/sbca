export type Lesson = {
	id: string;
	title: string;
	difficulty: string;
	chapter: string;
	order: number;
	videoId?: string;
};

export const lessons: Lesson[] = [
	{
		id: "navigating-interface",
		title: "Navigating the Interface",
		difficulty: "Easy",
		chapter: "Introduction",
		order: 1,
		videoId: "8-k1C6ehKuw",
	},
	{
		id: "intro",
		title: "Introduction and seeing code for the first time",
		difficulty: "Easy",
		chapter: "Introduction",
		order: 2,
		videoId: "",
	},
	{
		id: "spot-mistakes",
		title: "Basic Alchemy: Spotting Mistakes",
		difficulty: "Easy",
		chapter: "Introduction",
		order: 3,
		videoId: "",
	},
	{
		id: "xp-potion",
		title: "Basic Alchemy: An experience like no other",
		difficulty: "Easy",
		chapter: "Introduction",
		order: 4,
		videoId: "xty7fr-k0TU",
	},
	{
		id: "scriptcraft",
		title: "The Weaving of Enchanted Strings through Pythonic Scriptcraft",
		difficulty: "Easy",
		chapter: "Introduction",
		order: 5,
		videoId: "ZfFl4torNg4",
	},
];