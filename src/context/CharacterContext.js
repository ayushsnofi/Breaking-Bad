import React, { useReducer } from "react";

export const characterContext = React.createContext();

const GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS";
const GET_CHARACTER_FAILED = "GET_CHARACTER_FAILED";

const getCharaterReducer = (state, action) => {
  switch (action.type) {
    case GET_CHARACTER_SUCCESS:
      return {
        loader: false,
        data: action.payload,
      };
    case GET_CHARACTER_FAILED:
      return {
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export function CharacterProvider(props) {
  const [characterDetails, dispatchCharaterDetails] = useReducer(
    getCharaterReducer,
    {
      data: {},
      loader: true,
      err: false,
    }
  );
  return (
    <characterContext.Provider
      value={{ characterDetails, dispatchCharaterDetails }}
    >
      {props.children}
    </characterContext.Provider>
  );
}
