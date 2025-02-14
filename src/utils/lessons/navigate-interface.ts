import asset from 'assert'
import { Lesson } from '../types/lesson';

const starterCodeNavigateInterface = `a = 1`

// Check if the user has the correct answer
const handlerNavigateInterface = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        return true;
    } catch (error:any) {
        console.log("Nagivate the Interface - Handler Function Error")
        throw new Error(error);
    }
}

export const navigateInterface: Lesson = {
	id: "navigate-interface",
	title: "1. Navigating the Interface",
	content: `
        <div class='flex items-center justify-center'><img src="https://img.freepik.com/premium-photo/powerful-lion-with-majestic-rainbow-wings-walking-magical-nature_661495-114517.jpg" alt="Zeus" /></div>
        <p class='mt-3'>Welcome student! I am <strong>Zeus Lion Magus</strong>, your guide through this grand journey of magic and code. But before we embark on our adventure, let me show you the tools of your craft and look around the learning interface.
        <p class='mt-3 ml-3 mr-2'>✨ <strong>The Lesson Panel</strong> – This is where you are reading from now. It is the heart of your lessons and where the unfolding story resides. Here, I will will also share my wisdom, guide you through challenges, and reveal powerful coding incantations.</p>
        <p class='mt-3 ml-3 mr-2'>🔮 <strong>The Code Editor</strong> – To your right lies your <strong>spellcrafting chamber</strong> (the code editor), where you will inscribe the lesson’s code. Press the <strong>Run </strong>button to test your magic—do this as many times as you need, for even the greatest sorcerers refine their spells. When you are satisfied, press <strong>Submit</strong>, and I shall evaluate your work. If your spell is true, we shall advance to the next lesson.</p>
        <p class='mt-3 ml-3 mr-2'>💁 <strong>Wisdom of Zeus -</strong> Just below the lesson panel lies the <strong>Wisdom of Zeus</strong>, a reservoir of hidden advise. <strong>Resist the temptation to open it too soon! </strong>True mastery comes from exploration and problem-solving, so only reveal these hints when you’ve truly exhausted all other options. In some lessons, unlocking tips will require <strong>Runestones</strong>—precious magical tokens earned through your journey and by engaging in discussions within the mystical realm of <strong>Discordia</strong>. Use them wisely, for knowledge is most powerful when earned, not simply given.</p>
        <p class='mt-3 ml-3 mr-2'>📜 <strong>The Grand Archives</strong> – Throughout your journey, you will encounter <strong>enchanted tomes </strong>that hold deeper wisdom. Some will illuminate key concepts, while others may be required for the classes you attend within the story. Should you ever need them, a <strong>magical scroll </strong>awaits in the top-right corner of your screen—simply summon it, and the knowledge within shall be revealed. I shall remind you when you first attend your potion-making class!</p>
        <p class='mt-3'>There is much more to discover, though I would enjoy sharing it all with you, I will reveal my teachings in due time. For now, <strong>step forth into the world of Spellbound Coding—your adventure begins now!</strong></p>
    `,
    handlerFunction: handlerNavigateInterface,
	starterCode: starterCodeNavigateInterface,
	order: 1,
	starterFunctionName: "function twoSum(",
};

