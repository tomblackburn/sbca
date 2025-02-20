import React, { useEffect, useState } from 'react';
import PreferenceNavBar from './PreferenceNavBar/PreferenceNavBar';
import Split from "react-split";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { python } from "@codemirror/lang-python";
import EditorFooter from './EditorFooter';
import { Lesson } from "@/utils/types/lesson";


type CodeEditorProps = {
    lesson: Lesson
};

const CodeEditor:React.FC<CodeEditorProps> = ( {lesson} ) => {


    return (
		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden overflow-y-hidden'>
			<PreferenceNavBar />
            
            <Split 
                className='h-[calc(100vh-94px)]' 
                direction='vertical' 
                sizes={[60, 40]} 
                minSize={8}
            >
                {/* Editor Panel with Footer */}
                <div className='w-full flex flex-col overflow-auto relative'>
                    <div className="flex-1 overflow-auto">
                        <CodeMirror
                            value={lesson.starterCode}
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
                            <div className='text-xs font-medium leading-5 text-white inline-block underline underline-offset-8'>TRIALS</div>
                        </div>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-xs font-medium leading-5 text-gray-500 inline-block'>CONSOLE</div>
                        </div>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-xs font-medium leading-5 text-gray-500 inline-block'>SUMMONING</div>
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