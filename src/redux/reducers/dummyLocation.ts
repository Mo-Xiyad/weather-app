import { ADD_LOCATION } from "../actions";
import { initialState } from "../store";
import { AnyAction } from "redux";

const searchHistoryLocationReducer = (
  state = initialState.searchHistoryLocation,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    default:
      return state;
  }
};

export default searchHistoryLocationReducer;
