import React, { useReducer } from "react";

export const loginContext = React.createContext();

const GET_REPORT_SUCCESS = "GET_REPORT_SUCCESS";
const GET_REPORT_FAILED = "GET_REPORT_FAILED";

const getLoginDetailsReducer = (state, action) => {
  switch (action.type) {
    case GET_REPORT_SUCCESS:
      return {
        loader: false,
        data: action.payload,
        error: false,
      };
    case GET_REPORT_FAILED:
      return {
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export function LoginProvider(props) {
  const [loginDetails, dispatchLoginDetails] = useReducer(
    getLoginDetailsReducer,
    {
      data: {},
      loader: true,
      err: false,
    }
  );
  return (
    <loginContext.Provider
      value={{
        loginDetails,
        dispatchLoginDetails,
      }}
    >
      {props.children}
    </loginContext.Provider>
  );
}
