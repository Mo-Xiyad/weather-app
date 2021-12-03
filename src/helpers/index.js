export const dateBuilder = (d) => {
  let months = [
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  // return `${day} ${date} ${month} ${year}`;
  return `${date} ${month} ${year}`;
};

export const getDay = (d) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  return `${day}`;
};

export const sunRiseAndSetTIme = (d) => {
  let date = new Date(d * 1000);

  let hours = date.getHours();

  let minutes = "0" + date.getMinutes();

  let seconds = "0" + date.getSeconds();

  // let formattedTime =
  //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  let formattedTime = hours + ":" + minutes.substr(-2);

  // console.log(formattedTime);
  console.log(d);
  return `${hours}: ${minutes.substr(-2)}`;
};
