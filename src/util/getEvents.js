import ical from "node-ical";

const CAL_URL = "https://calendar.google.com/calendar/ical/c_8c1f2da4b6ed6a6139c19bceb34724ecc60d2f4050114039a504aa204bd40130%40group.calendar.google.com/public/basic.ics";

const getEvents = async () => {
  const events = await ical.async.fromURL(CAL_URL);

  return Object.values(events);
}

export default getEvents;