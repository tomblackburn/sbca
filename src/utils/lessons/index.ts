import { Lesson } from "../types/lesson";
import { arrival } from "./arrival";
import { seeCode } from "./see-code";
import { navigateInterface } from "./navigate-interface";


interface LessonMap {
	[key: string]: Lesson;
}

export const lessons: LessonMap = {
	"navigate-interface": navigateInterface,
	"arrival": arrival,
	"see-code": seeCode,
};