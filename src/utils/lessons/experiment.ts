import asset from 'assert'
import { Lesson } from '../types/lesson';

const starterCodeExperiment = `althara = Professor("Althara", "Magical Syntaxes", None)
fremen = Professor("Fremen", "Readability and Structural Analysis", "Headteacher")
		
{student_name} = Student("{student_name}", "{student_gender}", "{student_hair_color}", "{student_hair_length}", None, 1)
durelis = Student("Durelis", "male", None, 1)
	
# -----------------DO NOT EDIT ANY CODE ABOVE THIS LINE----------------------

# Code goes here`

// Check if the user has the correct answer
const handlerExperiment = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        return true;
    } catch (error:any) {
        console.log("See Code - Handler Function Error")
        throw new Error(error);
    }
}

export const experiment: Lesson = {
	id: "experiment",
	title: "5. Experiment with Code",
	content: `
        <p class='mt-3'>If you are completely new to code, don’t worry if you feel uncomfortable. I know at times, learners can get frustrated if something seem’s alien to them, or they don’t understand. Keep going, I got you! Let’s try to add some of your friends or family as students in the code. </p>
		<h3 class='mt-3 text-lg font-medium'>⚙️Tasks</h3>
        <ul class='mt-2 ml-6 list-none'>
			<li class='pt-1'><input class="mr-2 rounded-md h-5 w-5 cursor-pointer bg-dark-layer-0 border-dark-layer-0 text-purple-600 focus:ring-1 " type="checkbox" /> Try creating you own student following the pattern you might have recognized</li>
		</ul>
		
		<p class='mt-5'>If you are struggling, try opening the 🦁 Wisdom of Zeus to get some more helpful advise</p>

		<hr class='my-6 border-dark-divider-border-2'>
		<section>    
            <article>
                <details>
                    <summary class='text-lg font-medium'>🦁 Open the Wisdom of Zeus</summary>
                    <p class='pt-4'>Observe carefully how a student is summoned within the code:</p>
					<div class='mt-4 example-card'>
						<pre>name = Student("name", "gender", "hair_color", "hair_length", "guild", year)</pre>
					</div>
					<p class='mt-3'>🔹<strong>Guild</strong> – This is optional. If you don’t wish to assign a guild, simply write <code class='text-red-500 p-0.5 px-1'>None</code>. Otherwise, feel free to enter any name for now.</p>
					<p class='mt-3'>🔹<strong>Year</strong> – By default, this is set to <strong>1</strong>, but you can assign any number you like (e.g., <code class='text-red-500 p-0.5 px-1'>1</code>, <code class='text-red-500 p-0.5 px-1'>10</code>, or any other value). It won’t affect anything at this stage.</p>					
					<p class='mt-3'>🧠 <strong>Remember:</strong></p>
					<ul class='mt-1 ml-12 list-none'>
						<li class='list-disc pt-1'><strong>Text values (strings)</strong> must be enclosed in <strong>double quotation marks</strong> <code class='text-red-500 p-0.5 px-1'>""</code>.</li>
						<li class='list-disc pt-1'><strong>Numbers (integers)</strong> should be written <strong>without</strong> quotation marks.</li>
					</ul>
					<p class='mt-3'>Now, apprentice, try crafting your own student—precision in spellwork (and code) is key! ✨🐍</p>
                </details>
            </article> 
        </section>

    `,
    handlerFunction: handlerExperiment,
	starterCode: starterCodeExperiment,
	order: 2,
	starterFunctionName: "function Experiment(",
};

