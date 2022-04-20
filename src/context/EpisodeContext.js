import React, { useReducer } from "react";

export const episodeContext = React.createContext();

const GET_EPISODE_SUCCESS = "GET_EPISODE_SUCCESS";
const GET_EPISODE_FAILED = "GET_EPISODE_FAILED";

const getEpisodeReducer = (state, action) => {
  switch (action.type) {
    case GET_EPISODE_SUCCESS:
      return {
        loader: false,
        data: action.payload,
      };
    case GET_EPISODE_FAILED:
      return {
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export function EpisodeProvider(props) {
  const [episodeDetails, dispatchEpisodeDetails] = useReducer(
    getEpisodeReducer,
    {
      data: {},
      loader: true,
      err: false,
    }
  );
  return (
    <episodeContext.Provider value={{ episodeDetails, dispatchEpisodeDetails }}>
      {props.children}
    </episodeContext.Provider>
  );
}
