import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import CalendarInterface from "./components";
import CalendarHeader from "./components/header";
import { MainColorContext } from "./content";
import { DateSource, DateSourceDaysInMonth } from "./date-source";
import { CalendarViewMode, StartOfWeek } from "./enums";
import {
  CalendarDayType,
  CalendarEventType,
  CalendarRenderersType,
  SelectableColorType,
} from "./types";

type CalendarOptionsType = {
  startOfWeek: StartOfWeek;
};

interface CalendarEventSource {
  year?: number;
  month?: number;
  weekInYear?: number;
}

const TailwindCalendarComponent = forwardRef(
  (
    {
      eventSource,
      option,
      renderers,
      onEventClick,
      onDayClick,
      viewMode,
      onViewModeChange,
      onMonthChange,
      onAction,
      onHover,
      mainColor = "purple",
      useViewMode = true,
      useHeaderDecoration = false,
    }: {
      eventSource: (
        source: CalendarEventSource,
      ) => Promise<CalendarEventType[]> | CalendarEventType[];
      option: CalendarOptionsType;
      renderers?: CalendarRenderersType;
      onEventClick?: (event: CalendarEventType) => void;
      onDayClick?: (day: CalendarDayType) => void;
      onHover?: ({
        status,
        event,
      }: {
        status: boolean;
        event: CalendarEventType;
      }) => void;
      viewMode?: CalendarViewMode;
      onViewModeChange?: (mode: CalendarViewMode) => void;
      onMonthChange?: (source: CalendarEventSource) => void;
      onAction?: () => void;
      ref?: any;
      mainColor?: SelectableColorType;
      useViewMode?: boolean;
      useHeaderDecoration?: boolean;
    },
    ref: any,
  ) => {
    useImperativeHandle(ref, () => ({
      reloadCalender() {
        console.log(`reloadCalender`);
        setReloadTrigger((prev) => prev + 1);
      },
    }));
    const [reloadTrigger, setReloadTrigger] = useState(0);
    const [internalViewMode, setInternalViewMode] = useState<CalendarViewMode>(
      CalendarViewMode.Month,
    );

    // selected year and month and week
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(
      new Date().getMonth() + 1,
    );
    const [selectedWeekInYear, setSelectedWeekInYear] = useState(
      DateSource.getWeekInYear(new Date()),
    );

    const [daysInMonth, setDaysInMonth] = useState<DateSourceDaysInMonth>({
      days: [],
      isSixWeeks: false,
    });
    const [eventMappedDaysInMonth, setEventMappedDaysInMonth] = useState<
      CalendarDayType[]
    >([]);

    const loadDaysInMonth = useCallback(() => {
      const daysInMonth: DateSourceDaysInMonth = DateSource.getDaysInMonth(
        selectedYear,
        selectedMonth,
      );
      setDaysInMonth(daysInMonth);
    }, [selectedMonth, selectedYear]);

    const loadAndMapEvents = useCallback(
      async (daysInMonth: DateSourceDaysInMonth) => {
        if (!daysInMonth) return;
        const events = await eventSource({
          year: selectedYear,
          month: selectedMonth,
        });
        if (!events) return;

        // Preprocess events and group them by date
        const eventsByDate: Record<string, CalendarEventType[]> = {};
        for (const event of events) {
          const eventDate = event.date.toISOString().slice(0, 10); // Convert date to standardized format
          if (!eventsByDate[eventDate]) {
            eventsByDate[eventDate] = [];
          }
          eventsByDate[eventDate].push(event);
        }

        // Map events to days in month
        const eventMappedDaysInMonth = daysInMonth.days?.map((day) => {
          const eventDate = day.dateObject.toISOString().slice(0, 10); // Convert date to standardized format
          const filteredEvents = eventsByDate[eventDate] || [];
          day.events = filteredEvents;
          return day;
        });

        // overall time complexity is O(n+m) n:daysInMonth, m:eventsByDate generation
        setEventMappedDaysInMonth(eventMappedDaysInMonth);
      },
      [eventSource, selectedMonth, selectedYear],
    );

    const nextMonth = useCallback(() => {
      setSelectedMonth(selectedMonth + 1);
      // calculate year
      if (selectedMonth === 12) {
        setSelectedYear(selectedYear + 1);
        setSelectedMonth(1);
      }
    }, [selectedMonth]);

    const prevMonth = useCallback(() => {
      setSelectedMonth(selectedMonth - 1);
      // calculate year
      if (selectedMonth === 1) {
        setSelectedYear(selectedYear - 1);
        setSelectedMonth(12);
      }
    }, [selectedMonth]);

    useEffect(() => {
      loadDaysInMonth();
    }, []);

    useEffect(() => {
      if (!viewMode) {
        return;
      }
      setInternalViewMode(viewMode);
    }, [viewMode]);

    useEffect(() => {
      if (daysInMonth && daysInMonth.days.length > 0)
        loadAndMapEvents(daysInMonth);
    }, [daysInMonth, reloadTrigger]);

    useEffect(() => {
      loadDaysInMonth();
    }, [selectedMonth, selectedYear]);

    return (
      <MainColorContext.Provider value={mainColor}>
        <div className="w-full bg-white">
          {useHeaderDecoration && (
            <div className=" relative h-2 w-full bg-taling-pink-400"></div>
          )}
          <div className="flex h-full flex-col">
            <CalendarHeader
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              viewMode={internalViewMode}
              useViewMode={useViewMode}
              onPrev={() => {
                if (internalViewMode === CalendarViewMode.Month) {
                  prevMonth();
                }
              }}
              onNext={() => {
                if (internalViewMode === CalendarViewMode.Month) {
                  nextMonth();
                }
              }}
              onToday={() => {
                setSelectedYear(new Date().getFullYear());
                setSelectedMonth(new Date().getMonth() + 1);
              }}
              onAction={onAction}
            />
            <CalendarInterface
              days={eventMappedDaysInMonth}
              renderers={renderers}
              onEventClick={onEventClick}
              onHover={onHover}
              onDayClick={onDayClick}
            />
          </div>
        </div>
      </MainColorContext.Provider>
    );
  },
);
TailwindCalendarComponent.displayName = "TailwindCalendarComponent";
export default TailwindCalendarComponent;
