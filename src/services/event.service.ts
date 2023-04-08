export const isWeekend = (date: string): boolean => {
  const dayOfWeek = new Date(date).getDay();
  return dayOfWeek === 6 || dayOfWeek === 0;
};

export const updateToNextMonday = (date: string): Date => {
  const dayOfWeek = new Date(date).getDay();
  const newDate = new Date(date);
  if (dayOfWeek === 6) {
    // If Saturday
    newDate.setDate(newDate.getDate() + 2); // Add 2 days to go to Monday
  } else if (dayOfWeek === 0) {
    // If Sunday
    newDate.setDate(newDate.getDate() + 1); // Add 1 day to go to Monday
  }
  return newDate;
};
