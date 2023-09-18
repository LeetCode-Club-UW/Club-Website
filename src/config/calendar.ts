const CAL_URL = "https://calendar.google.com/calendar/ical/c_8c1f2da4b6ed6a6139c19bceb34724ecc60d2f4050114039a504aa204bd40130%40group.calendar.google.com/public/basic.ics";
const TIMEZONE = "America/Chicago";

const MATCH_LINKS = /href=["\']?(?:[^"\'>]+)["\']?/g;

// Number of ms before meeting to display resources page when loading site
const DISPLAY_RES_AFTER = 30 * 60 * 1000; // 30 min

export { CAL_URL, TIMEZONE, MATCH_LINKS, DISPLAY_RES_AFTER };