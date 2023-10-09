import { subDays } from 'date-fns'

export const yesterday = (subject: Date) => subDays(subject, 1)
