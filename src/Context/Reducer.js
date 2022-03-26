export const initialState = {
    filterData: []
  };
  
  const dataReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "UPDATE_DATA":
        console.log("UPDATE_DATA", payload.filterData);
  
        return {
          ...state,
          filterData: payload.filterData
        };
      default:
        throw new Error(`No case for type ${type} found in dataReducer.`);
    }
  };
  
  export default dataReducer;