import { connect, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "../../shared/components";
import TextInput from "../../shared/components/TextInput";
import { removeConfirmToken } from "../../redux/auth/auth.actions";
import { confirmAccount } from "../../redux/auth/auth.operations";

const ConfirmAccount = ({
  confirmToken,
  confirmAccount,
  removeConfirmToken,
}) => {
  const history = useHistory();
  return (
    <div>
      <Modal open={confirmToken} onClose={removeConfirmToken}>
        <Formik
          initialValues={{ verificationCode: "" }}
          onSubmit={({ verificationCode }) => {
            confirmAccount(verificationCode, history);
          }}
        >
          <Form>
            <TextInput type="text" name="verificationCode" />
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Confirm
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

const mapState = (state) => ({
  confirmToken: Boolean(state.auth.confirmToken),
  loading: state.auth.loading,
});

const mapDispatch = {
  confirmAccount,
  removeConfirmToken,
};

export default connect(mapState, mapDispatch)(ConfirmAccount);
