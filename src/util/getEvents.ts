import ical, { VEvent } from "node-ical";
import { CAL_URL, MATCH_LINKS } from "../config/calendar";

type EventColor = "G" | "P";

type EventType = {
  summary: string;
  description: string;
  resourcesLink?: string;
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

      let description = event.description || "";
      const descLines = description.split("<br>");
      description = "";

      let resourcesLink: string;
      for (let line of descLines) {

        if (!line.startsWith("Resources")) {
          if (line.trim() !== "")
            description += line;
          continue;
        }

        const links = line.match(MATCH_LINKS);
        if (!links || links.length === 0) continue;

        let linkParts = links[0].split("=");
        if (linkParts.length < 2) continue;

        resourcesLink = linkParts[1].trim();
      }
      
      return {
        color,
        summary,
        resourcesLink,
        location: event.location,
        description,
        start: event.start,
        end: event.end,
      }
    })
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 4);

  return events as EventType[];
}

export { type EventType, getEvents };