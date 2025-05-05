/* global fetchAPI */


export const initializeTimes = () => {
    return() => {
        const today = new Date();
    return window.fetchAPI(today);
  }
};
  
export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'DATE_CHANGE':
        return window.fetchAPI(new Date(action.payload));
      default:
        return state;
    }
  };
//export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];


// export const updateTimes = (state, action) => {
//   switch (action.type) {
//     case 'DATE_CHANGE':
//       return initializeTimes();
//     default:
//       return state;
//   }
// };

