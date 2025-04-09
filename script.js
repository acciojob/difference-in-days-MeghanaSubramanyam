var dateDiffInDays = function (date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());

  const msPerDay = 24 * 60 * 60 * 1000;
  return (utc2 - utc1) / msPerDay;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");   // e.g., "2022-03-01"
const dateTwo = prompt("Enter End Date.");     // e.g., "2022-03-15"
alert(dateDiffInDays(dateOne, dateTwo));       // e.g., 14

