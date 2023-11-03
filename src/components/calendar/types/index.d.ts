export type CalendarEventType = {
  id: string | number;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  description?: string;
  location?: string;
  option?: any;
};

export type CalendarDayType = {
  dateObject: Date;
  year: number;
  month: number;
  day: number;
  isToday: boolean;
  isCurrentMonth: boolean;
  dayOfWeek: number;
  weekIndex?: number;
  dateString?: string;
  events: CalendarEventType[];
  optionColor?: string;
};

export type CalendarRenderersType = {
  header?: React.ReactElement;
  monthView?: {
    day?: (day: CalendarDayType) => React.ReactElement;
    event?: (event: CalendarEventType) => React.ReactElement;
  };
};

export type SelectableColorType = "pink" | "purple";
