import { PureComponent } from "react";
// import PropTypes from "prop-types";

const withFormik = ({ initialValues, handleSubmit }) => (WrappedComponent) => {
  return class WithFormik extends PureComponent {
    state = {
      values: initialValues,
    };

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState((prevState) => ({
        values: {
          ...prevState.values,
          [name]: value,
        },
      }));
    };

    onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(this.state.values);
    };

    render() {
      return (
        <WrappedComponent
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          values={this.state.values}
          {...this.props}
        />
      );
    }
  };
};

export default withFormik;
