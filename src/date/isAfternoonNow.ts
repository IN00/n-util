export const isAfternoonNow = () => {
  const hours = new Date().getHours();

  return !(hours < 12)
}
