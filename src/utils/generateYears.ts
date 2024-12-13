export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);
};
