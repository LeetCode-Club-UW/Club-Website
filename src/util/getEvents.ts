import ical, { VEvent } from "node-ical";
import { CAL_URL } from "../config/calendar";

type EventColor = "g" | "r";

type EventType = {
  summary: string;
  description: string;
  location: string;
  color: EventColor;
  start: Date;
  end: Date;
};

const getEvents = async () => {
  let now = new Date().getTime();

  let vEvents = Object.values(await ical.async.fromURL(CAL_URL)) as VEvent[];

  let events = vEvents.filter((event) => new Date(event.end).getTime() > now)
    .map((event) => {
      let summary = event.summary;
      let color = "G";

      let summParts = summary.split("~");
      if (summParts.length > 1) {
        color = summParts[0].trim();
        summary = summParts[1].trim();
      }
      
      return {
        color,
        summary,
        location: event.location,
        description: event.description,
        start: new Date(event.start),
        end: new Date(event.end)
      }
    })
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 4);

  return events as EventType[];
}

export { type EventType, getEvents };