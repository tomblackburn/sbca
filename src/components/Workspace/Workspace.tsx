import Split from "react-split";
import LessonDescription from "./LessonDescription/LessonDescription";
import CodeEditor from "./CodeEditor/CodeEditor";
import Sidebar from "../Sidebar/Sidebar";

type WorkspaceProps = {
};

const Workspace: React.FC<WorkspaceProps> = () => {
	return (  
		<>
			<div className="flex h-[calc(100vh-50px)] overflow-y-hidden m-0 p-0">
				<div className="m-0 p-0 ">
					<Sidebar />
				</div>
				<div className="m-0 p-0 ">
					<Split className='split' sizes={[40,60]} minSize={0} >
						<LessonDescription />
						<CodeEditor />
					</Split>
				</div>
			</div>
			
		</>
	);
};
export default Workspace;
