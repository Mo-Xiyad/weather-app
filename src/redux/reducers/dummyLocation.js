import { ADD_LOCATION } from "../actions";
import { initialState } from "../store";

const searchHistoryLocationReducer = (
  state = initialState.searchHistoryLocation,
  action
) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default searchHistoryLocationReducer;
