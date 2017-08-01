const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'Septemeber',
  '10': 'October',
  '11': 'November',
  '12': 'December',
}

export function zeroCheck (num) {
  var numArr = num.split('');
  return numArr[0] == 0 ? num[1] : num;
}

export function convertDate(date) {
  const dateArr = date.split('-');
  const month = months[dateArr[1]];
  const day = zeroCheck(dateArr[2]);
  return `${month} ${day}, ${dateArr[0]}`;
}
