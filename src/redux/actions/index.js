export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const LOADING_DATA = "LOADING_DATA";
export const GET_WEATHER_UPDATE_FOR_QUERY = "GET_WEATHER_UPDATE_FOR_QUERY";

export const getCurrentCompanyJobList = (locationQuery) => {
  return async (dispatch) => {
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
          type: GET_WEATHER_UPDATE_FOR_QUERY,
          payload: data,
        });
        dispatch({
          type: LOADING_DATA,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING_DATA,
          payload: false,
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOADING_DATA,
        payload: false,
      });
    }
  };
};
