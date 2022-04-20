import React, { useReducer } from "react";

export const deathsContext = React.createContext();

const GET_DEATHS_SUCCESS = "GET_DEATHS_SUCCESS";
const GET_DEATHS_FAILED = "GET_DEATHS_FAILED";

const getDeathsReducer = (state, action) => {
  switch (action.type) {
    case GET_DEATHS_SUCCESS:
      return {
        loader: false,
        data: action.payload,
      };
    case GET_DEATHS_FAILED:
      return {
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export function DeathsProvider(props) {
  const [deathsDetails, dispatchDeathsDetails] = useReducer(getDeathsReducer, {
    data: {},
    loader: true,
    err: false,
  });
  return (
    <deathsContext.Provider value={{ deathsDetails, dispatchDeathsDetails }}>
      {props.children}
    </deathsContext.Provider>
  );
}
