import { addDays } from 'date-fns'

export const tomorrow = (subject: Date) => addDays(subject, 1)
