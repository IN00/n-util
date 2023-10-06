export const newDate = (year, month, day, hour, minute, second) => {
    return new Date(year, month - 1, day, hour, minute, second);
};
