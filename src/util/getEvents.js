import ical from "node-ical";

const CAL_URL = "https://calendar.google.com/calendar/ical/c_8c1f2da4b6ed6a6139c19bceb34724ecc60d2f4050114039a504aa204bd40130%40group.calendar.google.com/public/basic.ics";

const getEvents = async () => {
  let now = new Date().getTime();

  let events = Object.values(await ical.async.fromURL(CAL_URL))
    .filter((event) => new Date(event.end).getTime() > now)
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

  return events;
}

export default getEvents;