import { newDate } from "./newDate.ts"

export const newUTC = (year: number, month: number, day: number, hour: number, minute: number, second: number) => {
	newDate(year, month, day, hour - 9, minute, second)
}
