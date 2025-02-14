import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { Code } from '@mantine/core';
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { python } from "@codemirror/lang-python";
import CodeMirror, { EditorState, EditorView, highlightActiveLine } from "@uiw/react-codemirror";
import YouTube from "react-youtube";
import { Lesson }from "@/utils/types/lesson";

type LessonDescriptionProps = {
    lesson: Lesson;
};

const LessonDescription:React.FC<LessonDescriptionProps> = ( {lesson} ) => {
    
    return (
        <div className='bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full justify-center'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>{lesson.title}</div>
						</div>
						<div className='flex items-center mt-3'>
							<div
								className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								Easy
							</div>
							<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
								<BsCheck2Circle />
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
								<AiFillLike />
								<span className='text-xs'>120</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'>
								<AiFillDislike />
								<span className='text-xs'>2</span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '>
								<TiStarOutline />
							</div>
						</div>

						{/*
						<div className="py-5">
							<YouTube
								videoId='4xDzrJKXOOY'
								loading='lazy'
								iframeClassName='w-full min-h-[100px]'
							/>
						</div>
						*/}

						{/* Lesson Statement(paragraphs) */}
						<div className="flex justify-center pt-3">
							<div className='text-white text-md'>
								<div dangerouslySetInnerHTML={{ __html: lesson.content }} />
							</div>
						</div>
						

						{/* Examples */}
						<div className='mt-4'>
							<div>
								<p className='font-medium text-white'>Example 2: </p>
								<div className='example-card'>
									<pre>
                                        cauldron_type = ""
									</pre>
								</div>
							</div>
                        </div>

						<div className='w-full flex flex-col overflow-auto relative bg-code-color px-3 py-3 rounded-md'>
							<CodeMirror className="py-4"
								value={'cauldron_type = "medium"'}
								theme={vscodeDark}
								extensions={[python(), EditorView.editable.of(false), EditorState.readOnly.of(true)]}
								style={{ fontSize: 14 }}
								
							/>
						</div>
                      

                        <div className='text-white text-sm'>
                            <p className='mt-3'>
                                Next, you need a cauldron material that won’t interfere with the reaction. Create a new variable called <Code color="dark" c="red">cauldron_material</Code> and set the value to "steel". 
                            </p>
						</div>

                        <div className='mt-4'>
							<div>
								<p className='font-medium text-white '>Example 2: </p>
								<div className='example-card'>
									<pre>
                                        cauldron_type = "medium"
									</pre>
								</div>
							</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LessonDescription;