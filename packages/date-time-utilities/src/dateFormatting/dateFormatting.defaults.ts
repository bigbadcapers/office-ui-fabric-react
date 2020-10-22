import { IDateGridStrings, IDateFormatting, IDatepickerStrings, ICalendarStrings } from './dateFormatting.types';
import { formatDay } from './formatDay';
import { formatYear } from './formatYear';
import { formatMonthDayYear } from './formatMonthDayYear';
import { formatMonthYear } from './formatMonthYear';

export const DEFAULT_DATE_GRID_STRINGS: IDateGridStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

export const DEFAULT_DATE_FORMATTING: IDateFormatting = {
  formatDay: formatDay,
  formatYear: formatYear,
  formatMonthDayYear: formatMonthDayYear,
  formatMonthYear: formatMonthYear,
};

export const DEFAULT_CALENDAR_STRINGS: ICalendarStrings = {
  ...DEFAULT_DATE_GRID_STRINGS,

  goToToday: 'Go to today',
  weekNumberFormatString: 'Week number {0}',
  prevMonthAriaLabel: 'Previous month',
  nextMonthAriaLabel: 'Next month',
  prevYearAriaLabel: 'Previous year',
  nextYearAriaLabel: 'Next year',
  prevYearRangeAriaLabel: 'Previous year range',
  nextYearRangeAriaLabel: 'Next year range',
  closeButtonAriaLabel: 'Close',
  selectedDateFormatString: 'Selected date {0}',
  todayDateFormatString: "Today's date {0}",
  monthPickerHeaderAriaLabel: '{0}, select to change the year',
  yearPickerHeaderAriaLabel: '{0}, select to change the month',
  dayMarkedAriaLabel: 'marked',
};

/**
 * Default strings for the `@fluentui/react-northstar` Datepicker.
 */
export const DEFAULT_DATEPICKER_STRINGS: IDatepickerStrings = {
  ...DEFAULT_CALENDAR_STRINGS,
  ...DEFAULT_DATE_FORMATTING,

  parseDate: (dateStr: string) => {
    const date = Date.parse(dateStr);
    if (date) {
      return new Date(date);
    }

    return null;
  },

  openCalendarTitle: 'Open calendar',
  inputPlaceholder: 'Select a date...',
  isRequiredErrorMessage: 'A date selection is required',
  invalidInputErrorMessage: 'Manually entered date is not in correct format.',
  isOutOfBoundsErrorMessage: 'The selected date is from the restricted range.',
  inputAriaLabel: 'Select a date.',
  inputBoundedFormatString: 'Input a date between {0} and {1}.',
  inputMinBoundedFormatString: 'Input a date starting from {0}.',
  inputMaxBoundedFormatString: 'Input a date ending at {0}.',
};
