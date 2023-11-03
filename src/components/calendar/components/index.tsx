import {
  CalendarDayType,
  CalendarEventType,
  CalendarRenderersType,
} from "../types";
import CalendarDayComponent from "./day";

const CalendarInterface = ({
  days,
  renderers,
  onEventClick,
  onDayClick,
  onHover,
}: {
  days: CalendarDayType[];
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
}) => {
  const renderDay = (day: CalendarDayType, index: number) => {
    // use provided renderer if available
    if (renderers?.monthView?.day)
      return (
        <div key={index} onClick={onDayClick && (() => onDayClick(day))}>
          {renderers?.monthView.day(day)}
        </div>
      );
    // use default renderer
    else
      return (
        <div key={index} onClick={onDayClick && (() => onDayClick(day))}>
          <CalendarDayComponent
            key={index}
            day={day}
            renderers={renderers}
            onEventClick={onEventClick}
            onHover={onHover}
          />
        </div>
      );
  };
  return (
    <>
      <div className="flex flex-auto flex-col shadow ring-1 ring-black ring-opacity-5">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">일</div>
          <div className="bg-white py-2">월</div>
          <div className="bg-white py-2">화</div>
          <div className="bg-white py-2">수</div>
          <div className="bg-white py-2">목</div>
          <div className="bg-white py-2">금</div>
          <div className="bg-white py-2">토</div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700">
          <div className="grid w-full grid-cols-7 gap-px">
            {days?.map(renderDay)}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarInterface;
