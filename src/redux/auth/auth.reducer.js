import { combineReducers, createReducer } from "@reduxjs/toolkit";

const accessToken = createReducer(null, {});
const refreshToken = createReducer(null, {});

const user = createReducer(
  { email: null, firstName: null, phone: null, avatarURL: null },
  {}
);

const loading = createReducer(false, {});
const error = createReducer(null, {});

const authReducer = combineReducers({
  accessToken,
  refreshToken,
  user,
  loading,
  error,
});

export default authReducer;
