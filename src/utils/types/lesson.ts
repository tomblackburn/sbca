// local lesson data
export type Lesson = {
	id: string;
	title: string;
	content: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
};