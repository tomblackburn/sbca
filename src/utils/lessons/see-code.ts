import asset from 'assert'
import { Lesson } from '../types/lesson';

const starterCodeSeeCode = `# I'm a helpful comment line that can walk you through some of the code

# Here we can create a "class" that helps to describe all the different 
# attributes a student has an all the things students can do
class Student:

	# Don't worry about this line of code so much, but when we create a 
	# student, they must have a name, we could put them in a guild and we
	# could add them to a year group, the default is first year
	def __init__(self, name, gender, hair_color, hair_length, guild=None, year=1):
		self.name = name
		self.gender = gender
		self.hair_color = hair_color
		self.hair_length = hair_length
		self.guild = guild
		self.year = year
	
	# This function describes that the student can do "something". 
	# That "something" is study. When we want to activate this function, 
	# we just need to describe what subject we want them to study
	def study(self, subject):
		# When we call this function, it will return back to us a sentence
		# such as "Homer is studying Maths"
		return f"{self.name} is studying {subject}"

# Here is another class called Professor that helps to describe "things" 
# about what we want to store about professors and "things" they can do		
class Professor:
	def __init__(self, name, subject, head=None):
		self.name = name
		self.subject = subject
		self.head = head
	
	# Ah, of course, they can teach	
	def teach(self):
		return f"Professor {self.name} is teaching {self.subject}"
		
class School:
	def __init__(self, name, location):
		self.name = name
		self.location = location
		
		# What are these lines with the []. We will learn about these later, 
		# but they are lists that can hold a list of professors and students
		# that teach at, or attend this school.
		self.professors = []
		self.students = []
	
	# This function seems pretty self-explanatory, we can add a professor to
	# to teach at this school	
	def add_professor(self, professor):
		# We will learn more about lists in a future lesson, but this line adds
		# the new professor to the end of the list we created earlier
		self.professors.append(professor)
		
	def add_student(self, student)
		self.students.append(student)
		
	althara = Professor("Althara", "Magical Syntaxes", None)
	fremen = Professor("Fremen", "Readability and Structural Analysis", "Headteacher")
		
	{student_name} = Student("{student_name}", "{student_gender}", "{student_hair_color}", "{student_hair_length}", None, 1)
	durelis = Student("Durelis", "male", "blonde", "long" None, 1)`

// Check if the user has the correct answer
const handlerSeeCode = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        return true;
    } catch (error:any) {
        console.log("See Code - Handler Function Error")
        throw new Error(error);
    }
}

export const seeCode: Lesson = {
	id: "see-code",
	title: "3. See Code",
	content: `
        <p class='mt-3'><strong>Whoa, that’s a lot of code!</strong> If you're brand new to coding, it might look confusing—and that’s completely okay. We don’t expect you to understand it just yet.</p>
        <p class='mt-3'><p>Take a deep breath and give it another look. <strong>Spend about 10 minutes scanning through the code</strong> and see if you can get a rough idea of what it might be doing. You don’t need to understand every detail—just <strong>explore, observe, and get curious.</strong></p>
        <p class='mt-3'><strong>Feeling stuck?</strong> Try toggling the comments on and off to see if they help. No pressure—just take your time and enjoy the process!</p>
    `,
    handlerFunction: handlerSeeCode,
	starterCode: starterCodeSeeCode,
	order: 2,
	starterFunctionName: "function seeCode(",
};

