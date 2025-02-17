import Split from "react-split";
import LessonDescription from "./LessonDescription/LessonDescription";
import CodeEditor from "./CodeEditor/CodeEditor";
import Sidebar from "../Sidebar/Sidebar";
import { Lesson } from "@/utils/types/lesson";
import EditorFooter from "./CodeEditor/EditorFooter";
import { useState } from "react";
import { GiWizardStaff } from "react-icons/gi";
import { renderToStaticMarkup } from "react-dom/server";

type WorkspaceProps = {
	lesson: Lesson
};



const Workspace: React.FC<WorkspaceProps> = ( {lesson} ) => {
	// Default sizes: LessonDescription: 40%, CodeEditor: 60%
	const [sizes, setSizes] = useState<number[]>([40, 60]);
	console.log(sizes)
	return (  
		<>
			<div className="flex h-[calc(100vh-50px)] overflow-y-hidden m-0 p-0">
				<div className="m-0 p-0 ">
					<Sidebar />
				</div>
				<div className="m-0 p-0 ">
					{lesson.starterCode !== "" ? (
						<Split 
							className='split' 
							sizes={sizes} 
							minSize={0} 
							onDrag={(newSizes: number[]) => setSizes(newSizes)}
							onDragEnd={(newSizes: number[]) => setSizes(newSizes)}
						>
							<LessonDescription lesson={lesson} panelWidthPercentage={sizes[0]}/>
							<CodeEditor lesson={lesson} />
						</Split>
					) : (
						<LessonDescription lesson={lesson} panelWidthPercentage={100} />
					)}
				</div>
			</div>
			
		</>
	);
};
export default Workspace;
