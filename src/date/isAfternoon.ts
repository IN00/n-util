export const isAfternoon = (subject: Date) => {
  const hours = subject.getHours();

  return !(hours < 3) // JST だと 12
}
