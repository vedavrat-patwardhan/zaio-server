export const isWeekend = (date: string): boolean => {
  const dayOfWeek = new Date(date).getDay();
  return dayOfWeek === 6 || dayOfWeek === 0;
};

export const updateToNextMonday = (date: string): Date => {
  const dayOfWeek = new Date(date).getUTCDay();
  if (dayOfWeek === 6) {
    // If Saturday
    new Date(date).setUTCDate(new Date(date).getUTCDate() + 2); // Add 2 days to go to Monday
  } else if (dayOfWeek === 0) {
    // If Sunday
    new Date(date).setUTCDate(new Date(date).getUTCDate() + 1); // Add 1 day to go to Monday
  }
  return new Date(date);
};
