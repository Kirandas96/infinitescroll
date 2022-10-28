import * as types from "./actionTypes";

const initialState = { loginReq: false, loginSucc: false, loginErr: false };

export const authReducer = (state = initialState, action) => {
  const { type, msg } = action;
  switch (type) {
    case types.GET_LOGIN_REQUEST: {
      return {
        ...state,
        loginReq: true,
        loginSucc: false,
        loginErr: false,
      };
    }
    case types.GET_LOGIN_SUCCESS: {
      return {
        ...state,
        loginReq: false,
        loginSucc: true,
        loginErr: false,
        message: msg,
      };
    }
    case types.GET_LOGIN_FAILURE: {
      return {
        ...state,
        loginReq: false,
        loginSucc: false,
        loginErr: true,
        message: msg,
      };
    }
    default:return state
  }
 
};
