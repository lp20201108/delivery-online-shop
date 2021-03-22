import { combineReducers, createReducer } from "@reduxjs/toolkit";

import {
  signUpFailure,
  signUpSuccess,
  signUpRequested,
  saveConfirmToken,
  removeConfirmToken,
  confirmAccountSuccess,
  confirmAccountRequested,
  confirmAccountFailure,
} from "./auth.actions";

const accessToken = createReducer(null, {});
const refreshToken = createReducer(null, {});

const confirmToken = createReducer(null, {
  [saveConfirmToken]: (state, { payload }) => payload.confirmToken,
  [removeConfirmToken]: () => null,
});

const user = createReducer(
  { email: null, firstName: null, phone: null, avatarURL: null },
  {}
);

const loading = createReducer(false, {
  [signUpFailure]: () => false,
  [signUpSuccess]: () => false,
  [signUpRequested]: () => true,
  [confirmAccountRequested]: () => true,
  [confirmAccountSuccess]: () => false,
  [confirmAccountFailure]: () => false,
});

const handleError = (state, { payload }) => payload;
const clearError = () => null;

const error = createReducer(null, {
  [signUpRequested]: clearError,
  [signUpFailure]: handleError,
  [confirmAccountFailure]: handleError,
  [confirmAccountRequested]: clearError,
});

const authReducer = combineReducers({
  accessToken,
  refreshToken,
  confirmToken,
  user,
  loading,
  error,
});

export default authReducer;
