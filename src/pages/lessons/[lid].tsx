import Topbar from '@/components/Topbar/Topbar';
import React from 'react';

type LessonPageProps = {
    
};

const LessonPage:React.FC<LessonPageProps> = () => {
    
    return (
        <div>
            <Topbar lessonPage /> 
        </div>
    )
}
export default LessonPage;