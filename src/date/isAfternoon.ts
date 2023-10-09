export const isAfternoon = (subject: Date) => {
  const hours = subject.getHours();

  return !(hours < 12)
}
