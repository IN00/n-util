export const isAfternoonNow = () => {
  const hours = new Date().getHours();

  return !(hours < 3) // JST だと 12
}
