import React from 'react';
import { useState, useEffect } from "react";
import PreferenceNavBar from './PreferenceNavBar/PreferenceNavBar';
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { python } from "@codemirror/lang-python";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import EditorFooter from './EditorFooter';
import { NodeNextRequest } from 'next/dist/server/base-http/node';

type CodeEditorProps = {
    
};

const CodeEditor:React.FC<CodeEditorProps> = () => {
    const boilerPlate = `# I'm a helpful comment line that can walk you through some of the code

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
    durelis = Student("Durelis", "male", "blonde", "long" None, 1)
    
    # ----------------------------------------------------------------------
`
    return (
		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden overflow-y-hidden'>
			<PreferenceNavBar />
            
            <Split 
                className='h-[calc(100vh-94px)]' 
                direction='vertical' 
                sizes={[60, 40]} 
                minSize={60}
            >
                {/* Editor Panel with Footer */}
                <div className='w-full flex flex-col overflow-auto relative'>
                    <div className="flex-1 overflow-auto">
                        <CodeMirror
                            value={boilerPlate}
                            theme={vscodeDark}
                            extensions={[python()]}
                            style={{ fontSize: 14, outline: 0}}
                        />
                    </div>
                    <EditorFooter /> {/* Stays attached to the gutter */}
                </div>

                {/* Bottom Panel (Testcases, etc.) */}
                <div className='w-full px-5 overflow-auto bg-dark-layer-1point5'>
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-xs font-medium leading-5 text-white inline-block underline underline-offset-8'>TESTCASES</div>
                        </div>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-xs font-medium leading-5 text-gray-500 inline-block'>CONSOLE</div>
                        </div>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-xs font-medium leading-5 text-gray-500 inline-block'>OUTPUT</div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mr-2 items-start mt-2 '>
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer text-white'>
                                    Case 1
                                </div>
                            </div>
                        </div>
                        <div className='mr-2 items-start mt-2 '>
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer text-white'>
                                    Case 2
                                </div>
                            </div>
                        </div>               
                    </div>

                    <div className='font-semibold my-4'>
                        <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            Input Text
                        </div>
                        <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            Output Text
                        </div>
                    </div>
                </div>
            </Split>
        </div>
    );
};
export default CodeEditor;