import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import React from 'react';

type LessonPageProps = {

};

const LessonPage:React.FC<LessonPageProps> = () => {
    
    return (
        <div>
            <Topbar lessonPage /> 
            <Workspace />
        </div>
    )
}
export default LessonPage;