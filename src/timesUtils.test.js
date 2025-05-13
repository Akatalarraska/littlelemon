import { initializeTimes, updateTimes } from "./utils/timeUtils";


describe("initializeTimes", () => {
  test("returns non-empty list of times after API call", () => {
    const mockFetchAPI = jest.fn(() => ['18:00', '20:00']);
    global.fetchAPI = mockFetchAPI;

    const result = initializeTimes();
    expect(result).toEqual(['18:00', '20:00']);
    expect(mockFetchAPI).toHaveBeenCalled();
    expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date)); 
  });
});



describe("updateTimes", () => {
  test("returns same state on unknown action", () => {
    const initialState = ['17:00'];
    const result = updateTimes(initialState, { type: 'UNKNOWN_ACTION' });
    expect(result).toBe(initialState);
  });

  test("returns new list of times on DATE_CHANGE", () => {
    const mockFetchAPI = jest.fn(() => ['10:00', '12:30', '19:00']);
    global.fetchAPI = mockFetchAPI;

    const testDate = new Date('2025-05-05');
    const result = updateTimes([], { type: 'DATE_CHANGE', payload: testDate });

    expect(result).toEqual(['10:00', '12:30', '19:00']);

    expect(mockFetchAPI).toHaveBeenCalledWith(testDate);
  });
});