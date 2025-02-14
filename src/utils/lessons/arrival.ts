import asset from 'assert'
import { Lesson } from '../types/lesson';

const starterCodeArrival = `a = 1`

// Check if the user has the correct answer
const handlerArrival = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        return true;
    } catch (error:any) {
        console.log("Arrival - Handler Function Error")
        throw new Error(error);
    }
}

export const arrival: Lesson = {
	id: "arrival",
	title: "2. Arrival at Arrakis Arcanum",
	content: `
        <p class='mt-3'>“Ah, [student_name], there you are. I couldn’t quite find you at first in this crowd. Well, there certainly are a lot more people here than I thought. Mind if I sit with you?”</p>
        <p class='mt-3'>It was Durelis, a fellow first-year student whom I had shared an entrycar with to the school gates. He seemed pleasant enough, though his elite background made me a bit envious. His suit was immaculately tailored, the insignia of his prestigious lineage embroidered in shimmering silver thread upon his blazer.</p>
        <p class='mt-3'>I pointed to the seat next to me and nodded, “Sure”.</p>
        <p class='mt-3'>Before he could strike up a conversation, a deep, resonating chime echoed through the grand auditorium, followed by another. The chatter around us quieted to a hush as the overhead lights dimmed, leaving only the flickering glow of floating orbs above us, like lightning captured in bottles.</p>
        <p class='mt-3'>Spotlights focused on the grand podium at the center of the stage, where a smartly dressed middle-aged man stood. His suit, was more lavish, boasting peaked labels, and a brass-colored trim along the edges, accented with a shining purple tie.</p>
        <p class='mt-3'>“Welcome, students to Arrakis Arcanum, the school for wizards and witches,” his voice rang through the hall with practiced ease, “Amongst you are the best and brightest of our generation, those who have demonstrated an exceptional aptitude for numbers and logic—the very foundation of magic itself.”</p>
        <p class='mt-3'>A murmur rippled through the crowd, nerves and excitement seemed to ripple through the air, stoking the lightning orbs with energy. Durelis leaned closer to whisper, “I heard they make us solve equations to unlock our wands.”</p>
        <p class='mt-3'>The headmaster stepped from his podium to the edge of the stage, his eyes scanning the crowd. He looked down before, removing his glasses and looking back out to the students again. “Magic is not born from mere imagination, but from patterns, from sequences, and calculations. An author by the name of Arthur C. Clarke once wrote ‘Magic is just science that we don’t understand yet’ and he was right. Over the years since then, we have come to understand magic and harness it using the powers of Mathematics. Here at Arrakis Arcanum, you will learn to wield arithmetic to craft spells, to use geometry to shape reality, and to harness algebra to bend the very fabric of time.”</p>
        <p class='mt-3'>He gestured, and the banners behind him unfurled, displaying the core disciplines of the school: Arithmancy, Geometrics, and Algebromancy.</p>
        <p class='mt-3'>“Each of you will begin your journey by mastering these fundamental arts. As first-years, you will learn to channel your magical energies through the application of equations, using formulas to cast simple spells and conjure magical potions and concoctions. Be prepared however—your mind will be your greatest weapon, and numbers will be your most potent spells.”</p>
        <p class='mt-3'>A soft wave of applause filled the room as the headmaster stepped aside, and a tall, stern-looking woman in emerald dress took his place.</p>
        <p class='mt-3'>“I am Professor Althara, your Arithmancy instructor,” she said sharply. “By the end of your first term, you will be expected to perform the fundamental calculations required to cast elementary enchantments. Addition, subtraction, multiplication—these are not mere classroom exercises; they are the building blocks of magical prowess and it is where you will start”</p>
        <p class='mt-3'>I felt a mix of excitement and apprehension bubble inside me. The thought of weaving spells through numbers was fascinating—and daunting.</p>
        <p class='mt-3'>“And remember,” the headmaster added, stepping back to the podium with a knowing smile, “magic favors those who persevere. Hard work and determination will unlock potential beyond your wildest dreams.”</p>
        <p class='mt-3'>As the faculty members left the stage, Durelis turned to me with a grin. “This is going to be quite the adventure, isn’t it?”</p>
        <p class='mt-3'>I couldn’t help but smile back. “Yeah, I think it will be.”</p>
        <p class='mt-3'>The journey had begun.</p>
    `,
    handlerFunction: handlerArrival,
	starterCode: starterCodeArrival,
	order: 2,
	starterFunctionName: "function arrival(",
};

