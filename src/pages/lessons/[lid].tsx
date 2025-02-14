import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import React from 'react';
import { lessons } from "@/utils/lessons";
import { Lesson } from '@/utils/types/lesson';


type LessonPageProps = {
    lesson: Lesson;
};

const LessonPage:React.FC<LessonPageProps> = ( {lesson} ) => {
    console.log(lesson);
    return (
        <div className="overflow-y-hidden">
            <Topbar lessonPage /> 
            <Workspace lesson={lesson}/>
        </div>
    )
}
export default LessonPage;


// fetch the local data
//  SSG
// getStaticPaths => it create the dynamic routes
export async function getStaticPaths() {
	const paths = Object.keys(lessons).map((key) => ({
		params: { lid: key },
	}));

	return {
		paths,
		fallback: false,
	};
}

// getStaticProps => it fetch the data

export async function getStaticProps({ params }: { params: { lid: string } }) {
	const { lid } = params;
	const lesson = lessons[lid];

	if (!lesson) {
		return {
			notFound: true,
		};
	}
	lesson.handlerFunction = lesson.handlerFunction.toString();
	return {
		props: {
			lesson,
		},
	};
}
