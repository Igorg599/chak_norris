const initialState = {
  items: []
};
  
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "ADD_JOKE": {

        const newItems = [...state.items, action.payload];

        if (newItems.length > 10) {
          newItems.splice(0, 1);
        }

        return {
          ...state,
          items: newItems
        };
      }

      case "DELETE_JOKE": {
        const elemArr = [action.payload];
        const newItems = [...state.items].filter((el) => !elemArr.includes(el));

        return {
          ...state,
          items: newItems
        };
      }

      case "DELETE_ALL_JOKES": {
        return {
          items: []
      };
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  