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

type CodeEditorProps = {
    
};

const CodeEditor:React.FC<CodeEditorProps> = () => {
    
    return (
		<div className='flex flex-col bg-dark-layer-1 relative'>
			<PreferenceNavBar />
            <EditorFooter />
            <Split 
                className='h-[calc(100vh-94px)]' 
                direction='vertical' 
                sizes={[60, 40]} 
                minSize={60}
            >
                <div className='w-full overflow-auto'>
                    <CodeMirror
                        value='cauldron_type = "medium"'
                        theme={vscodeDark}
                        extensions={[python()]}
                        style={{ fontSize: 16 }}
                    />
                    
                </div>
                
                <div className='w-full px-5 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					<div className='flex'>
				        <div className='mr-2 items-start mt-2 '>
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div
                                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                                    text-white`}>
                                    Case 1
                                </div>
                            </div>
                        </div>
                        <div className='mr-2 items-start mt-2 '>
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div
                                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                                    text-white`}>
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