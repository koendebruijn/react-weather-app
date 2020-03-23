const convertIcon = icon =>
  icon
    .toString()
    .replace(/-/g, '_')
    .toUpperCase();

const unixTimeConverter = unixTimeStamp => {
  let date = new Date(unixTimeStamp * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();

  return hours + ':' + minutes.substr(-2);
};

const unixDateConverter = unixTimeStamp => {
  let d = new Date(unixTimeStamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  var date = d.getDate();
  return date + ' ' + month;
};

export { convertIcon, unixTimeConverter, unixDateConverter };
