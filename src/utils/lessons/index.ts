import { Lesson } from "../types/lesson";
import { navigateInterface } from "./navigate-interface";


interface LessonMap {
	[key: string]: Lesson;
}

export const lessons: LessonMap = {
	"navigate-interface": navigateInterface,
};