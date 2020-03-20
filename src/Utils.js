const convertIcon = icon => icon.replace(/-/g, '_').toUpperCase();

const unixTimeConverter = unixTimeStamp => {
  let date = new Date(unixTimeStamp * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();

  return hours + ':' + minutes.substr(-2);
};

export { convertIcon, unixTimeConverter };
