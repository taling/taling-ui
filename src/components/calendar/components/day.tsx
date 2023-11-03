import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { useContext } from "react";
import { colorPresets } from "../constants";
import { MainColorContext } from "../content";
import {
  CalendarDayType,
  CalendarEventType,
  CalendarRenderersType,
} from "../types";
import CalendarEventComponent from "./event";

const CalendarDayComponent = ({
  day,
  renderers,
  onEventClick,
  onHover,
}: {
  day: CalendarDayType;
  renderers?: CalendarRenderersType;
  onEventClick?: (event: CalendarEventType) => void;
  onHover?: ({
    status,
    event,
  }: {
    status: boolean;
    event: CalendarEventType;
  }) => void;
}) => {
  const mainColor = useContext(MainColorContext);

  const color = colorPresets[mainColor];

  return (
    <div
      className={classNames(
        day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-500",
        "relative px-3 py-2 min-h-[88px]",
      )}
    >
      <time
        dateTime={day.dateString}
        className={
          day.isToday
            ? `flex h-6 w-6 items-center justify-center rounded-full ${color.bg} font-semibold text-white`
            : undefined
        }
      >
        {day.day}
      </time>
      {day.events?.length > 0 && (
        <ol className="mt-2">
          {day.events?.map((event, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  onEventClick && onEventClick(event);
                }}
                onMouseEnter={() => {
                  onHover && onHover({ status: true, event });
                }}
                onMouseLeave={() => {
                  onHover && onHover({ status: false, event });
                }}
              >
                <CalendarEventComponent event={event} renderers={renderers} />
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default CalendarDayComponent;
