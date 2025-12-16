// utils.js

function addEvent(events, newEvent) {
  events.push(newEvent);
  return events;
}

function removeEvent(events, eventId) {
  return events.filter(e => e.id !== eventId);
}

module.exports = { addEvent, removeEvent };
