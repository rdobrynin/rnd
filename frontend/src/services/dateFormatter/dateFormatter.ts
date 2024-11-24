import dayjs, { OpUnitType } from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezonePlugin from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { initLocale } from './locales';

initLocale();
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(timezonePlugin);
dayjs.extend(utc);

export enum TimePeriodsEnum {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

// We using only Date or string because if you send object month start from 0 (Jun - 0). It confusing
type DateType = Date | string | number;

export const getTimeFromNow = (time: DateType): string => dayjs(time).fromNow();

export const getFormattedDate = (date: DateType, formatStr: string): string =>
  dayjs(date).format(formatStr);

export const getTimeToNow = (time: DateType): string => dayjs(time).toNow();

export const getDiffFromNow = (time: DateType, format: string): string | null =>
  dayjs.utc(dayjs(time).diff(dayjs())).format(format);

export const formatDate = ({
  val,
  locale,
  options,
  isOnlyTime,
}: {
  val: string | number;
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
  isOnlyTime?: boolean;
}) => {
  const defaultLocale = navigator.language || 'en';
  const formattedLocale = locale ? locale.replace('_', '-') : '';
  // HACK: this replacement needed for the Safari fix. We have date in such format YYYY-MM-DD HH:MM:SS and Safari can't handle space between date and time properly
  // and new Date returns "Invalid date" for such values
  const preparedValue = typeof val === 'string' && /\s/.test(val) ? val.replace(/ /g, 'T') : val;

  return isOnlyTime
    ? new Date(preparedValue).toLocaleTimeString(formattedLocale || defaultLocale, options)
    : new Date(preparedValue).toLocaleDateString(formattedLocale || defaultLocale, options);
};

export const getSubstractedDateFromNow = (amount: number, timeValue: OpUnitType) =>
  dayjs()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .subtract(amount, timeValue)
    .format();

export const getTimezoneFormattedTime = ({
  time,
  format,
  timezone,
}: {
  time: number;
  format?: string;
  timezone: string;
}): string => dayjs(new Date(time)).tz(timezone).format(format);

// workaround while dayjs team are fixing bug https://github.com/iamkun/dayjs/issues/1356
export const getTimezoneFormattedTimeByJs = ({
  time,
  locale,
  timezone,
}: {
  time: number;
  locale: string;
  timezone: string;
}): string => {
  const date = new Date(time);
  const defaultLocale = navigator.language || 'en';
  const formattedLocale = locale ? locale.replace('_', '-') : '';
  return date.toLocaleString(formattedLocale || defaultLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: timezone,
  });
};

export const getFormattedSeconds = (seconds: number, format: string) => {
  // dayjs add one extra day during day's calculation so we have to compensate it
  // 86400 seconds = 1 day's duration
  const balancedSeconds = seconds >= 86400 ? seconds - 86400 : seconds;

  return dayjs.utc(balancedSeconds * 1000).format(format);
};

export const getTimeZoneOffset = (timeZone: string): string => dayjs().tz(timeZone).format('Z');

export const getFormattedTime = (time: string, format = 'LT') =>
  dayjs(`January 1, 1970, ${time}`).format(format);

export const getTodaysDate = () => dayjs(new Date()).format();

export const getDateMonth = (date: DateType = getTodaysDate()) => dayjs(date).month();
export const getDateYear = (date: DateType = getTodaysDate()) => dayjs(date).year();

export const getDateStartOfTimeValue = (date: DateType, timeValue: OpUnitType) =>
  dayjs(date).startOf(timeValue).format();

export const getDateEndOfTimeValue = (date: DateType, timeValue: OpUnitType) =>
  dayjs(date).endOf(timeValue).format();

export const getStartAndEndDateOfMonth = ({
  date = Date.now(),
  isEndDateRelatedToCurrentDate = false,
}: {
  date?: DateType;
  isEndDateRelatedToCurrentDate?: boolean;
}) => ({
  startDate: getDateStartOfTimeValue(date, TimePeriodsEnum.MONTH),
  endDate:
    isEndDateRelatedToCurrentDate &&
    getDateMonth(date) === getDateMonth(getTodaysDate()) &&
    getDateYear(date) === getDateYear(getTodaysDate())
      ? getDateEndOfTimeValue(getTodaysDate(), TimePeriodsEnum.DAY)
      : getDateEndOfTimeValue(date, TimePeriodsEnum.MONTH),
});

export const getIsDateAfterCurrentDate = (date: DateType) => dayjs(date).isAfter(getTodaysDate());

export const getIsTwoDatesAreEqual = (firstDate: DateType, secondDate: DateType) =>
  dayjs(firstDate).isSame(dayjs(secondDate));

export const addTime = ({
  timestamp,
  timeToAdd,
  format,
  unit,
}: {
  timestamp: DateType;
  timeToAdd: number;
  unit: OpUnitType;
  format?: string;
}) =>
  dayjs(timestamp)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .add(timeToAdd, unit)
    .format(format);

export const getTimeDiff = ({
  from,
  to,
  unit,
}: {
  from?: DateType;
  to: DateType;
  unit: OpUnitType;
}) => dayjs(from).diff(to, unit);

export const getTimeUnitsFromSeconds = (timeInSeconds: number) => ({
  hours: Math.floor(timeInSeconds / 60 / 60),
  minutes: Math.floor(timeInSeconds / 60),
  seconds: timeInSeconds % 60,
});
