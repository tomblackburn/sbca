import { useState } from "react";
import Split from "react-split";
import LessonDescription from "./LessonDescription/LessonDescription";
import CodeEditor from "./CodeEditor/CodeEditor";


type WorkspaceProps = {
};

const Workspace: React.FC<WorkspaceProps> = () => {


	return (
		<Split className='split' minSize={0}>
			<LessonDescription />
            <CodeEditor />
		</Split>
        
	);
};
export default Workspace;