import React from "react";

import axios from "axios";

const GET_REPORT_SUCCESS = "GET_REPORT_SUCCESS";
const GET_REPORT_FAILED = "GET_REPORT_FAILED";

export const loginApi = async (values, dispatch) => {
  try {
    const res = await axios.post(`https://reqres.in/api/login`, {
      data: {
        email: values,
      },
    });
    if (res.status == "200") {
      dispatch({
        type: GET_REPORT_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_REPORT_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
