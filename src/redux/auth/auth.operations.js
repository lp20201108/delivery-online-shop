import AuthService from "../../services/auth.service";
import {
  signUpRequested,
  signUpSuccess,
  signUpFailure,
  saveConfirmToken,
  removeConfirmToken,
  confirmAccountRequested,
  confirmAccountSuccess,
  confirmAccountFailure,
} from "./auth.actions";

const authService = new AuthService();

const register = (values) => async (dispatch) => {
  dispatch(signUpRequested());
  try {
    const { data } = await authService.register(values);
    dispatch(signUpSuccess());
    dispatch(saveConfirmToken(data));
  } catch (error) {
    dispatch(signUpFailure(error));
  }
};

const login = (values) => async (dispatch) => {
  try {
  } catch (error) {}
};

const confirmAccount = (verificationCode) => async (dispatch, getState) => {
  const { confirmToken } = getState().auth;
  // console.log(confirmToken)
  dispatch(confirmAccountRequested());
  try {
    const { data } = await authService.confirmAccount({
      verificationCode,
      confirmToken,
    });
    console.log(data);
    dispatch(confirmAccountSuccess());
    dispatch(removeConfirmToken());
  } catch (error) {
    dispatch(confirmAccountFailure(error));
  }
};

export { login, register, confirmAccount };
