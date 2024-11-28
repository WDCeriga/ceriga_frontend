const dataConverter = (candidate: string | Date): Date => {
  return new Date(candidate);
};

const formatDateToMMDDYY = (date: Date | string): string => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date object");
  }

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  return `${month}/${day}/${year}`;
};

const formatDateToNMDDYY = (dateStr: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
export { dataConverter, formatDateToMMDDYY, formatDateToNMDDYY };

export const formatDateToDDMMYY = (input: Date | string | number): string => {
  let date: Date;

  if (input instanceof Date) {
    date = input; // input is already a Date object
  } else if (typeof input === "string" || typeof input === "number") {
    date = new Date(input); // try to parse it as a Date
  } else {
    throw new Error("Invalid date input");
  }

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date value");
  }

  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${month}, ${year}`;
};
