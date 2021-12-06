import { Dispatch } from "redux";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const LOADING_DATA = "LOADING_DATA";
export const GET_WEATHER_UPDATE_FOR_QUERY = "GET_WEATHER_UPDATE_FOR_QUERY";
export const ADD_LOCATION = "ADD_LOCATION";
export const SET_HAS_DATA_TO_TRUE = "SET_HAS_DATA_TO_TRUE";
// "Östersund";

export const addToStore = (locationQuery: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: LOADING_DATA,
        payload: true,
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: ADD_LOCATION,
          payload: data,
        });
        dispatch({
          type: GET_WEATHER_UPDATE_FOR_QUERY,
          payload: data,
        });
        dispatch({
          type: SET_HAS_DATA_TO_TRUE,
        });
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// export type addToStore = SingleAction<typeof addToStore>;
