import React, { useReducer } from "react";

export const quotesContext = React.createContext();

const GET_QUOTES_SUCCESS = "GET_QUOTES_SUCCESS";
const GET_QUOTES_FAILED = "GET_QUOTES_FAILED";

const getQuotesReducer = (state, action) => {
  switch (action.type) {
    case GET_QUOTES_SUCCESS:
      return {
        loader: false,
        data: action.payload,
      };
    case GET_QUOTES_FAILED:
      return {
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export function QuotesProvider(props) {
  const [quotesDetails, dispatchQuotesDetails] = useReducer(getQuotesReducer, {
    data: {},
    loader: true,
    err: false,
  });
  return (
    <quotesContext.Provider value={{ quotesDetails, dispatchQuotesDetails }}>
      {props.children}
    </quotesContext.Provider>
  );
}
