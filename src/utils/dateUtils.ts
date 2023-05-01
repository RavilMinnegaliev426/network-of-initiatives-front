export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

export const formatDate = (date: Date) => {
  const day = date.getDate().toString();
  const month = capitalizeFirstLetter(
    date.toLocaleString('ru', { month: 'short' })
  ).replace('.', '');
  const year = date.getFullYear().toString();

  return `${day} ${month}, ${year}`;
};

export const formatDateForSEO = (date: Date) => {
  const day = date.getDate().toString();
  const month = (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();

  return `${year}-${month}-${day}`;
};
