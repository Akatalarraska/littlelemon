export const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
  // }
};
  
export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'DATE_CHANGE':
        return window.fetchAPI(new Date(action.payload));
      default:
        return state;
    }
  };
