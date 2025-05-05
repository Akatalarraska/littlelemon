import { initializeTimes, updateTimes } from "./utils/timeUtils";

describe("initializeTimes", () => {
  test("returns default list of times", () => {
    const result = initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

describe("updateTimes", () => {
  test("returns same state on unknown action", () => {
    const initialState = ['17:00'];
    const result = updateTimes(initialState, { type: 'UNKNOWN_ACTION' });
    expect(result).toBe(initialState); 
  });

  test("returns new list of times on DATE_CHANGE", () => {
    const initialState = [];
    const result = updateTimes(initialState, { type: 'DATE_CHANGE', payload: '2025-05-05' });

    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});
