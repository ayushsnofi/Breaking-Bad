import axios from "axios";

const GET_DEATHS_SUCCESS = "GET_DEATHS_SUCCESS";
const GET_DEATHS_FAILED = "GET_DEATHS_FAILED";
const GET_QUOTES_SUCCESS = "GET_QUOTES_SUCCESS";
const GET_QUOTES_FAILED = "GET_QUOTES_FAILED";
const GET_EPISODE_SUCCESS = "GET_EPISODE_SUCCESS";
const GET_EPISODE_FAILED = "GET_EPISODE_FAILED";
const GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS";
const GET_CHARACTER_FAILED = "GET_CHARACTER_FAILED";

export const getAllCharater = async (dispatch) => {
  try {
    const res = await axios.get(`/characters`);
    console.log(res);
    if (res.status == "200") {
      dispatch({
        type: GET_CHARACTER_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_CHARACTER_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getEpisodeData = async (dispatch) => {
  try {
    const res = await axios.get(`/episodes`);
    console.log(res);
    if (res.status == "200") {
      dispatch({
        type: GET_EPISODE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_EPISODE_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getAllDeaths = async (dispatch) => {
  try {
    const res = await axios.get(`/deaths`);
    console.log(res);
    if (res.status == "200") {
      dispatch({
        type: GET_DEATHS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_DEATHS_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const getAllQuotes = async (dispatch) => {
  try {
    const res = await axios.get(`/quotes`);
    console.log(res);
    if (res.status == "200") {
      dispatch({
        type: GET_QUOTES_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_QUOTES_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
