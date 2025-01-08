// export const getDateTimeDifferenceFromNow = (fromDate) => {
//   let difference = new Date().getTime() - new Date(fromDate).getTime();

//   difference = difference / 1000;
//   let hourDifference = Math.floor(difference / 3600);
//   difference -= hourDifference * 3600;
//   let minuteDifference = Math.floor(difference / 60);
//   difference -= minuteDifference * 60;

//   let message;

//   if (hourDifference > 0) {
//     message = `${hourDifference} hour`;
//   }

//   if (minuteDifference > 0) {
//     message = message
//       ? `${message} ${minuteDifference} minutes`
//       : `${minuteDifference} minutes`;
//   }

//   if (difference) {
//     message = message
//       ? `${message} ${Math.round(difference)} seconds`
//       : `${Math.round(difference)} seconds`;
//   }

//   return message;
// };

export const getDateTimeDifferenceFromNow = (fromDate) => {
  let difference = new Date().getTime() - new Date(fromDate).getTime();

  // Convert milliseconds to seconds
  difference = difference / 1000;

  // Calculate the time components
  let yearDifference = Math.floor(difference / (3600 * 24 * 365));
  difference -= yearDifference * 3600 * 24 * 365;

  let monthDifference = Math.floor(difference / (3600 * 24 * 30));
  difference -= monthDifference * 3600 * 24 * 30;

  let dayDifference = Math.floor(difference / (3600 * 24));
  difference -= dayDifference * 3600 * 24;

  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;

  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;

  let message;

  if (yearDifference > 0) {
    message = `${yearDifference} year${yearDifference > 1 ? "s" : ""}`;
  } else if (monthDifference > 0) {
    message = `${monthDifference} month${monthDifference > 1 ? "s" : ""}`;
  } else if (dayDifference > 0) {
    message = `${dayDifference} day${dayDifference > 1 ? "s" : ""}`;
  } else if (hourDifference > 0) {
    message = `${hourDifference} hour${hourDifference > 1 ? "s" : ""}`;
  } else if (minuteDifference > 0) {
    message = `${minuteDifference} minute${minuteDifference > 1 ? "s" : ""}`;
  } else {
    message = `${Math.round(difference)} second${difference > 1 ? "s" : ""}`;
  }

  return message;
};
