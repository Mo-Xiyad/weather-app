import { GET_WEATHER_UPDATE_FOR_QUERY, LOADING_DATA } from "../actions";
import { initialState } from "../store";

const currentSearchLocationReducer = (
  state = initialState.currentSearchLocation,
  action
) => {
  switch (action.type) {
    case GET_WEATHER_UPDATE_FOR_QUERY:
      return {
        ...state,
        data: action.payload,
      };
    case LOADING_DATA:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default currentSearchLocationReducer;
