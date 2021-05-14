import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advanced from 'dayjs/plugin/advancedFormat';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);

/**
 * Function to format date
 * @param {*} dateEarliest
 * @param {*} dateLatest
 */
export const getDateFormat = (
  dateEarliest,
  dateLatest,
  IANACode,
) => {
  if (dateEarliest && dateLatest) {
    const earliest = dayjs(dateEarliest);
    const lastest = dayjs(dateLatest);
    let dateResult = '';
    if (lastest.isAfter(earliest)) {
      const hoursLastest = dayjs(lastest).hour();
      dateResult = `${dayjs(dateEarliest).format(
        'ddd, MMM D, H:mm',
      )}-${hoursLastest}`;
      dateResult = convert(dateResult,IANACode);
    } else {
      //Same hours
      dateResult = convert(dateEarliest,IANACode);
    }
    return dateResult;
  }

  const result = dayjs(dateEarliest).format('ddd, MMM D H:mm');
  return result;
};

const convert= (date, ianaCode)=>{
  return dayjs(date)
        .utc('z')
        .local()
        .tz(ianaCode)
        .format('ddd, MMM D, H:mm z');
}
