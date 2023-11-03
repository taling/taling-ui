import { CalendarEventType, CalendarRenderersType } from "../types";

const CalendarEventComponent = ({
  event,
  renderers,
}: {
  event: CalendarEventType;
  renderers?: CalendarRenderersType;
}) => {
  const eventRenderer = renderers?.monthView?.event;
  if (eventRenderer) {
    return eventRenderer(event);
  }

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden my-1">
      <a className="group flex gap-2 cursor-pointer">
        <div className="bg-taling-purple-500 w-[0.25rem] shrink-0"></div>
        <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-taling-purple-600">
          {event.title}
        </p>
      </a>
    </div>
  );
};

export default CalendarEventComponent;
