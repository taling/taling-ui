import { CalendarDayType } from "../types";

// Helper function to check if a date is today's date
function isDateToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export interface DateSourceDaysInMonth {
  days: CalendarDayType[];
  isSixWeeks: boolean;
}

export const DateSource = {
  getDaysInMonth: (year: number, month: number): DateSourceDaysInMonth => {
    const days: CalendarDayType[] = [];
    const firstDayOfMonth = new Date(year, month - 1, 1);

    // Set the first day of the week as Sunday (0)
    const firstDayOfWeek = 0;

    // Get the number of days in the month
    const numDaysInMonth = new Date(year, month, 0).getDate();

    // Calculate the starting day of the calendar grid
    const startDay = firstDayOfMonth.getDay() - firstDayOfWeek;

    // Determine the number of days from the previous month and next month
    const numDaysFromPrevMonth =
      startDay < 0 ? -startDay : firstDayOfMonth.getDay();
    const numDaysFromNextMonth = 42 - numDaysFromPrevMonth - numDaysInMonth;

    // Determine the number of weeks
    const numWeeks = Math.ceil((numDaysInMonth + numDaysFromPrevMonth) / 7);

    // Determine the loop value based on the number of weeks
    const loopValue = numWeeks === 5 ? 35 : 42;

    // Generate days for the calendar
    for (let i = 0; i < loopValue; i++) {
      const date = new Date(year, month - 1, i - startDay + 1);
      const day = date.getDate();
      const isToday = isDateToday(date);
      const isCurrentMonth = date.getMonth() === month - 1;
      const dayOfWeek = date.getDay();
      const dateString = date.toDateString();

      let calendarMonth = month;
      let calendarYear = year;

      if (i < startDay) {
        // Days from the previous month
        calendarMonth = month === 1 ? 12 : month - 1;
        calendarYear = month === 1 ? year - 1 : year;
      } else if (i >= startDay + numDaysInMonth) {
        // Days from the next month
        calendarMonth = month === 12 ? 1 : month + 1;
        calendarYear = month === 12 ? year + 1 : year;
      }

      // Create a CalendarDayType object for the current day
      const calendarDay: CalendarDayType = {
        dateObject: date,
        year: calendarYear,
        month: calendarMonth,
        day,
        isToday,
        isCurrentMonth,
        dayOfWeek,
        dateString,
        events: [],
      };

      // Push the calendarDay object into the days array
      days.push(calendarDay);
    }

    return { days, isSixWeeks: numWeeks === 6 };
  },
  getWeekInYear(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const weekOffset = (startOfYear.getDay() + 6) % 7; // Adjust week offset to start from Monday (0: Monday, 6: Sunday)
    const pastDaysOfYear = Math.floor(
      (date.getTime() - startOfYear.getTime()) / 86400000
    );
    const weekNumber = Math.floor((pastDaysOfYear + weekOffset) / 7) + 1;
    return Math.min(52, weekNumber); // Clamp the week number to a maximum of 52
  },
};
