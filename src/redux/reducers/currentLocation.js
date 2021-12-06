import {
  GET_WEATHER_UPDATE_FOR_QUERY,
  LOADING_DATA,
  SET_HAS_DATA_TO_TRUE,
} from "../actions";
import { initialState } from "../store";

const currentSearchLocationReducer = (
  state = initialState.currentSearchLocation,
  action
) => {
  switch (action.type) {
    case GET_WEATHER_UPDATE_FOR_QUERY:
      return {
        ...state,
        data: [action.payload],
      };
    case LOADING_DATA:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_HAS_DATA_TO_TRUE:
      return {
        ...state,
        hasData: true,
      };
    default:
      return state;
  }
};

export default currentSearchLocationReducer;
