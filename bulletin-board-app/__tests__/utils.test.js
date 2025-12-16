// __tests__/utils.test.js
const { addEvent, removeEvent } = require('../utils'); // import functions from utils.js

describe('Event utilities', () => {
  let events;

  beforeEach(() => {
    events = [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' }
    ];
  });

  test('addEvent adds a new event', () => {
    const newEvent = { id: 3, title: 'Event 3' };
    const updated = addEvent(events, newEvent);
    expect(updated.length).toBe(3);
    expect(updated).toContainEqual(newEvent);
  });

  test('removeEvent removes an event by id', () => {
    const updated = removeEvent(events, 1);
    expect(updated.length).toBe(1);
    expect(updated).not.toContainEqual({ id: 1, title: 'Event 1' });
  });
});
